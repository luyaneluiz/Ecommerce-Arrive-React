import React from "react"
import { Group, ColorSwatch, CheckIcon, rem, Text } from "@mantine/core"
import ColorSelectProps from "./type"

export default function ColorSelect({
    colors,
    selectedColor,
    setSelectedColor,
}: ColorSelectProps) {
    return (
        <Group>
            <Text fw={700} size="sm">
                Color
            </Text>

            <Group gap={5}>
                {colors.map((color: string) => (
                    <ColorSwatch
                        key={color}
                        component="button"
                        color={`var(--mantine-color-${color.toLowerCase()}-4)`}
                        onClick={() => setSelectedColor(color)}
                        size={25}
                        style={{
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        {selectedColor === color && (
                            <CheckIcon
                                style={{
                                    width: rem(12),
                                    height: rem(12),
                                }}
                            />
                        )}
                    </ColorSwatch>
                ))}
            </Group>
        </Group>
    )
}
