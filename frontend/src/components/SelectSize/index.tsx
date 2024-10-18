import React from "react"
import { Group, Button, Text } from "@mantine/core"
import SelectSizeProps from "./type"

export default function SelectSize({
    sizes,
    selectedSize,
    setSelectedSize,
}: SelectSizeProps) {
    return (
        <Group>
            <Text fw={700} size="sm">
                Size
            </Text>

            <Group gap={5}>
                {sizes.map((size) => (
                    <Button
                        key={size}
                        variant={selectedSize === size ? "filled" : "default"}
                        color="pink"
                        size="xs"
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </Button>
                ))}
            </Group>
        </Group>
    )
}
