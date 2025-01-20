import express from "express"
import { addToCart, removeFromCart, getCartProducts } from "../controllers/cart"

const router = express.Router()

router.post("/cart", addToCart)
router.delete("/cart", removeFromCart)
router.get("/cart", getCartProducts)

export default router
