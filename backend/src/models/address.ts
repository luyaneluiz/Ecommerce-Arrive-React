import mongoose from "mongoose"

export interface IAddress extends mongoose.Document {
    user: mongoose.Schema.Types.ObjectId
    first_name: string
    last_name: string
    street: string
    number: string
    state: string
    zipCode: string
    phone_number: string
    isDefault: boolean
}

const AddressSchema = new mongoose.Schema<IAddress>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        isDefault: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
)

const Address = mongoose.model("Address", AddressSchema)

export default Address
