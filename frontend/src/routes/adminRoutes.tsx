import React from "react"
import { Layout } from "../components/Layout"
import { AuthGuard } from "../components/Auth"
import CreateProduct from "../pages/Admin/CreateProduct"

export const AdminRoutes = [
    {
        path: "/auth",
        element: (
            <AuthGuard>
                <Layout />
            </AuthGuard>
        ),
        children: [
            {
                path: "/create/product",
                element: <CreateProduct />,
            },
        ],
    },
]
