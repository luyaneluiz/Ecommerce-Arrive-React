import { Outlet } from "react-router-dom"
// Components
import { Header } from "./Header"
import { NavbarItems } from "./Navbar"
import { Footer } from "./Footer"
// Context
import { useBreakpoint } from "@/contexts/BreakpointContext"
import { Affix, ActionIcon, Indicator } from "@mantine/core"
import { BiCart } from "react-icons/bi"
import { useCart } from "@/hooks/useCart"
import { useAuth } from "@/contexts/AuthContext"

export function Layout() {
    const { isMobile } = useBreakpoint()
    const { user } = useAuth()
    const { cartTotal } = useCart(user?._id || "")

    return (
        <>
            <Header isMobile={isMobile} />

            {!isMobile && <NavbarItems mobile={false} />}

            <main className="max-w-[1300px] m-auto">
                <Outlet />
            </main>

            {user && isMobile && (
                <Affix position={{ bottom: 30, right: 30 }}>
                    <Indicator
                        color="pink"
                        offset={5}
                        label={cartTotal}
                        size={20}
                    >
                        <ActionIcon
                            color="pink"
                            variant="outline"
                            bg="white"
                            radius="xl"
                            size={60}
                        >
                            <BiCart size={30} />
                        </ActionIcon>
                    </Indicator>
                </Affix>
            )}

            <Footer />
        </>
    )
}
