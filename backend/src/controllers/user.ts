import { Request, Response } from "express"
import User from "../models/auth"

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const updates = req.body
        const user = await User.findByIdAndUpdate(id, updates, { new: true })
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário" })
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
            .populate("addresses")
            .populate("paymentMethods")
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuário" })
    }
}
