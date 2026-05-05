import Address from "@/types/Address"

export type CheckoutFormData = {
    address: Address | null
    shippingMethod: "Standard" | "Express"
    paymentMethod: "Credit card" | "PayPal"
    card: {
        name: string
        number: string
        expiry: string
        cvv: string
    }
}
