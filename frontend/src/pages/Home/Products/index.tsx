import { Title } from "@/components/Titlte"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import { useAuth } from "@/contexts/AuthContext"
import { useFavorites } from "@/hooks/useFavorites"
import { SimpleGrid, Stack } from "@mantine/core"

export function Products() {
    const { products } = useProducts()
    const { user } = useAuth()
    const userId = user?._id
    const { favorites } = useFavorites(userId || null)

    const favoriteIds = favorites
        ? new Set(favorites.map((fav) => fav._id))
        : new Set()
    products.map((product) => {
        product.isFavorite = favoriteIds.has(product._id)
    })

    return (
        <Stack>
            <Title text="Products" />

            <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 3, md: 2, lg: 3 }}
                spacing="lg"
            >
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </SimpleGrid>
        </Stack>
    )
}
