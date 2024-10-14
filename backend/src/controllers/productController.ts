import { Request, Response } from "express"
import Product from "../models/productModel"
import mongoose from "mongoose"

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find()
    res.send(products)
}

export const createProduct = async (req: Request, res: Response) => {
    const product = new Product(req.body)
    await product.save()
    res.send(product)
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send({ error: "Invalid ID" })
            return
        }

        if (!product) {
            res.status(404).send({ error: "Product not found" })
            return
        }

        res.status(200).send(product)
    } catch (error) {
        res.status(500).send({ error: "Error fetching product" })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
    )
    res.send(`Product updated successfully: ${updatedProduct}`)
}

export const deleteProduct = async (req: Request, res: Response) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(`Product deleted successfully: ${deletedProduct}`)
}
