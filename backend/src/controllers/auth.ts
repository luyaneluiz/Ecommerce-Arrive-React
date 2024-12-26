import { Request, RequestHandler, Response } from "express"
import User from "../models/auth"
import bcrypt from "bcrypt"
import "express-session"

declare module "express-session" {
    interface SessionData {
        user?: {
            _id: string
            name: string
            email: string
        }
    }
}

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

        if (user) {
            req.session.user = {
                _id: user._id as string,
                name: user.name,
                email: user.email,
            }
            res.status(200).json({
                message: "Logged in",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const me: RequestHandler = async (req, res, next) => {
    try {
        if (req.session.user) {
            res.json({ user: req.session.user })
        } else {
            res.status(401).json({
                message: "Not authenticated",
            })
        }
    } catch (error) {
        next(error)
    }
}
