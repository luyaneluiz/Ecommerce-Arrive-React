import mongoose from "mongoose"

export interface IOrder extends mongoose.Document {
    user: mongoose.Types.ObjectId
    products: {
        product: mongoose.Types.ObjectId
        quantity: number
        price: number
    }[]
    total: number
    status: "pending" | "paid" | "shipped" | "delivered" | "cancelled"
    paymentMethod: "credit_card" | "paypal"
    shippingAddress: mongoose.Types.ObjectId
    shippingMethod: "standard" | "express"
    orderDate: Date
}

const OrderSchema = new mongoose.Schema<IOrder>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
            default: "pending",
        },
        paymentMethod: {
            type: String,
            enum: ["credit_card", "paypal"],
        },
        shippingAddress: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true,
        },
        orderDate: {
            type: Date,
            default: Date.now,
        },
        shippingMethod: {
            type: String,
            enum: ["standard", "express"],
            default: "standard",
        },
    },
    { timestamps: true },
)

const Order = mongoose.model("Order", OrderSchema)

export default Order
