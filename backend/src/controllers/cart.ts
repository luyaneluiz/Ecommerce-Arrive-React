import { Request, Response } from "express"
import Cart from "../models/cart"

export const addToCart = async (req: Request, res: Response) => {
    const { userId, product } = req.body

    try {
        let cart = await Cart.findOne({ user: userId })

        if (!cart) {
            cart = new Cart({
                user: userId,
                products: [product],
            })
        } else {
            const productIndex = cart.products.findIndex(
                (item) =>
                    item._id.toString() === product._id &&
                    item.size === product.id &&
                    item.color === product.color,
            )

            if (productIndex > -1) {
                cart.products[productIndex].quantity += product.quantity
                cart.products[productIndex].subtotal += product.subtotal
            } else {
                cart.products.push(product)
            }
        }

        await cart.save()

        res.status(201).json({
            message: `Product added to cart: ${cart}`,
        })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const removeFromCart = async (req: Request, res: Response) => {
    const { userId, productId } = req.body

    try {
        const cart = await Cart.findOne({ user: userId })

        if (!cart) {
            res.status(404).json({
                message: "No cart found for this user",
            })
        } else {
            cart.products = cart.products.filter(
                (product) => product._id.toString() !== productId,
            )

            await cart.save()

            res.status(200).json({
                message: `Product removed from cart: ${productId}`,
            })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getCartProducts = async (req: Request, res: Response) => {
    const { userId } = req.query

    try {
        const cart = await Cart.findOne({ user: userId }).populate("products")

        if (!cart) {
            res.status(404).json({
                message: "No cart found for this user",
            })
        } else {
            res.status(200).json(cart.products)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}
