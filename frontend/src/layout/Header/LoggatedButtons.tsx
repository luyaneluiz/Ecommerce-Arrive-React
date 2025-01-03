import { Link } from "react-router-dom"
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi"
import { useAuth } from "@/contexts/AuthContext"
import { useFavorites } from "@/hooks/useFavorites"

interface NavbarProps {
    closeDrawer?: () => void
}

export function LoggatedButtons({ closeDrawer }: NavbarProps) {
    const { user, logout } = useAuth()
    const userId = user?._id || null
    const { favorites } = useFavorites(userId)

    const logoutUser = async () => {
        logout()
        closeDrawer?.()
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
                {favorites && favorites.length > 0 && (
                    <span className="rounded-full bg-pink w-2 h-2 absolute -top-px -right-px" />
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
