import EmptyPage from "@/components/Empty"
import FavoriteCard from "@/components/FavoriteCard"
import { Title } from "@/components/Titlte"
import { useCart } from "@/hooks/useCart"
import { Stack, SimpleGrid } from "@mantine/core"

export function Cart() {
    const userId = localStorage.getItem("user")
    const { cart } = useCart(userId)

    return (
        <main className="px-4 md:px-12 pb-8">
            {cart && cart.length > 0 ? (
                <Stack>
                    <Title text="Cart" />

                    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
                        {cart.map((product) => (
                            <FavoriteCard key={product._id} product={product} />
                        ))}
                    </SimpleGrid>
                </Stack>
            ) : (
                <EmptyPage
                    message="No products in your cart."
                    hasButton
                    buttonText="Go shopping"
                />
            )}
        </main>
    )
}
