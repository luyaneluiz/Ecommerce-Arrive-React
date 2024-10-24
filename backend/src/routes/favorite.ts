import express from "express"
import {
    addFavorite,
    removeFavorite,
    getFavorites,
} from "../controllers/favorite"
// import { protect } from "../middleware/authMiddleware"

const router = express.Router()

// router.post("/favorites", protect, addFavorite)
// router.delete("/favorites", protect, removeFavorite)
// router.get("/favorites", protect, getFavorites)

router.post("/favorites", addFavorite)
router.delete("/favorites", removeFavorite)
router.get("/favorites", getFavorites)

export default router
