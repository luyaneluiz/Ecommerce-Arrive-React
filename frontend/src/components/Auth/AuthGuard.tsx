import { useAuth } from "@/contexts/AuthContext"
import { PropsWithChildren, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthGuard({ children }: PropsWithChildren) {
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/not-authorized")
        }
    }, [user, navigate])

    if (!user) {
        return null
    }

    return <>{children}</>
}
