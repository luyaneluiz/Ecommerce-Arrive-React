import React from "react"
import ReactDOM from "react-dom/client"
import { router } from "./App.tsx"
import { RouterProvider } from "react-router-dom"
import "./index.css"

import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"
import { AuthProvider } from "./contexts/AuthContext.tsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CartProvider } from "./contexts/CartContext.tsx"

const theme = createTheme({
    /** Put your mantine theme override here */
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <AuthProvider>
                <CartProvider>
                    <RouterProvider router={router} />
                    <ToastContainer />
                </CartProvider>
            </AuthProvider>
        </MantineProvider>
    </React.StrictMode>,
)
