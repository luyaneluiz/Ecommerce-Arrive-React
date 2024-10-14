import express from "express"
import connectDB from "./config/db"
import cors from "./middleware/cors"
import router from "./routes/productRoutes"

const app = express()

app.use(cors)
app.use(express.json())

connectDB()

app.use("/", router)

export default app
