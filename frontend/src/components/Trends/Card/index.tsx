import { Card, Flex, Image, Stack, Text } from "@mantine/core"

interface ProductProps {
    title: string
    price: number
    cover: string
    old_price?: number
}

export default function TrendProductCard({
    title,
    price,
    cover,
    old_price,
}: ProductProps) {
    return (
        <Card
            shadow="sm"
            padding="md"
            radius="md"
            className="!flex-row gap-4"
            component="a"
            href="#"
        >
            <Image src={cover} alt={title} w={70} h={70} />

            <Stack gap={4} justify="center" align="flex-start" w="100%">
                <Text fw={500} size="lg">
                    {title}
                </Text>

                <Flex align="center" gap={4}>
                    <Text size="md" c="pink" fw={600}>
                        ${price.toFixed(2)}
                    </Text>
                    {old_price && (
                        <Text td="line-through" c="gray" size="sm">
                            ${old_price}
                        </Text>
                    )}
                </Flex>
            </Stack>
        </Card>
    )
}
