import express from "express"
import {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    updateProducts,
} from "../controllers/productController"

const router = express.Router()

router.get("/", getProducts)
router.post("/create/product", createProduct)
router.get("/product/:id", getProductById)
router.put("/update/product/:id", updateProduct)
router.delete("/delete/product/:id", deleteProduct)
router.put("/update/products", updateProducts)

export default router
