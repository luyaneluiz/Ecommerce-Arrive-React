import React, { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"
import { ProductCartProps, AddToCartProps } from "../types/Cart"
import { useAuth } from "./AuthContext"
import { notifications } from "@mantine/notifications"

interface CartContextProps {
    cart: ProductCartProps[]
    cartTotal: number
    loading: boolean
    error: unknown
    handleAddToCart: (item: AddToCartProps) => Promise<void>
    handleRemoveFromCart: (productId: string) => Promise<void>
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { user } = useAuth()
    const userId = user?._id || null
    const [cart, setCart] = useState<ProductCartProps[]>([])
    const [error, setError] = useState<unknown>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [cartTotal, setCartTotal] = useState<number>(0)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/cart", {
                    params: { userId },
                })

                if (response.data) {
                    console.log("Cart data fetched:", response.data)

                    const serverCart = response.data
                        .products as ProductCartProps[]

                    setCart(serverCart)
                    setCartTotal(serverCart.length)
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

    const handleAddToCart = async (item: AddToCartProps) => {
        try {
            const response = await api.post("/cart/add", {
                userId: userId,
                product: item,
            })

            if (response.data) {
                setCart((prev) => {
                    const updatedCart = [...prev, response.data.product]
                    setCartTotal(updatedCart.length)

                    console.log("Prev cart:", prev)

                    return updatedCart
                })

                notifications.show({
                    title: "Success",
                    message: "Product added to cart",
                    color: "green",
                    autoClose: 3000,
                    position: "top-right",
                })
            } else {
                notifications.show({
                    title: "Error",
                    message: response.data.error,
                    color: "red",
                    autoClose: 3000,
                    position: "top-right",
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleRemoveFromCart = async (productId: string) => {
        try {
            const response = await api.delete("/cart/remove", {
                data: { userId, productId },
            })

            if (response.data) {
                setCart((prev) => {
                    const updatedCart = [...(prev || [])].filter(
                        (product) => product._id !== productId,
                    )
                    setCartTotal(updatedCart.length)
                    return updatedCart
                })
                console.log("Product removed from cart")
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                cartTotal,
                loading,
                error,
                handleAddToCart,
                handleRemoveFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider")
    }
    return context
}
