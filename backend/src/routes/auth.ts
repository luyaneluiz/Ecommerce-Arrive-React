import express from "express"
import session from "express-session"
import { register, login } from "../controllers/auth"

const router = express.Router()

router.use(
    session({
        secret: process.env.SESSION_SECRET || "secret_key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Usa cookies seguros apenas em HTTPS no ambiente de produção
            maxAge: 24 * 60 * 60 * 1000, // 1 dia
        },
    }),
)

router.post("/register", register)
router.post("/login", login)

export default router
