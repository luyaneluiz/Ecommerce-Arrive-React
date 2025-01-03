import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "@/services/api"
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi"
import { useAuth } from "@/contexts/AuthContext"

interface NavbarProps {
    closeDrawer?: () => void
}

export function LoggatedButtons({ closeDrawer }: NavbarProps) {
    const [hasFavorites, setHasFavorites] = useState(false)
    const { logout } = useAuth()

    useEffect(() => {
        api.get("/favorites").then((response) => {
            if (response.data.length > 0) {
                setHasFavorites(true)
            }
        })
    }, [])

    const logoutUser = async () => {
        try {
            logout()
        } catch (error) {
            console.log(error)
        } finally {
            closeDrawer?.()
        }
    }

    return (
        <div className="flex items-center w-24 justify-between">
            <Link to="/" onClick={logoutUser}>
                <BiUser className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5" />
            </Link>

            <Link
                to="/favorites"
                onClick={() => closeDrawer?.()}
                className="relative"
            >
                <BiHeart
                    size={20}
                    className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5"
                />
                {hasFavorites && (
                    <span className="rounded-full bg-pink w-2 h-2 absolute top-0 -right-0" />
                )}
            </Link>

            <Link to="/Bag" onClick={() => closeDrawer?.()}>
                <BiShoppingBag
                    size={20}
                    className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5"
                />
            </Link>
        </div>
    )
}
