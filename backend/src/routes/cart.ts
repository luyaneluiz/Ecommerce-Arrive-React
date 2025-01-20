import express from "express"
import { addToCart, removeFromCart, getCartProducts } from "../controllers/cart"

const router = express.Router()

router.post("/add", addToCart)
router.delete("/remove", removeFromCart)
router.get("/products", getCartProducts)

export default router
