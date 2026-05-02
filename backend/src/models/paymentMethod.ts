import mongoose from "mongoose"

export interface IPaymentMethod extends mongoose.Document {
    user: mongoose.Types.ObjectId
    type: "credit_card" | "debit_card" | "paypal" | "bank_transfer"
    cardNumber?: string // Últimos 4 dígitos para referência
    cardHolderName?: string
    expiryDate?: string
    isDefault: boolean
    // Outros campos conforme necessário
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
            enum: ["credit_card", "debit_card", "paypal", "bank_transfer"],
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
