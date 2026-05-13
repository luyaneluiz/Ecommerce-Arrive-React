import Address from "@/types/Address"

export type ProductOrder = {
    product: string
    quantity: number
    price: number
}

export type CheckoutFormData = {
    products: ProductOrder[]
    total: number
    status: "pending" | "paid" | "shipped" | "delivered" | "cancelled"
    paymentMethod: "credit_card" | "paypal"
    address: Address | null
    shippingMethod: "standard" | "express"
    card: {
        name: string
        number: string
        expiry: string
        cvv: string
    }
}
