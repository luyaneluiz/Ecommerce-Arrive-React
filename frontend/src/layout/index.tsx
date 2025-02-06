import { Outlet } from "react-router-dom"
// Components
import { Header } from "./Header"
import { NavbarItems } from "./Navbar"
import { Footer } from "./Footer"
import { Affix, ActionIcon, Indicator } from "@mantine/core"
import { BiCart } from "react-icons/bi"
import { useAuth } from "@/contexts/AuthContext"
import isMobile from "@/utils/isMobile"
import { AnimatePresence, motion } from "framer-motion"
import { useCartContext } from "@/contexts/CartContext"
import { useState, useEffect } from "react"

export function Layout() {
    const mobile = isMobile()
    const { user } = useAuth()
    const { cartTotal } = useCartContext()
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        console.log(cartTotal)

        if (cartTotal > 0) {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 500)
        }
    }, [cartTotal])

    return (
        <>
            <Header isMobile={mobile} />

            {!mobile && <NavbarItems mobile={false} />}

            <main className="max-w-[1300px] m-auto">
                <Outlet />
            </main>

            {user && mobile && (
                <Affix position={{ bottom: 30, right: 30 }}>
                    <AnimatePresence>
                        <motion.div
                            key={cartTotal}
                            initial={{ scale: 1 }}
                            animate={{ scale: isAnimating ? 1.3 : 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <Indicator
                                color="pink"
                                offset={5}
                                label={cartTotal}
                                size={20}
                            >
                                <ActionIcon
                                    component="a"
                                    href="/cart"
                                    color="pink"
                                    variant="outline"
                                    bg="white"
                                    radius="xl"
                                    size={60}
                                >
                                    <BiCart size={30} />
                                </ActionIcon>
                            </Indicator>
                        </motion.div>
                    </AnimatePresence>
                </Affix>
            )}

            <Footer />
        </>
    )
}
