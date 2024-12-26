import { Header, MobileHeader } from "./Header"
import { NavbarItems } from "./Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"

// context
import { useBreakpoint } from "../contexts/BreakpointContext"

export function Layout() {
    const { isMobile } = useBreakpoint()

    return (
        <div className="font-['Poppins']">
            {isMobile ? (
                <MobileHeader />
            ) : (
                <>
                    <Header />
                    <NavbarItems mobile={false} />
                </>
            )}

            <main className="max-w-[1300px] m-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
