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

app.get("/product/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send({ error: 'Invalid ID' });
            return;
        }

        if (!product) {
            res.status(404).send({ error: 'Product not found' });
            return;
        }
        
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching product' });
    }
});

// ****** Post multiplo ******** //
// app.post("/create/product", async (req: Request, res: Response) => {
//     try {
//         const products = req.body; // Espera um array de produtos
//         const result = await Product.insertMany(products);
//         res.status(201).send(result);
//     } catch (error) {
//         res.status(500).send({ error: 'Erro ao criar produtos' });
//     }
// });

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
