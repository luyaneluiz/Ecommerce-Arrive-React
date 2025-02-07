import { createContext, ReactNode, useContext, useState } from "react"
import { CartProductProps } from "@/types/Product"
import AddToCartModal from "@/components/Modal/AddToCart"

interface ModalContextType {
    openModal: (product: CartProductProps) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState<CartProductProps | null>(null)

    const openModal = (product: CartProductProps) => {
        setProduct(product)
        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)

    return (
        <ModalContext.Provider value={{ openModal }}>
            {children}

            {product && (
                <AddToCartModal
                    opened={isOpen}
                    setOpened={setIsOpen}
                    onClose={closeModal}
                    id={product.id}
                />
            )}
        </ModalContext.Provider>
    )
}

export function useModalContext() {
    const context = useContext(ModalContext)

    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider")
    }

    return context
}
