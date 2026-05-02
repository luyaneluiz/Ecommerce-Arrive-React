import { Request, Response } from "express"
import Address from "../models/address"
import User from "../models/auth"

export const createAddress = async (req: Request, res: Response) => {
    try {
        const { userId, addressData } = req.body

        const address = new Address({ ...addressData, user: userId })
        await address.save()

        await User.findByIdAndUpdate(userId, {
            $push: { addresses: address._id },
        })

        res.status(201).json(address)
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar endereço" })
    }
}

export const getAddresses = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query
        const addresses = await Address.find({ user: userId })
        res.json(addresses)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar endereços" })
    }
}

export const updateAddress = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const updates = req.body
        const address = await Address.findByIdAndUpdate(id, updates, {
            new: true,
        })
        res.json(address)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar endereço" })
    }
}

export const deleteAddress = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await Address.findByIdAndDelete(id)
        res.json({ message: "Endereço deletado" })
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar endereço" })
    }
}
