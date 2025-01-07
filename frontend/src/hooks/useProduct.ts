import { useEffect, useState } from "react"
import { api } from "../services/api"
import { ProductProps } from "../types/ProductTypes"
import { useParams } from "react-router-dom"

export const useProduct = () => {
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<ProductProps>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    console.log(id)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/products/product/${id}`)

                if (response.data) {
                    setProduct(response.data)
                } else {
                    setError(response.data.error)
                }
            } catch (error) {
                setError((error as Error).message)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        if (id) {
            fetchProduct()
        }
    }, [id])

    return { product, error, loading }
}
