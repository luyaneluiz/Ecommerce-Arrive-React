import { Router, Request, Response } from "express"

const router = Router()

router.get("/products", (req: Request, res: Response) => {
    res.json({ message: "lista de produtos" })
})

export default router
