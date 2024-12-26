import React from "react"
import { Layout } from "../components/Layout"
import { Profile } from "../pages/Profile"
import { AuthGuard } from "../components/Auth"
import { Favorites } from "../pages/Favorites"
import CreateProduct from "../pages/Admin/CreateProduct"

export const AuthenticatedRoutes = [
    {
        path: "/",
        element: (
            <AuthGuard>
                <Layout />
            </AuthGuard>
        ),
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/create/product",
                element: <CreateProduct />,
            },
        ],
    },
]
