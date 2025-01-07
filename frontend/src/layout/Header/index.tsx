import { useState } from "react"
// Context
import { useAuth } from "@/contexts/AuthContext"
// Custom components
import Logo from "@/components/Logo"
import RedirectLink from "@/components/RedirectLink"
import LoggatedActions from "@/components/LoggatedActions"
import InputSearch from "@/components/Search"
import MobileDrawer from "../MobileDrawer"
// Mantine components
import { Burger } from "@mantine/core"

interface HeaderProps {
    isMobile: boolean
}

export function Header({ isMobile }: HeaderProps) {
    const { user } = useAuth()

    const [openDrawer, setOpenDrawer] = useState(false)

    const handleToggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <>
            <header className="flex justify-between items-center bg-white py-2 px-4 border-b-slate-100 border-b md:py-4 md:px-6">
                <Logo />
                <InputSearch />

                {isMobile ? (
                    <Burger
                        opened={openDrawer}
                        onClick={handleToggleDrawer}
                        size="sm"
                    />
                ) : user ? (
                    <LoggatedActions />
                ) : (
                    <RedirectLink path="/auth" text="Login" />
                )}
            </header>

            <MobileDrawer
                open={openDrawer}
                closeDrawer={handleToggleDrawer}
                isLoggated={user ? true : false}
            />
        </>
    )
}
