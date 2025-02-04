import { Title } from "@/components/Titlte"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import { SimpleGrid, Stack } from "@mantine/core"
import { FavoritesProvider } from "@/contexts/FavoritesContext"

type TypeProps = "New" | "Offer" | "Hot"

export function Products() {
    const { products } = useProducts()

    return (
        <FavoritesProvider>
            <Stack>
                <Title text="Products" />

                <SimpleGrid
                    cols={{ base: 1, xs: 2, sm: 3, md: 2, lg: 3 }}
                    spacing="lg"
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            cover={product.cover}
                            old_price={product.old_price}
                            type={product.type as TypeProps}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </FavoritesProvider>
    )
}
