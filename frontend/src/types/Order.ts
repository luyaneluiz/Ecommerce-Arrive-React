export interface Order {
    _id?: string
    user?: string
    products: {
        product: string
        quantity: number
        price: number
    }[]
    total: number
    status: "pending" | "paid" | "shipped" | "delivered" | "cancelled"
    paymentMethod: string
    shippingAddress: string
    orderDate: Date
    isDefault?: boolean
}
