import React from "react"
import { Layout } from "../layout"
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
