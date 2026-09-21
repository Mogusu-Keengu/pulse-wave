import Product from "../models/Product.js";

export async function getProduct (req,res, next) {
   try {
    const product = await Product.findOne({isActive: true})

    if (!product){
        return res.status(404).json({error: 'No Active Product Found'})
    }

    res.status(200).json({product})
   } catch (err) {
    next(err)
   } 
}

export async function createProduct (req,res, next) {
    try {
        const existing = await Product.findOne({isActive: true})
        if (existing) {
            return res.status(409).json({
                error: 'An active product already exists.'
            })
        }
        const {name, description, price, compareAtPrice, stock, images} = req.body

        if (!name || price === undefined) {
            return res.status(400).json({error: 'name and price required'})
        }

        const product = await Product.create({
            name,
            description,
            price,
            compareAtPrice,
            stock,
            images,
        })

        res.status(201).json({product})
    } catch (error) {
        next(err)
    }
}

export async function updateProduct(req, res, next) {
  try {
    const product = await Product.findOneAndUpdate(
      { isActive: true },
      req.body,
      { new: true, runValidators: true }
    )

    if (!product) {
      return res.status(404).json({ error: 'No active product found to update' })
    }

    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
}