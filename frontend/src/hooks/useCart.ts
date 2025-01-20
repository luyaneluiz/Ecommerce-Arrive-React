import { api } from "../services/api"
import { useEffect, useState } from "react"
import { CartProps, Product } from "../types/Cart"

export const useCart = (userId: string | null): CartProps => {
    const [cart, setCart] = useState<Product[] | null>(null)
    const [error, setError] = useState<unknown>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/cart", {
                    params: { userId },
                })

                if (response.data) {
                    setCart(response.data)
                } else {
                    setError(response.data.error)
                }
            } catch (error) {
                setError(error)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCart()
    }, [userId])

    return { cart, setCart, error, loading }
}
