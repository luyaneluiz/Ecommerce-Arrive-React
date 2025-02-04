import EmptyPage from "@/components/Empty"
import { Title } from "@/components/Titlte"
import { useCart } from "@/hooks/useCart"
import { Flex, Stack } from "@mantine/core"
import CartTable from "./CartTable"
import OrderSummary from "./OrderSummary/indext"
import PromoCode from "./PromoCode"
import Recommendations from "./Recommendations"

export function Cart() {
    const userId = localStorage.getItem("user")
    const { cart } = useCart(userId)
    const hasProductsInCart = cart && cart.length > 0

    return (
        <Stack px={{ base: 20, md: 52 }} mb={6}>
            <Title text="Cart" />

            {hasProductsInCart ? (
                <Flex direction={{ base: "column", md: "row" }} gap={20}>
                    <CartTable cart={cart} />

                    <Stack gap={10}>
                        <OrderSummary cart={cart} />

                        <PromoCode />
                    </Stack>

                    <Recommendations />
                </Flex>
            ) : (
                <EmptyPage
                    message="No products in your cart."
                    hasButton
                    buttonText="Go shopping"
                />
            )}
        </Stack>
    )
}
