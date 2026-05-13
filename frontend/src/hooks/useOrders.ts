import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Order } from "@/types/Order"

export const useOrders = () => {
    const { user } = useAuth()
    const userId = user?._id || null
    const [orders, setOrders] = useState<Order[]>([])
    const [error, setError] = useState<unknown>(null)

    const fetchOrders = async () => {
        try {
            const response = await api.get(`/order/${userId}`)

            setOrders(response.data)
        } catch (error) {
            setError(error)
            console.error("Erro ao buscar pedidos:", error)
        }
    }

    const handleAddOrder = async (orderData: Omit<Order, "isDefault">) => {
        try {
            const response = await api.post("/order", {
                user: user?._id,
                ...orderData,
            })

            setOrders((prev) => [...prev, response.data])
            return response.data
        } catch (error) {
            console.error("❌ Erro ao finalizar pedido:", error)
            throw error
        }
    }

    useEffect(() => {
        if (userId) fetchOrders()
    }, [userId])

    return {
        orders,
        error,
        fetchOrders,
        handleAddOrder,
    }
}
