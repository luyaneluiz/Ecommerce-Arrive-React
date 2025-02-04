export interface CartProps {
    cart: ProductCartProps[] | null
    setCart: React.Dispatch<React.SetStateAction<ProductCartProps[] | null>>
    loading: boolean
    error: unknown
    handleAddToCart: (props: AddToCartProps) => void
    handleRemoveFromCart: (productId: string) => void
}

export interface AddToCartProps {
    userId?: string | null
    _id: string
    color: string | null
    size: string | null
    quantity: number
    price: number
    subtotal: number
    cover: string
    title: string
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
