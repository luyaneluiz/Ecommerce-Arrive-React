import { api } from "@/services/api"
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react"

interface AuthProviderProps {
    children: ReactNode
}

interface UserProps {
    id: string
    name: string
    email: string
}

interface AuthContextProps {
    user: UserProps | null
    login: (email: string, password: string) => Promise<void>
    register: (name: string, email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => {},
    register: async () => {},
    logout: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserProps | null>(null)

    const login = async (email: string, password: string) => {
        await api.post("/auth/login", { email, password })

        const response = await api.post("/auth/me")
        setUser(response.data.user)
    }

    const register = async (name: string, email: string, password: string) => {
        const response = await api.post("/auth/register", {
            name,
            email,
            password,
        })
        setUser(response.data.user)
    }

    const logout = async () => {
        await api.post("/auth/logout")
        setUser(null)
    }

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await api.get("/auth/me")
                setUser(response.data.user)
            } catch (error) {
                setUser(null)
            }
        }

        checkUser()
    }, [])

    const contextValue = {
        user,
        login,
        register,
        logout,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider")
    }

    return context
}
