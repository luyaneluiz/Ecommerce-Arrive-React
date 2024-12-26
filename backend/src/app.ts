import express from "express"
import connectDB from "./config/db"
import cors from "./middleware/cors"
import productsRouter from "./routes/productRoutes"
import authRouter from "./routes/auth"
import routerFavorite from "./routes/favorite"
// import session from "express-session"
// import MongoStore from "connect-mongo"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())

connectDB()

// Configuração de sessões
// app.use(
//     session({
//         secret: "yourSuperSecretKey", // Escolha um segredo forte para proteger as sessões
//         resave: false,
//         saveUninitialized: false,
//         store: MongoStore.create({
//             mongoUrl:
//                 "mongodb+srv://luyaneluiz:PONYlVankgoa@ecommerce.wthpq.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce",
//             collectionName: "sessions",
//         }),
//         cookie: {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production", // Cookies seguros apenas em produção
//             sameSite: "strict",
//             maxAge: 1000 * 60 * 60 * 24, // 1 dia
//         },
//     }),
// )

app.use("/products", productsRouter)
app.use("/", routerFavorite)
app.use("/auth", authRouter)

export default app
