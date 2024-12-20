import React from "react"
import { GuestGuard } from "../components/Auth"
import { Login, Register } from "../pages/Auth/"

export const AuthRoutes = [
    {
        element: <GuestGuard />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
]
