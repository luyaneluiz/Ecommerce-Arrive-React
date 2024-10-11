import express, { Request, Response } from "express"
import products from "./routes/products"

const app = express()
const port = 3002

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.use("/api", products)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
