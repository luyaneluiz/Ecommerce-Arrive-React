import express, { Request, Response } from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const port = 3002

const productSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    cover: String,
    description: String,
    type: String
})

const Product = mongoose.model("Product", productSchema);

app.use(cors());
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.get("/products", async (req: Request, res: Response) => {
    const products = await Product.find()
    res.send(products)
})

app.post("/create/product", async (req: Request, res: Response) => {
    const product = new Product({
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        cover: req.body.cover,
        description: req.body.description,
        type: req.body.type
    })

    await product.save()
    res.send(product)
})

app.put("/update/product/:id", async (req: Request, res: Response) => {
    const product = await Product.findOneAndUpdate({ id: req.params }, req.body )

    res.send(`Product updated successfully ${product}`)
})

app.delete("/delete/product/:id", async (req: Request, res: Response) => {
    const product = await Product.findByIdAndDelete({ id: req.params.id })
    
    res.send(`Product deleted successfully ${product}`)
})

app.listen(port, () => {
    mongoose.connect("mongodb+srv://luyaneluiz:PONYlVankgoa@ecommerce.wthpq.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce")

    console.log(`Server is running at http://localhost:${port}`)
})
