import { Request, Response } from "express"
import PaymentMethod from "../models/paymentMethod"
import User from "../models/auth"

export const createPaymentMethod = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const paymentData = req.body

        const payment = new PaymentMethod({ ...paymentData, user: userId })
        await payment.save()

        await User.findByIdAndUpdate(userId, {
            $push: { paymentMethods: payment._id },
        })

        res.status(201).json(payment)
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar método de pagamento" })
    }
}

export const getPaymentMethods = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const payments = await PaymentMethod.find({ user: userId })
        res.json(payments)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar métodos de pagamento" })
    }
}
