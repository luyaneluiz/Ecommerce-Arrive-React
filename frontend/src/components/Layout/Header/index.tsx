import { Burger, Drawer } from "@mantine/core"

import { useState } from "react"
import { Link } from "react-router-dom"

// logo
import Logo from "../../../assets/logo.png"

// components
import { NavigationButtons } from "./NavigationButtons"
import { NavbarItems } from "../Navbar"
import { InputSearch } from "../../Search"

// context
import { useBreakpoint } from "../../../contexts/BreakpointContext"

export function Header() {
    const { isMobile } = useBreakpoint()

    const [drawerOpen, setDrawerOpen] = useState(false)

    const closeDrawer = () => {
        setDrawerOpen(false)
    }

    return (
        <header className="flex justify-between items-center bg-white py-2 px-4 border-b-slate-100 border-b md:py-4 md:px-6">
            <Link to="/">
                <img src={Logo} alt="Logo arrive" className="w-20 md:w-24" />
            </Link>

            {!isMobile ? (
                <div className="flex justify-between w-2/3">
                    <InputSearch />
                    <NavigationButtons mobile={false} />
                </div>
            ) : (
                <Burger
                    opened={drawerOpen}
                    onClick={() => setDrawerOpen(true)}
                    size="sm"
                    aria-label="Toggle navigation"
                />
            )}

            <Drawer
                position="right"
                size="xs"
                opened={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <div className="p-4">
                    <NavbarItems mobile={true} closeDrawer={closeDrawer} />
                    <NavigationButtons
                        mobile={true}
                        closeDrawer={closeDrawer}
                    />
                </div>
            </Drawer>
        </header>
    )
}
