import EmptyPage from "@/components/Empty"
import { Title } from "@/components/Titlte"
import { Flex, Stack } from "@mantine/core"
import CartTable from "./CartTable"
import OrderSummary from "./OrderSummary/indext"
import PromoCode from "./PromoCode"
import Recommendations from "../../components/Recommendations"
import { useCartContext } from "@/contexts/CartContext"

export function Cart() {
    const { cart } = useCartContext()
    const hasProductsInCart = cart && cart.length > 0

    return (
        <Stack px={{ base: 20, md: 52 }} mb={6}>
            <Title text="Cart" />

            {hasProductsInCart ? (
                <Stack gap={20}>
                    <Flex direction={{ base: "column", md: "row" }} gap={20}>
                        <CartTable cart={cart} />

                        <Stack gap={10}>
                            <OrderSummary cart={cart} />

                            <PromoCode />
                        </Stack>
                    </Flex>

                    <Recommendations />
                </Stack>
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
