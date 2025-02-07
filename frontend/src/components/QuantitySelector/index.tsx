import { Group, Button, Text, Flex } from "@mantine/core"

interface QuantitySelectorProps {
    quantity: number
    setQuantity: (quantity: number) => void
}

export default function QuantitySelector({
    quantity,
    setQuantity,
}: QuantitySelectorProps) {
    return (
        <Flex align="center" justify="space-between" gap={10}>
            <Text fw={700} size="sm">
                Quantity
            </Text>

            <Group>
                <Button
                    variant="default"
                    size="xs"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                    -
                </Button>

                <Text size="sm">{quantity}</Text>

                <Button
                    variant="default"
                    size="xs"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </Button>
            </Group>
        </Flex>
    )
}
