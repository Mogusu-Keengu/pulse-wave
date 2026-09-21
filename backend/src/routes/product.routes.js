import { Router } from 'express'
import { requireAuth, attachUser, requireAdmin } from '../middleware/auth.js'
import { createProduct } from '../controllers/product.controller.js'
import { getProduct } from '../controllers/product.controller.js'
import { updateProduct } from '../controllers/product.controller.js'

const router = Router()

// GET /api/auth/me — returns the signed-in user's own DB record.
// requireAuth verifies the Clerk session; attachUser loads the Mongo doc.
router.get('/', getProduct)
router.post('/', requireAuth, attachUser,requireAdmin, createProduct)
router.patch('/', requireAuth, attachUser,requireAdmin, updateProduct)


export default router