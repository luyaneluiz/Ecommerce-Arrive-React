import { api } from "../services/api"
import { useEffect, useState } from "react"
import { FavoritesProps, Product } from "../types/Favorites"

export const useFavorites = (userId: string | null): FavoritesProps => {
    const [favorites, setFavorites] = useState<Product[] | null>(null)
    const [error, setError] = useState<unknown>(null)
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

    async function handleAddFavorite(id: string) {
        try {
            const response = await api.post("/favorites", {
                userId: userId,
                productId: id,
            })

            if (response.data) {
                setFavorites((prev) => [...(prev || []), response.data])
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function handleRemoveFavorite(id: string) {
        try {
            const response = await api.delete("/favorites", {
                data: {
                    userId: userId,
                    productId: id,
                },
            })

            if (response.data) {
                setFavorites((prev) =>
                    prev ? prev.filter((fav) => fav._id !== id) : [],
                )
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        favorites,
        handleAddFavorite,
        handleRemoveFavorite,
        error,
        loading,
    }
}
