import { Request, Response } from "express"
import Order from "../models/order"

export const createOrder = async (req: Request, res: Response) => {
    try {
        console.log("Dados recebidos:", JSON.stringify(req.body, null, 2))

        const {
            user,
            products,
            total,
            status,
            paymentMethod,
            shippingAddress,
            orderDate,
        } = req.body

        if (!user) {
            return res.status(400).json({ error: "Campo 'user' é obrigatório" })
        }
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res
                .status(400)
                .json({ error: "Pelo menos um produto é obrigatório" })
        }
        if (!total) {
            return res
                .status(400)
                .json({ error: "Campo 'total' é obrigatório" })
        }
        if (!shippingAddress) {
            return res
                .status(400)
                .json({ error: "Campo 'shippingAddress' é obrigatório" })
        }

        const orderData = {
            user,
            products,
            total,
            status: status || "pending",
            paymentMethod: paymentMethod || "",
            shippingAddress,
            orderDate: orderDate || new Date(),
        }

        const order = new Order(orderData)
        console.log(
            "Tentando salvar pedido:",
            JSON.stringify(order.toObject(), null, 2),
        )

        await order.save()
        console.log("Pedido criado com sucesso:", order._id)

        res.status(201).json(order)
    } catch (error) {
        console.error("Erro ao criar pedido:", error)
        const errorMessage =
            error instanceof Error ? error.message : "Erro desconhecido"
        res.status(500).json({
            error: "Erro ao criar pedido",
            details: errorMessage,
            stack:
                process.env.NODE_ENV === "development"
                    ? error instanceof Error
                        ? error.stack
                        : ""
                    : undefined,
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
