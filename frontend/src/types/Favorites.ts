import { ProductProps } from "./ProductTypes"

export interface FavoritesProps {
    favorites: ProductProps[] | null
    handleAddFavorite: (id: string) => void
    handleRemoveFavorite: (id: string) => void
    loading: boolean
    error: unknown
}

export type Product = ProductProps
