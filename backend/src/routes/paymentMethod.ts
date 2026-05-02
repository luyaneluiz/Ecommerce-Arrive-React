import express from "express"
import {
    createPaymentMethod,
    getPaymentMethods,
} from "../controllers/paymentMethod"

const router = express.Router()

router.post("/:userId", createPaymentMethod)
router.get("/:userId", getPaymentMethods)

export default router
