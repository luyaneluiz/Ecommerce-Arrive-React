import express from "express"
import {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/productController"

const router = express.Router()

router.get("/products", getProducts)
router.post("/create/product", createProduct)
router.get("/product/:id", getProductById)
router.put("/update/product/:id", updateProduct)
router.delete("/delete/product/:id", deleteProduct)

export default router
