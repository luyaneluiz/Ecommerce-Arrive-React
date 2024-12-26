import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "@/services/api"
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi"

interface NavbarProps {
    closeDrawer?: () => void
}

export function LoggatedButtons({ closeDrawer }: NavbarProps) {
    const [hasFavorites, setHasFavorites] = useState(false)

    useEffect(() => {
        api.get("/favorites").then((response) => {
            if (response.data.length > 0) {
                setHasFavorites(true)
            }
        })
    }, [])

    const handleLinkClick = () => {
        closeDrawer?.()
    }

    return (
        <div className="flex items-center w-24 justify-between">
            <Link to="/Profile" onClick={handleLinkClick}>
                <BiUser className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5" />
            </Link>

            <Link
                to="/Favorites"
                onClick={handleLinkClick}
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

            <Link to="/Bag" onClick={handleLinkClick}>
                <BiShoppingBag
                    size={20}
                    className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5"
                />
            </Link>
        </div>
    )
}
