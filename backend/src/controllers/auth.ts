import { Request, Response } from "express"
import User from "../models/auth"
import bcrypt from "bcrypt"

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            res.status(400).json({
                message: "User already exists",
            })
            return
        }

        const user = new User({ name, email, password })
        await user.save()
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            res.status(404).json({
                message: "User not found",
            })
            return
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            res.status(400).json({
                message: "Invalid credentials",
            })
            return
        }

        // req.session.id = user._id

        res.status(200).json({
            message: "Logged in",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}
