import EmptyPage from "@/components/Empty"
import FavoriteCard from "@/components/FavoriteCard"
import { Title } from "@/components/Titlte"
import { useCart } from "@/hooks/useCart"
import { ProductProps } from "@/types/ProductTypes"
import { Stack, SimpleGrid } from "@mantine/core"

export function Cart() {
    const userId = localStorage.getItem("user")
    const { cart } = useCart(userId)
    const hasProductsInCart = cart && cart.length > 0

    return (
        <Stack px={{ base: 30, md: 52 }} mb={6}>
            <Title text="Cart" />
            {hasProductsInCart ? CartProductsContainer(cart) : CartEmpty()}
        </Stack>
    )
}

const CartProductsContainer = (cart: ProductProps[]) => {
    return (
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
            {cart.map((product) => (
                <FavoriteCard key={product._id} product={product} />
            ))}
        </SimpleGrid>
    )
}

const CartEmpty = () => {
    return (
        <EmptyPage
            message="No products in your cart."
            hasButton
            buttonText="Go shopping"
        />
    )
}
