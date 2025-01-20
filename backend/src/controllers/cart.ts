import { Request, Response } from "express"
import Cart from "../models/cart"

export const addToCart = async (req: Request, res: Response) => {
    const { userId, productId } = req.body

    try {
        let cart = await Cart.findOne({ user: userId })

        if (!cart) {
            cart = new Cart({ user: userId, products: [productId] })
        } else {
            if (cart.products.includes(productId)) {
                res.status(400).json({
                    message: "Product already in cart",
                })
                return
            }

            cart.products.push(productId)
        }

        await cart.save()
        res.status(201).json({
            message: `Product added to cart: ${cart}`,
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
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
            return
        }

        cart.products = cart.products.filter(
            (id) => id.toString() !== productId,
        )

        await cart.save()
        res.status(201).json({
            message: `Product removed from cart: ${cart}`,
        })
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
