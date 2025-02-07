import mongoose from "mongoose"

interface ICart extends Document {
    user: mongoose.Schema.Types.ObjectId
    products: {
        _id: mongoose.Schema.Types.ObjectId
        size: string
        color: string
        quantity: number
        price: number
        subtotal: number
        cover: string
        title: string
    }[]
}

const cartSchema = new mongoose.Schema<ICart>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                size: {
                    type: String,
                    required: true,
                },
                color: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                },
                price: {
                    type: Number,
                    required: true,
                },
                subtotal: {
                    type: Number,
                    required: true,
                },
                cover: {
                    type: String,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true },
)

const Cart = mongoose.model("Cart", cartSchema)

export default Cart
