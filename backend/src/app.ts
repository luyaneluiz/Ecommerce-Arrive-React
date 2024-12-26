import express from "express"
import connectDB from "./config/db"
import cors from "./middleware/cors"
import productsRouter from "./routes/productRoutes"
import authRouter from "./routes/auth"
import routerFavorite from "./routes/favorite"

const app = express()

app.use(cors)
app.use(express.json())

connectDB()

app.use("/products", productsRouter)
app.use("/", routerFavorite)
app.use("/auth", authRouter)

export default app
