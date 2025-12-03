import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import { FavoritesProvider } from "./contexts/FavoritesContext"
import { ModalProvider } from "./contexts/ModalContext"
import { Layout } from "./layout"

export const AppProviders: React.FC = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <FavoritesProvider>
                    <ModalProvider>
                        <Layout />
                    </ModalProvider>
                </FavoritesProvider>
            </CartProvider>
        </AuthProvider>
    )
}

export default AppProviders
