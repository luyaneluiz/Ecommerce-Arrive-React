import React, { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { useFavorites } from "@/hooks/useFavorites"

interface FavoritesContextProps {
    favorites: string[]
    handleAddFavorite: (id: string) => void
    handleRemoveFavorite: (id: string) => void
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
    undefined,
)

export const FavoritesProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const { user } = useAuth()
    const userId = user?._id || null
    const { favorites, handleAddFavorite, handleRemoveFavorite } =
        useFavorites(userId)
    const [favoriteIds, setFavoriteIds] = useState<string[]>([])

    useEffect(() => {
        if (favorites) {
            setFavoriteIds(favorites.map((fav) => fav._id))
        }
    }, [favorites])

    return (
        <FavoritesContext.Provider
            value={{
                favorites: favoriteIds,
                handleAddFavorite,
                handleRemoveFavorite,
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
