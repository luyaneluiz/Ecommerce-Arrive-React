export interface CartProps {
    cart: ProductCartProps[] | null
    setCart: React.Dispatch<React.SetStateAction<ProductCartProps[] | null>>
    loading: boolean
    error: unknown
    handleAddToCart: (props: AddToCartProps) => void
}

export interface AddToCartProps {
    userId?: string | null
    productId: string
    color: string | null
    size: string | null
    quantity: number
    subtotal: number
}

export interface ProductCartProps {
    _id: string
    cover: string
    title: string
    quantity: number
    subtotal: number
    price: number
    size: string
    color: string
}
