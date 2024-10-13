import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CategoriesBlock } from "./CategoriesBlock"

interface NavbarProps {
    mobile: boolean
    closeDrawer?: () => void
}

export function NavbarItems({ mobile, closeDrawer }: NavbarProps) {
    const [showCategories, setShowCategories] = useState(false)
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    const handleLinkClick = () => {
        closeDrawer?.()
    }

    return (
        <div
            className={`flex ${
                mobile ? "flex-col" : "flex-row w-full justify-center py-6"
            }`}
        >
            <ul
                className={`flex ${mobile ? "flex-col gap-4" : "flex-row gap-5"}`}
            >
                <li className="cursor-pointer flex hover:text-pink">
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className={isActive("/") ? "text-pink" : ""}
                    >
                        HOME
                    </Link>
                </li>

                <li
                    onMouseEnter={() => setShowCategories(true)}
                    onMouseLeave={() => setShowCategories(false)}
                >
                    <CategoriesBlock
                        mobile={mobile}
                        showCategories={showCategories}
                    />
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link
                        to="/new"
                        onClick={handleLinkClick}
                        className={isActive("/new") ? "text-pink" : ""}
                    >
                        NEW
                    </Link>
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link
                        to="/trends"
                        onClick={handleLinkClick}
                        className={isActive("/trends") ? "text-pink" : ""}
                    >
                        TRENDS
                    </Link>
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link
                        to="/offers"
                        onClick={handleLinkClick}
                        className={isActive("/offers") ? "text-pink" : ""}
                    >
                        OFFERS
                    </Link>
                </li>
            </ul>
        </div>
    )
}
