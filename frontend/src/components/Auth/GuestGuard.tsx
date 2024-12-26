import React, { Fragment, PropsWithChildren } from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function GuestGuard({ children }: PropsWithChildren) {
    // const { state } = useLocation()
    // const { isAuthenticated } = useAuth()
    const isAuthenticated = false

    console.log("children", children)
    if (isAuthenticated) {
        const redirectPath = "/"

        return <Navigate to={redirectPath} replace />
    }

    return <Fragment>{children || <Outlet />}</Fragment>
}
