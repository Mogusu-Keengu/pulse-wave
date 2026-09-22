import { getAuth } from '@clerk/express'
import User from '../models/User.js'

/**
 * Checks for a valid Clerk session using getAuth(req) — this relies on
 * clerkMiddleware() (mounted globally in app.js) already having run and
 * attached auth info to the request.
 *
 * Unlike Clerk's own requireAuth() helper, this always returns a clean
 * 401 JSON response when there's no valid session — it never redirects.
 * That matters here because this is an API, not a browser app; a 302
 * redirect is meaningless to a tool like Insomnia or a fetch() call.
 */
export function requireAuth(req, res, next) {
  const { userId } = getAuth(req)

  if (!userId) {
    return res.status(401).json({ error: 'Authentication required.' })
  }

  next()
}

export async function attachUser(req, res, next) {
  try {
    const { userId } = getAuth(req)

    const user = await User.findOne({ clerkId: userId })

    if (!user) {
      return res.status(404).json({
        error: 'No matching user record found for this account yet.',
      })
    }

    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required.' })
  }
  next()
}