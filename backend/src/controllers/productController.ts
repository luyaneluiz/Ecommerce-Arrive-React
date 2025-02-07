import { Request, Response } from "express"
import Product from "../models/productModel"
import mongoose from "mongoose"

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find()
    res.send(products)
}

export const getProductsByType = async (req: Request, res: Response) => {
    const { type } = req.query
    const products = await Product.find({ type })

    res.send(products)
}

export const getProductsByCategory = async (req: Request, res: Response) => {
    const { category } = req.query
    const products = await Product.find({ category })

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

export const updateProducts = async (req: Request, res: Response) => {
    const products = req.body

    try {
        const updatedProducts = await Promise.all(
            products.map(async (product: typeof Product.prototype) => {
                return await Product.findByIdAndUpdate(product._id, product, {
                    new: true,
                })
            }),
        )
        res.send({
            message: "Produtos atualizados com sucesso",
            updatedProducts,
        })
    } catch (error) {
        console.error("Erro ao atualizar produtos:", error)
        res.status(500).send({ error: "Erro ao atualizar os produtos" })
    }
}
