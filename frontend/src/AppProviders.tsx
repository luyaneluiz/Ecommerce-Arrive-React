import React, { PropsWithChildren } from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import { FavoritesProvider } from "./contexts/FavoritesContext"
import { ModalProvider } from "./contexts/ModalContext"

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <FavoritesProvider>
                    <ModalProvider>{children}</ModalProvider>
                </FavoritesProvider>
            </CartProvider>
        </AuthProvider>
    )
}

export default AppProviders
