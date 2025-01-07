import { Outlet } from "react-router-dom"
// Components
import { Header } from "./Header/Header"
import { NavbarItems } from "./Navbar"
import { Footer } from "./Footer"
// Context
import { useBreakpoint } from "@/contexts/BreakpointContext"

export function Layout() {
    const { isMobile } = useBreakpoint()

    return (
        <>
            <Header isMobile={isMobile} />

            {!isMobile && <NavbarItems mobile={false} />}

            <main className="max-w-[1300px] m-auto">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
