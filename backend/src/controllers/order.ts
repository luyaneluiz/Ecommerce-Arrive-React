import { Request, Response } from "express"
import Order from "../models/order"
import { clearCartByUser } from "./cart"

export const createOrder = async (req: Request, res: Response) => {
    try {
        const {
            user,
            products,
            total,
            status,
            paymentMethod,
            shippingAddress,
            shippingMethod,
            orderDate,
        } = req.body

        const order = new Order({
            user,
            products,
            total,
            status,
            paymentMethod,
            shippingAddress,
            shippingMethod,
            orderDate,
        })

        await order.save()

        try {
            await clearCartByUser(user)
        } catch (clearError) {
            console.error(
                "Erro ao limpar carrinho após criar pedido:",
                clearError,
            )
        }

        res.status(201).json(order)
    } catch (error) {
        console.error("Erro no backend ao criar pedido:", error)

        res.status(500).json({
            message: "Erro ao criar pedido",
        })
    }
}

export const getUserOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const orders = await Order.find({ user: userId })
            .populate("products.product")
            .populate("shippingAddress")
        res.json(orders)
    } catch (error) {
        console.error("Erro ao buscar pedidos:", error)
        const errorMessage =
            error instanceof Error ? error.message : "Erro desconhecido"
        res.status(500).json({
            error: "Erro ao buscar pedidos",
            details: errorMessage,
        })
    }
}
