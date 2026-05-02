import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import Address from "@/types/Address"

export const useAddress = () => {
    const { user } = useAuth()
    const userId = user?._id || null
    const [addresses, setAddresses] = useState<Address[]>([])
    const [error, setError] = useState<unknown>(null)

    const fetchAddresses = async () => {
        try {
            const response = await api.get("/address", {
                params: { userId },
            })

            setAddresses(response.data)
        } catch (error) {
            setError(error)
            console.error("Erro ao buscar endereços:", error)
        }
    }

    const handleAddAddress = async (
        addressData: Omit<Address, "isDefault">,
    ) => {
        try {
            const response = await api.post("/address", {
                userId: user?._id,
                addressData,
            })

            setAddresses((prev) => [...prev, response.data])
        } catch (error) {
            setError(error)
            console.error("Erro ao adicionar endereço:", error)
        }
    }

    const handleUpdateAddress = async (
        id: string,
        addressData: Partial<Address>,
    ) => {
        try {
            const response = await api.put(`/address/${id}`, addressData)
            setAddresses((prev) =>
                prev.map((addr) => (addr._id === id ? response.data : addr)),
            )
        } catch (error) {
            setError(error)
            console.error("Erro ao atualizar endereço:", error)
        }
    }

    useEffect(() => {
        if (userId) fetchAddresses()
    }, [userId])

    return {
        addresses,
        error,
        fetchAddresses,
        handleAddAddress,
        handleUpdateAddress,
    }
}
