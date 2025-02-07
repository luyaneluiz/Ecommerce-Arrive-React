import { Request, Response } from "express"
import Favorite from "../models/favorite"

export const addFavorite = async (req: Request, res: Response) => {
    const { userId, productId } = req.body

    try {
        let favorite = await Favorite.findOne({ user: userId })

        if (!favorite) {
            favorite = new Favorite({ user: userId, products: [productId] })
        } else {
            if (favorite.products.includes(productId)) {
                res.status(400).json({
                    message: "Product already in favorites",
                })
                return
            }

            favorite.products.push(productId)
        }

        await favorite.save()
        res.status(201).json({
            message: `Product added to favorites: ${favorite}`,
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const removeFavorite = async (req: Request, res: Response) => {
    const { userId, productId } = req.body

    try {
        const favorite = await Favorite.findOne({ user: userId })

        if (!favorite) {
            res.status(404).json({
                message: "No favorites found for this user",
            })
            return
        }

        favorite.products = favorite.products.filter(
            (id) => id.toString() !== productId,
        )

        await favorite.save()
        res.status(201).json({
            message: `Product removed from favorites: ${favorite}`,
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getFavorites = async (req: Request, res: Response) => {
    const { userId } = req.query

    try {
        const favorite = await Favorite.findOne({ user: userId }).populate(
            "products",
        )

        if (!favorite || favorite.products.length === 0) {
            res.status(200).json({
                message: "No favorites found for this user",
                products: [],
            })
        } else {
            res.status(200).json(favorite.products)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}
