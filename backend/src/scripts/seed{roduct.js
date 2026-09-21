import 'dotenv/config'
import { connectDB } from '../config/db.js'
import Product from '../models/Product.js'

await connectDB()

await Product.deleteMany({}) // clears any old test data first

const product = await Product.create({
  name: 'PulseWave EMS Massager',
  description: 'Advanced EMS micro-current technology engineered to melt away neck, shoulder, and back tension in 15 minutes.',
  price: 39.0,
  compareAtPrice: 78.0,
  stock: 500,
  images: [
    'https://res.cloudinary.com/dumscqrjj/image/upload/v1789539337/hero.section_xxjfbe.png',
  ],
})

console.log('Seeded product:', product)
process.exit(0)