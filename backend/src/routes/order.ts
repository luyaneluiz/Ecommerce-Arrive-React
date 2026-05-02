import express from "express"
import { createOrder, getUserOrders } from "../controllers/order"

const router = express.Router()

router.post("/", createOrder)
router.get("/:userId", getUserOrders)

export default router
