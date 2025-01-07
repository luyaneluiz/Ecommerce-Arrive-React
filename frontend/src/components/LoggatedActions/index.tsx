import { Link } from "react-router-dom"
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi"
import { useAuth } from "@/contexts/AuthContext"
import { useFavorites } from "@/hooks/useFavorites"
import { Indicator } from "@mantine/core"
import IconButtonAction from "../IconButtonAction"

interface NavbarProps {
    closeDrawer?: () => void
}

export default function LoggatedActions({ closeDrawer }: NavbarProps) {
    const { user, logout } = useAuth()
    const userId = user?._id || null
    const { favorites } = useFavorites(userId)
    const hasFavorites = favorites && favorites.length > 0

    const logoutUser = async () => {
        logout()
        closeDrawer?.()
    }

    return (
        <div className="flex items-center w-24 justify-between">
            <Indicator disabled={!hasFavorites} color="pink" withBorder>
                <IconButtonAction
                    Icon={BiHeart}
                    path="/favorites"
                    onClick={closeDrawer}
                />
            </Indicator>

            <IconButtonAction
                Icon={BiShoppingBag}
                path="/bag"
                onClick={closeDrawer}
            />

            <Link to="/" onClick={logoutUser}>
                <BiUser className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5" />
            </Link>
        </div>
    )
}
