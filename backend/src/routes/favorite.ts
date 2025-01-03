import express from "express"
import {
    addFavorite,
    removeFavorite,
    getFavorites,
} from "../controllers/favorite"

const router = express.Router()

router.post("/favorites", addFavorite)
router.delete("/favorites", removeFavorite)
router.get("/favorites", getFavorites)

export default router
