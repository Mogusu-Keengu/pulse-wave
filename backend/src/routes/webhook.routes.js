import { Router } from 'express'
import express from 'express'
import { handleClerkWebhook } from '../controllers/webhook.controller.js'

const router = Router()

// IMPORTANT: this route uses express.raw() instead of express.json().
// Svix signature verification needs the exact, untouched raw request body —
// if express.json() parses it into a JS object first, the signature check
// will fail because the bytes it verifies against no longer match.
router.post(
  '/clerk',
  express.raw({ type: 'application/json' }),
  handleClerkWebhook
)

export default router