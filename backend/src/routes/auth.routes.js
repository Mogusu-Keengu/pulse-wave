import { Router } from 'express'
import { requireAuth, attachUser } from '../middleware/auth.js'
import { getCurrentUser } from '../controllers/auth.controller.js'

const router = Router()

// GET /api/auth/me — returns the signed-in user's own DB record.
// requireAuth verifies the Clerk session; attachUser loads the Mongo doc.
router.get('/me', requireAuth, attachUser, getCurrentUser)

export default router