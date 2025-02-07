import { useState } from "react"
import { Radio, Stack, Text, Flex } from "@mantine/core"

interface RadioCardGroupProps {
    name: string
    description: string
    value: number
}

export default function RadioCardGroup({
    data,
}: {
    data: RadioCardGroupProps[]
}) {
    const [value, setValue] = useState<string | null>(null)

    const cards = data.map((item) => (
        <Radio.Card
            p={15}
            style={value === item.name ? { border: "1px solid pink" } : {}}
            className="transition-colors duration-150 ease-in-out hover:border-gray-300"
            radius="md"
            value={item.name}
            key={item.name}
        >
            <Flex justify="space-between" align="center" gap={10}>
                <Radio.Indicator color="pink" />

                <Flex direction="column" w="100%">
                    <Text size="md">{item.name}</Text>
                    <Text c="dimmed" size="xs">
                        {item.description}
                    </Text>
                </Flex>

                <Text size="sm">${item.value}</Text>
            </Flex>
        </Radio.Card>
    ))

    return (
        <Radio.Group value={value} onChange={setValue}>
            <Stack gap="xs">{cards}</Stack>
        </Radio.Group>
    )
}
