import { Request, Response } from "express"
import Order from "../models/order"

export const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body
        const order = new Order(orderData)
        await order.save()
        res.status(201).json(order)
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido" })
    }
}

export const getUserOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const orders = await Order.find({ user: userId })
            .populate("products.product")
            .populate("paymentMethod")
            .populate("shippingAddress")
        res.json(orders)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" })
    }
}
