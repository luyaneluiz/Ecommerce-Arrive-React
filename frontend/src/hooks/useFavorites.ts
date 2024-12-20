import { api } from "../services/api"
import { useEffect, useState } from "react"
import { FavoritesProps, Product } from "../types/Favorites"

export const useFavorites = (userId: string): FavoritesProps => {
    const [favorites, setFavorites] = useState<Product[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await api.get("/favorites", {
                    params: { userId },
                })

                if (response.data) {
                    setFavorites(response.data)
                } else {
                    setError(response.data.error)
                }
            } catch (error) {
                setError(error)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchFavorites()
    }, [userId])

    return { favorites, setFavorites, error, loading }
}
