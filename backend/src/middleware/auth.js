import { requireAuth as clerkRequireAuth, getAuth } from '@clerk/express'
import User from '../models/User.js'

/**
 * Blocks the request unless the incoming request has a valid Clerk session
 * (checked via the Authorization header / session cookie that Clerk's
 * frontend SDK attaches automatically). If there's no valid session, Clerk
 * responds with 401 before your route handler ever runs.
 *
 * Usage: router.get('/me', requireAuth, attachUser, controllerFn)
 */
export const requireAuth = clerkRequireAuth()

/**
 * Runs AFTER requireAuth. Looks up the matching MongoDB user document using
 * the Clerk user id from the verified session, and attaches it to req.user
 * so downstream controllers don't have to repeat this lookup.
 *
 * If no matching document exists yet (e.g. the webhook hasn't fired yet,
 * or ran into an issue), we fail clearly rather than silently continuing
 * with an undefined user.
 */
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

/**
 * Gate for admin-only routes. Must run after requireAuth + attachUser.
 */
export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required.' })
  }
  next()
}