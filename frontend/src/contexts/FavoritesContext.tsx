import React, { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { api } from "../services/api"
import { Product } from "../types/Favorites"

interface FavoritesContextProps {
    favorites: Product[] | null
    handleAddFavorite: (id: string) => void
    handleRemoveFavorite: (id: string) => void
    error: unknown
    loading: boolean
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
    undefined,
)

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { user } = useAuth()
    const userId = user?._id || null
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
                }
            } catch (error) {
                setError(error)
                setFavorites([])
            } finally {
                setLoading(false)
            }
        }

        if (userId) fetchFavorites()
    }, [userId])

    const handleAddFavorite = async (id: string) => {
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

    const handleRemoveFavorite = async (id: string) => {
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

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                handleAddFavorite,
                handleRemoveFavorite,
                error,
                loading,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error(
            "useFavoritesContext must be used within a FavoritesProvider",
        )
    }
    return context
}
