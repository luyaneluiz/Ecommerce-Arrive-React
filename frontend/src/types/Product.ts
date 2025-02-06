import Sizes from "./Sizes"
import { TypeProps } from "./Type"

export interface ProductProps {
    _id: string
    title: string
    category: string
    price: number
    old_price?: number
    cover: string
    description: string
    type: string
    rating: number
    colors: string[]
    sizes: Sizes[]
    stock: number
    sold?: number
    avaliable?: number
    isFavorite?: boolean
}

export interface CartProductProps {
    id: string
    title: string
    description?: string
    price: number
    cover: string
    old_price?: number
    type?: TypeProps
}
