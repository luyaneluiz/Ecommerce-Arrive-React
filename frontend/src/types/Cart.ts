import { ProductProps } from "./ProductTypes"

export interface CartProps {
    cart: ProductProps[] | null
    setCart: React.Dispatch<React.SetStateAction<ProductProps[] | null>>
    loading: boolean
    error: unknown
}

export type Product = ProductProps
