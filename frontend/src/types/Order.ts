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
    shippingMethod: "standard" | "express"
    orderDate: Date
    isDefault?: boolean
}
