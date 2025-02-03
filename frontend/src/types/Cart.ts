export interface CartProps {
    cart: ProductCartProps[] | null
    setCart: React.Dispatch<React.SetStateAction<ProductCartProps[] | null>>
    loading: boolean
    error: unknown
    handleAddToCart: (id: string) => void
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
