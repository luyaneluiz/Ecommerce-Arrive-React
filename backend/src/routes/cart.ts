import express from "express"
import { addToCart, removeFromCart, getCartProducts } from "../controllers/cart"

const router = express.Router()

router.get("/", getCartProducts)
router.post("/add", addToCart)
router.delete("/remove", removeFromCart)

export default router
