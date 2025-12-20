import { useAuth } from "@/contexts/AuthContext"
import { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthGuard({ children }: PropsWithChildren) {
    const { user } = useAuth()
    const navigate = useNavigate()

    if (user) {
        return <>{children}</>
    }

    navigate("/not-authorized")

    return null
}
