import express from "express"
import connectDB from "./config/db"
import cors from "./middleware/cors"
import productsRouter from "./routes/productRoutes"
import authRouter from "./routes/auth"
import userRouter from "./routes/userRoutes"
import routerFavorite from "./routes/favorite"
import cartRouter from "./routes/cart"
import addressRouter from "./routes/address"
import paymentRouter from "./routes/paymentMethod"
import orderRouter from "./routes/order"
import session from "express-session"
import MongoStore from "connect-mongo"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

connectDB()

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
            secure: process.env.NODE_ENV === "production", // cookies seguros apenas em produção
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24, // 1 dia
        },
    }),
)

app.use("/products", productsRouter)
app.use("/", routerFavorite)
app.use("/auth", authRouter)
app.use("/cart", cartRouter)
app.use("/user", userRouter)
app.use("/address", addressRouter)
app.use("/payment", paymentRouter)
app.use("/order", orderRouter)

export default app
