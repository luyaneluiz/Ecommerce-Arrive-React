import React, { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"
import { ProductCartProps, AddToCartProps } from "../types/Cart"
import { useAuth } from "./AuthContext"
import { notifications } from "@mantine/notifications"

interface PromoCodeState {
    code: string
    discount: number
}

interface CartContextProps {
    cart: ProductCartProps[]
    cartTotal: number
    loading: boolean
    error: unknown
    promoCode: PromoCodeState
    isApplied: boolean
    isValid: boolean
    handleAddToCart: (item: AddToCartProps) => Promise<void>
    handleRemoveFromCart: (productId: string) => Promise<void>
    setPromoCode: React.Dispatch<React.SetStateAction<PromoCodeState>>
    handleApplyPromoCode: () => void
    setIsApplied: React.Dispatch<React.SetStateAction<boolean>>
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>
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

    const [promoCode, setPromoCode] = useState<PromoCodeState>({
        code: "",
        discount: 0,
    })
    const [isApplied, setIsApplied] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const validPromoCodes = ["WELCOME10", "ARRIVE10", "DISCOUNT15"]

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/cart", {
                    params: { userId },
                })

                if (response.data) {
                    const serverCart = response.data as ProductCartProps[]

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
                    const updatedCart = [...(prev || []), response.data.product]
                    setCartTotal(updatedCart.length)

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
                    const updatedCart = prev.filter(
                        (product) => product._id !== productId,
                    )
                    setCartTotal(updatedCart.length)

                    return updatedCart
                })
                notifications.show({
                    title: "Success",
                    message: "Product removed from cart",
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

    const handleApplyPromoCode = () => {
        const isValid = validatePromoCode(promoCode.code)

        if (isValid) {
            setIsApplied(true)
        }
    }

    const validatePromoCode = (code: string) => {
        if (!code) return false

        const codeExists = validPromoCodes.includes(code)

        if (!codeExists) {
            setIsApplied(false)
            setIsValid(false)
            return false
        }

        const discount = setDiscountForPromoCode(code)
        setPromoCode((prev) => ({
            ...prev,
            discount,
        }))
        setIsApplied(true)
        setIsValid(true)

        return true
    }

    const setDiscountForPromoCode = (code: string) => {
        switch (code) {
            case "WELCOME10":
            case "ARRIVE10":
                return 10
            case "DISCOUNT15":
                return 15
            default:
                return 0
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                cartTotal,
                loading,
                error,
                promoCode,
                isApplied,
                isValid,
                handleAddToCart,
                handleRemoveFromCart,
                setPromoCode,
                handleApplyPromoCode,
                setIsApplied,
                setIsValid,
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
