import { Burger, Drawer } from "@mantine/core"
import { useState } from "react"
import { Link } from "react-router-dom"
import { NavbarItems } from "../Navbar"
import { LoggatedButtons } from "./LoggatedButtons"
import { useAuth } from "@/contexts/AuthContext"
import Logo from "../../../assets/logo.png"

export function MobileHeader() {
    const { user } = useAuth()
    const [drawerOpen, setDrawerOpen] = useState(false)

    const closeDrawer = () => {
        setDrawerOpen(false)
    }

    return (
        <header className="flex justify-between items-center bg-white py-2 px-4 border-b-slate-100 border-b md:py-4 md:px-6">
            <Link to="/">
                <img src={Logo} alt="Logo arrive" className="w-20 md:w-24" />
            </Link>

            <Burger
                opened={drawerOpen}
                onClick={() => setDrawerOpen(true)}
                size="sm"
                aria-label="Toggle navigation"
            />

            <Drawer
                position="right"
                size="xs"
                opened={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <div className="p-4">
                    <NavbarItems mobile={true} closeDrawer={closeDrawer} />
                    {user ? (
                        <LoggatedButtons
                            mobile={true}
                            closeDrawer={closeDrawer}
                        />
                    ) : (
                        <Link
                            to="/auth"
                            className="block mt-4 text-center text-pink"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </Drawer>
        </header>
    )
}
