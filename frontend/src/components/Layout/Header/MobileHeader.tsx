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

                    <div className="absolute bottom-0 left-0 w-full justify-around py-4 border-t border-slate-300">
                        {user ? (
                            <LoggatedButtons closeDrawer={closeDrawer} />
                        ) : (
                            <Link
                                to="/auth"
                                className="block text-center text-pink"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </Drawer>
        </header>
    )
}
