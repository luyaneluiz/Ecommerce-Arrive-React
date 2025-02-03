import { api } from "../services/api"
import { useEffect, useState } from "react"
import { CartProps, ProductCartProps, AddToCartProps } from "../types/Cart"
import { Bounce, toast } from "react-toastify"

export const useCart = (userId: string | null): CartProps => {
    const [cart, setCart] = useState<ProductCartProps[] | null>(null)
    const [error, setError] = useState<unknown>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/cart/products", {
                    params: { userId },
                })

                if (response.data) {
                    setCart(response.data)
                    toast("🦄 Wow so easy!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    })
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

    async function handleAddToCart({
        productId,
        color,
        size,
        quantity,
    }: AddToCartProps) {
        try {
            const response = await api.post("/cart/add", {
                userId: userId,
                productId: productId,
                color: color,
                size: size,
                quantity: quantity,
            })

            if (response.data) {
                setCart((prev) => [...(prev || []), response.data])
                console.log("Product added to cart")
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return { cart, setCart, handleAddToCart, error, loading }
}
