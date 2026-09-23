import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { clerkMiddleware } from '@clerk/express'

import { connectDB } from './src/config/db.js'
import webhookRoutes from './src/routes/webhook.routes.js'
import authRoutes from './src/routes/auth.routes.js'
import productRoutes from './src/routes/product.routes.js'
import { notFound, errorHandler } from './src/middleware/errorHandler.js'

const PORT = process.env.PORT || 5000

await connectDB()

const app = express()

// Allows your Vite frontend (different port/origin in dev) to call this API
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(morgan('dev')) // logs each request to the console: method, path, status, time

// --- Webhook routes MUST be mounted before express.json() ---
// This route parses its own body with express.raw() (see webhook.routes.js)
// because Clerk's signature verification needs the untouched raw bytes.
// If express.json() ran first (globally, for every route), it would already
// have consumed/parsed the body before the webhook route ever saw it.
app.use('/api/webhooks', webhookRoutes)

// Now safe to parse JSON bodies for every route defined after this line
app.use(express.json())

// Reads the Clerk session (if any) off each request and makes it available
// via getAuth(req) / requireAuth() in your route middleware.
app.use(clerkMiddleware())

// app.get('/', (req, res) => {
//   res.status(200).json({ message: "API working hello" });
// });

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)

// Keep these two LAST — order matters:
// notFound catches any request that didn't match a route above,
// errorHandler catches anything that called next(err) anywhere in the app.
// added explanation on server.js
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})