import { ProductCard } from "../../components/ProductCard"
import { PageTitle } from "../../components/PageTitle"
import { useProducts } from "@/hooks/useProducts"
import { useEffect } from "react"
import { SimpleGrid, Stack } from "@mantine/core"

export function Offers() {
    const { filteredProducts: products, fetchProductsByType } = useProducts()

    useEffect(() => {
        fetchProductsByType("Offer")
    }, [])

    return (
        <Stack px={{ base: 20, md: 52 }} mb={30}>
            <Stack>
                <PageTitle text="Offers" />

                <SimpleGrid cols={{ base: 2, sm: 3, md: 4, xl: 5 }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            cover={product.cover}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Stack>
    )
}
