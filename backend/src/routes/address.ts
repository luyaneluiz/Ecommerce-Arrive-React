import express from "express"
import {
    createAddress,
    getAddresses,
    updateAddress,
    deleteAddress,
} from "../controllers/address"

const router = express.Router()

router.post("/", createAddress)
router.get("/", getAddresses)
router.put("/:id", updateAddress)
router.delete("/:id", deleteAddress)

export default router
