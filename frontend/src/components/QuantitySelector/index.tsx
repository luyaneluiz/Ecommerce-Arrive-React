import React from "react"
import { Group, Button, Text } from "@mantine/core"

export default function QuantitySelector({ quantity, setQuantity }) {
    return (
        <div>
            <Text fw={700} size="sm">
                Quantity:
            </Text>

            <Group className="mt-2">
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
        </div>
    )
}
