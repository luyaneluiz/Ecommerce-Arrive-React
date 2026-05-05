import mongoose from "mongoose"

export interface IPaymentMethod extends mongoose.Document {
    user: mongoose.Types.ObjectId
    type: "credit_card" | "paypal"
    cardNumber?: string
    cardHolderName?: string
    expiryDate?: string
    isDefault: boolean
}

const PaymentMethodSchema = new mongoose.Schema<IPaymentMethod>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type: {
            type: String,
            enum: ["credit_card", "paypal"],
            required: true,
        },
        cardNumber: {
            type: String,
        },
        cardHolderName: {
            type: String,
        },
        expiryDate: {
            type: String,
        },
        isDefault: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
)

const PaymentMethod = mongoose.model("PaymentMethod", PaymentMethodSchema)

export default PaymentMethod
