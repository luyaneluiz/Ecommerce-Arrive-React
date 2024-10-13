import { useEffect, useState } from "react"
import { api } from "../services/api"
import { ProductProps } from "../types/ProductTypes"

export const useProducts = () => {
    const [products, setProducts] = useState<ProductProps[]>([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/products")
                setProducts(response.data)
            } catch (error) {
                setError(error)
                console.error("Erro ao buscar produtos:", error)
            }
        }

        fetchProducts()
    }, [])

    return { products, error }
}
