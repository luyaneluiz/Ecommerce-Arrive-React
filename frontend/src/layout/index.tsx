import { Outlet } from "react-router-dom"
// Components
import { Header } from "./Header"
import { NavbarItems } from "./Navbar"
import { Footer } from "./Footer"
import FloatingCartButton from "./FloatingCartButton"
// Utils
import isMobile from "@/utils/isMobile"
// Contexts
import { useAuth } from "@/contexts/AuthContext"

export function Layout() {
    const mobile = isMobile()
    const { user } = useAuth()

    return (
        <>
            <Header isMobile={mobile} />

            {!mobile && <NavbarItems mobile={false} />}

            <main className="max-w-[1300px] m-auto">
                <Outlet />
            </main>

            {user && mobile && <FloatingCartButton />}

            <Footer />
        </>
    )
}
