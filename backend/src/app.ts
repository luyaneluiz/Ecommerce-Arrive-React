import express from "express"
import connectDB from "./config/db"
import cors from "./middleware/cors"
import productsRouter from "./routes/productRoutes"
import authRouter from "./routes/auth"
import routerFavorite from "./routes/favorite"
import cartRouter from "./routes/cart"
import session from "express-session"
import MongoStore from "connect-mongo"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

connectDB()

// Configuração de sessões
app.use(
    session({
        secret: process.env.SESSION_SECRET || "defaultSecret",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            collectionName: "sessions",
        }),
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Cookies seguros apenas em produção
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24, // 1 dia
        },
    }),
)

app.use("/products", productsRouter)
app.use("/", routerFavorite)
app.use("/auth", authRouter)
app.use("/cart", cartRouter)

export default app
