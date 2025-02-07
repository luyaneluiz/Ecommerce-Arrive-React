import { api } from "@/services/api"
import { useState, useEffect } from "react"

export const useCategories = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories")

                setCategories(response.data)
            } catch (error) {
                setError(error)
                console.error("Erro ao buscar categorias:", error)
            }
        }

        fetchCategories()
    }, [])

    return { categories, error }
}
