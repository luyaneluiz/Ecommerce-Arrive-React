import { Link, useLocation } from "react-router-dom"
import { CategoriesBlock } from "./Categories/CategoriesBlock"

interface NavbarProps {
    mobile: boolean
    closeDrawer?: () => void
}

export function NavbarItems({ mobile, closeDrawer }: NavbarProps) {
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path

    const navLinks = [
        { label: "home", path: "/" },
        { label: "new", path: "/new" },
        { label: "trends", path: "/trends" },
        { label: "offers", path: "/offers" },
    ]

    return (
        <div
            className={`flex ${
                mobile ? "flex-col" : "flex-row w-full justify-center py-6"
            }`}
        >
            <ul
                className={`flex ${mobile ? "flex-col gap-4" : "flex-row gap-5"}`}
            >
                {navLinks.slice(0, 2).map(({ path, label }) => (
                    <NavbarItemLink
                        key={label}
                        path={path}
                        label={label}
                        isActive={isActive}
                        closeDrawer={closeDrawer}
                    />
                ))}

                <li>
                    <CategoriesBlock mobile={mobile} />
                </li>

                {navLinks.slice(2).map(({ path, label }) => (
                    <NavbarItemLink
                        key={label}
                        path={path}
                        label={label}
                        isActive={isActive}
                        closeDrawer={closeDrawer}
                    />
                ))}
            </ul>
        </div>
    )
}

interface NavbarItemLinkProps {
    path: string
    label: string
    isActive: (path: string) => boolean
    closeDrawer?: () => void
}

const NavbarItemLink = ({
    path,
    label,
    isActive,
    closeDrawer,
}: NavbarItemLinkProps) => (
    <li key={label} className="cursor-pointer flex hover:text-pink">
        <Link
            to={path}
            onClick={closeDrawer}
            className={isActive(path) ? "text-pink" : ""}
        >
            {label.toUpperCase()}
        </Link>
    </li>
)
