import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { ProductProps } from "@/types/Product"

export const useProducts = () => {
    const [products, setProducts] = useState<ProductProps[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/products")

                setProducts(response.data)
            } catch (error) {
                setError(error)
                console.error("Erro ao buscar produtos:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    async function fetchProductsByType(type: string) {
        try {
            const response = await api.get(`/products/type?type=${type}`)

            setFilteredProducts(response.data)
        } catch (error) {
            setError(error)
            console.error("Erro ao buscar produtos:", error)
        } finally {
            setLoading(false)
        }
    }

    async function fetchProductsByCategory(category: string) {
        try {
            const response = await api.get(
                `/products/category?category=${category}`,
            )

            setFilteredProducts(response.data)
        } catch (error) {
            setError(error)
            console.error("Erro ao buscar produtos:", error)
        } finally {
            setLoading(false)
        }
    }

    return {
        products,
        filteredProducts,
        fetchProductsByType,
        fetchProductsByCategory,
        loading,
        error,
    }
}
