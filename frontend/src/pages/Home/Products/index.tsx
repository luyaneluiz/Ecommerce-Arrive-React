import { Title } from "@/components/Titlte"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import { SimpleGrid, Skeleton, Stack } from "@mantine/core"
import { TypeProps } from "@/types/Type"
import { ModalProvider } from "@/contexts/ModalContext"

export function Products() {
    const { products, loading } = useProducts()

    return (
        <ModalProvider>
            <Stack>
                <Title text="Products" />

                {loading && (
                    <SimpleGrid
                        cols={{ base: 2, sm: 3, md: 2, lg: 3 }}
                        spacing={{ base: "sm", md: "lg" }}
                    >
                        <Skeleton height={300} radius="lg" />
                        <Skeleton height={300} radius="lg" />
                        <Skeleton height={300} radius="lg" />
                    </SimpleGrid>
                )}

                <SimpleGrid
                    cols={{ base: 2, sm: 3, md: 2, lg: 3 }}
                    spacing={{ base: "sm", md: "lg" }}
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
        </ModalProvider>
    )
}
