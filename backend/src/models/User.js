import mongoose from 'mongoose'

/**
 * This collection mirrors identity data from Clerk — Clerk stays the source
 * of truth for auth (passwords, sessions, sign-in). We only store what our
 * own app needs to query/join against (orders, reviews, etc. can reference
 * this document's _id or clerkId).
 */
const userSchema = new mongoose.Schema(
  {
    // Clerk's unique user id (e.g. "user_2abc123..."). This is how we match
    // an authenticated request back to a user in our own database.
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
      default: '',
    },
    lastName: {
      type: String,
      trim: true,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    // Simple role flag for gating admin routes later (orders dashboard, etc.)
    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
)

export default mongoose.model('User', userSchema)