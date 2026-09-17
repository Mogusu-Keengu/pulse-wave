import mongoose from 'mongoose'

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.error('MongoDB connection failed:', err.message)
    // Exit the process — there's no point running an API that can't reach its DB
    process.exit(1)
  }
}