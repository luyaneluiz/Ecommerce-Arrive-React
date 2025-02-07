import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Affix, Indicator, ActionIcon } from "@mantine/core"
import { BiCart } from "react-icons/bi"
import { useCartContext } from "@/contexts/CartContext"

export default function FloatingCartButton() {
    const [isAnimating, setIsAnimating] = useState(false)
    const { cartTotal } = useCartContext()

    useEffect(() => {
        if (cartTotal > 0) {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 500)
        }
    }, [cartTotal])

    return (
        <Affix position={{ bottom: 30, right: 30 }}>
            <AnimatePresence>
                <motion.div
                    key={cartTotal}
                    initial={{ scale: 1 }}
                    animate={{ scale: isAnimating ? 1.1 : 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                    }}
                >
                    <Indicator
                        color="pink"
                        offset={5}
                        disabled={!cartTotal || cartTotal === 0}
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
    )
}
