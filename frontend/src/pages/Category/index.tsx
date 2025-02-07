import { useEffect } from "react"
import { PageTitle } from "@/components/PageTitle"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import { Stack, SimpleGrid } from "@mantine/core"
import { useParams } from "react-router-dom"

export default function Category() {
    const { category } = useParams() as { category: string }
    const { filteredProducts: products, fetchProductsByCategory } =
        useProducts()

    useEffect(() => {
        fetchProductsByCategory(category)
    }, [])

    return (
        <Stack px={{ base: 20, md: 52 }} mb={30}>
            <Stack>
                <PageTitle text={category} />

                <SimpleGrid cols={{ base: 2, sm: 3, md: 4, xl: 5 }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            cover={`../../${product.cover}`}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Stack>
    )
}
