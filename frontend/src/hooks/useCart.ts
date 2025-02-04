import { api } from "../services/api"
import { useEffect, useState } from "react"
import { CartProps, ProductCartProps, AddToCartProps } from "../types/Cart"

export const useCart = (userId: string | null): CartProps => {
    const [cart, setCart] = useState<ProductCartProps[] | null>(null)
    const [error, setError] = useState<unknown>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [cartTotal, setCartTotal] = useState<number>(0)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/cart/products", {
                    params: { userId },
                })

                if (response.data) {
                    setCart(response.data)
                    setCartTotal(response.data.length)
                }
            } catch (error) {
                setError(error)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if (userId) fetchCart()
    }, [userId])

    async function handleAddToCart(item: AddToCartProps) {
        try {
            const response = await api.post("/cart/add", {
                userId: userId,
                product: item,
            })

            if (response.data) {
                setCart((prev) => [...(prev || []), response.data])
                setCartTotal((prev) => prev + item.price)
                console.log("Product added to cart")
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function handleRemoveFromCart(productId: string) {
        try {
            const response = await api.delete("/cart/remove", {
                data: { userId, productId },
            })

            if (response.data) {
                setCart((prev) =>
                    [...(prev || [])].filter(
                        (product) => product._id !== productId,
                    ),
                )
                console.log("Product removed from cart")
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        cart,
        setCart,
        handleAddToCart,
        handleRemoveFromCart,
        cartTotal,
        error,
        loading,
    }
}
