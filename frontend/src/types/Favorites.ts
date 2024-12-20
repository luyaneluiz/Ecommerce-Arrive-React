import { ProductProps } from "./ProductTypes"

export interface FavoritesProps {
    favorites: ProductProps[] | null
    setFavorites: React.Dispatch<React.SetStateAction<ProductProps[] | null>>
    loading: boolean
    error: string | null
}

export type Product = ProductProps
