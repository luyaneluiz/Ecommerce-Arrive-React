import { ProductProps } from "./ProductTypes"

export interface FavoritesProps {
    favorites: ProductProps[] | null
    loading: boolean
    error: string | null
}

export type Product = ProductProps
