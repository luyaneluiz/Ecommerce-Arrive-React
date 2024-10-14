import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://luyaneluiz:PONYlVankgoa@ecommerce.wthpq.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce",
        )

        console.log("MongoDB connected")
    } catch (error) {
        console.error("MongoDB connection failed")
        process.exit(1)
    }
}

export default connectDB
