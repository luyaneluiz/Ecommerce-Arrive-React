import { Link, useLocation } from "react-router-dom"
import { CategoriesBlock } from "./Categories"
import { AppShell, Group } from "@mantine/core"

interface NavbarProps {
    toggle: () => void
}

export default function Navbar({ toggle }: NavbarProps) {
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path

    const items = [
        { label: "home", path: "/", type: "link" },
        { label: "new", path: "/new", type: "link" },
        { label: "categories", type: "menu" },
        { label: "trends", path: "/trends", type: "link" },
        { label: "offers", path: "/offers", type: "link" },
    ]

    return (
        <>
            <Group
                justify="center"
                align="center"
                gap="md"
                className="!hidden sm:!flex"
            >
                {items.map(({ label, path, type }) => (
                    <NavbarItem
                        key={label}
                        path={path}
                        type={type}
                        label={label}
                        isActive={isActive}
                        closeDrawer={toggle}
                    />
                ))}
            </Group>

            <AppShell.Navbar p="md">
                {items.map(({ label, path, type }) => (
                    <NavbarItem
                        key={label}
                        path={path}
                        type={type}
                        label={label}
                        isActive={isActive}
                        closeDrawer={toggle}
                    />
                ))}
            </AppShell.Navbar>
        </>
    )
}

interface NavbarItemProps {
    label: string
    type: string
    path?: string
    isActive: (path: string) => boolean
    closeDrawer?: () => void
}

const NavbarItem = ({
    label,
    type,
    path,
    isActive,
    closeDrawer,
}: NavbarItemProps) => {
    if (type === "link") {
        return (
            <Link
                to={path || ""}
                onClick={closeDrawer}
                className={`uppercase ${
                    isActive(path || "") ? "text-pink" : "text-black"
                } my-4`}
            >
                {label}
            </Link>
        )
    } else if (type === "menu") {
        return <CategoriesBlock />
    }
}
