import cors from "cors"

const allowedOrigins = ["http://localhost:5173"]

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}

const corsMiddleware = cors(corsOptions)

export default corsMiddleware
