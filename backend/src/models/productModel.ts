import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    cover: String,
    description: String,
    type: String,
})

const Product = mongoose.model("Product", productSchema)

export default Product
