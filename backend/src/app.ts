import express from "express"
import connectDB from "./config/db"
import cors from "./middleware/cors"
import router from "./routes/productRoutes"
import routerFavorite from "./routes/favorite"

const app = express()

app.use(cors)
app.use(express.json())

connectDB()

app.use("/", router)
app.use("/", routerFavorite)

export default app
