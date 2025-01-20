import mongoose from "mongoose"

interface ICart extends Document {
    user: mongoose.Schema.Types.ObjectId
    products: mongoose.Schema.Types.ObjectId[]
}

const favoriteSchema = new mongoose.Schema<ICart>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
        ],
    },
    { timestamps: true },
)

const Cart = mongoose.model("Cart", favoriteSchema)

export default Cart
