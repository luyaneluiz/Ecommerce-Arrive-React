import React, { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthGuard({ children }: PropsWithChildren) {
    // const { user } = useAuth()
    const user = null
    const navigate = useNavigate()

    if (!user) {
        return <>{children}</>
    }

    navigate("/")

    return null
}
