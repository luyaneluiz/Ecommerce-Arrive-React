import mongoose from "mongoose"

interface IFavorite extends Document {
    user: mongoose.Schema.Types.ObjectId
    products: mongoose.Schema.Types.ObjectId[]
}

const favoriteSchema = new mongoose.Schema<IFavorite>(
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

const Favorites = mongoose.model("Favorites", favoriteSchema)

export default Favorites
