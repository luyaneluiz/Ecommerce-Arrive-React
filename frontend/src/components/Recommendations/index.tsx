import { FavoritesProvider } from "@/contexts/FavoritesContext"
import { ModalProvider } from "@/contexts/ModalContext"
import { useProducts } from "@/hooks/useProducts"
import { ProductProps } from "@/types/Product"
import { Carousel } from "@mantine/carousel"
import { Flex, Paper, Text } from "@mantine/core"
import { ProductCard } from "../ProductCard"
import { TypeProps } from "@/types/Type"

export default function Recommendations() {
    const { products } = useProducts()

    return (
        <FavoritesProvider>
            <ModalProvider>
                <Paper bg="#f1f1f1" p="xl" radius="md" mb={20}>
                    <Flex direction="column" align="center" mb="md" gap={10}>
                        <Text size="lg" fw={900}>
                            You&apos;ll love these...
                        </Text>

                        <Text size="sm" c="dimmed" ta="center" mb="lg">
                            THEY&apos;RE OFTEN BOUGHT WITH PRODUCTS IN YOUR BAG
                        </Text>
                    </Flex>

                    <Carousel slideSize="20%" slideGap="md" align="start" loop>
                        {products.map((product: ProductProps) => (
                            <Carousel.Slide key={product._id}>
                                <ProductCard
                                    key={product._id}
                                    id={product._id}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    cover={`../../${product.cover}`}
                                    old_price={product.old_price}
                                    type={product.type as TypeProps}
                                />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                </Paper>
            </ModalProvider>
        </FavoritesProvider>
    )
}
