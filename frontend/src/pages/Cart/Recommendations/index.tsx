import { useProducts } from "@/hooks/useProducts"
import { ProductProps } from "@/types/ProductTypes"
import { Carousel } from "@mantine/carousel"
import { Box, Button, Flex, Image, Paper, Stack, Text } from "@mantine/core"
import { BiHeart } from "react-icons/bi"

export default function Recommendations() {
    const { products } = useProducts()

    return (
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
                        <Paper shadow="xs" radius="md" p="sm">
                            <Flex justify="space-between">
                                <BiHeart size={18} color="gray" />
                            </Flex>

                            <Box w={200} h={200} m="auto">
                                <Image
                                    src={product.cover}
                                    alt={product.title}
                                    h="100%"
                                    fit="contain"
                                />
                            </Box>

                            <Stack mt="sm">
                                <Text fw={600} size="sm">
                                    {product.title}
                                </Text>

                                <Text size="xs" c="dimmed" lineClamp={3}>
                                    {product.description}
                                </Text>

                                <Text fw={700} size="sm">
                                    ${product.price.toFixed(2)}
                                </Text>

                                <Button
                                    variant="outline"
                                    color="pink"
                                    fullWidth
                                >
                                    ADD TO BAG
                                </Button>
                            </Stack>
                        </Paper>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </Paper>
    )
}
