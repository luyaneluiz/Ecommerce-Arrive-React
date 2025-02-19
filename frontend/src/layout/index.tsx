import { Outlet } from "react-router-dom"
// Components
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import FloatingCartButton from "./FloatingCartButton"
// Mantine components
import { AppShell } from "@mantine/core"
// Hooks
import { useDisclosure } from "@mantine/hooks"
// Utils
import isMobile from "@/utils/isMobile"
// Contexts
import { useAuth } from "@/contexts/AuthContext"

export function Layout() {
    const mobile = isMobile()
    const { user } = useAuth()

    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { desktop: true, mobile: !opened },
            }}
        >
            <Header opened={opened} toggle={toggle} />

            <AppShell.Main>
                <Navbar toggle={toggle} />
                <Outlet />
            </AppShell.Main>

            {user && mobile && <FloatingCartButton />}

            <Footer />
        </AppShell>
    )
}
