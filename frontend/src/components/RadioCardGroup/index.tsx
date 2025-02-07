import { Radio, Text, Flex, Box } from "@mantine/core"

interface OptionProps {
    name: string
    value?: number
    description?: string
    icon?: React.ReactNode
}

interface RadioCardGroupProps {
    options: OptionProps[]
    selected: string | null
    setSelected: (value: string) => void
    layout?: "horizontal" | "vertical"
    indicator?: "radio" | "icon"
}

export default function RadioCardGroup({
    options,
    selected,
    setSelected,
    layout = "vertical",
    indicator = "radio",
}: RadioCardGroupProps) {
    const cards = options.map((item) => (
        <Radio.Card
            p={15}
            style={selected === item.name ? { border: "1px solid pink" } : {}}
            c={
                selected === item.name && indicator === "icon"
                    ? "pink"
                    : "black"
            }
            className="transition-colors duration-150 ease-in-out hover:border-gray-300"
            radius="md"
            value={item.name}
            key={item.name}
        >
            <Flex
                justify="space-between"
                align="center"
                gap={10}
                direction={layout === "horizontal" ? "column" : "row"}
            >
                {indicator === "radio" && <Radio.Indicator color="pink" />}

                <Flex
                    direction="column"
                    w="100%"
                    align={layout === "horizontal" ? "center" : "start"}
                >
                    {item.icon && <Box mb={5}>{item.icon}</Box>}

                    <Text size="md">{item.name}</Text>
                    <Text c="dimmed" size="xs">
                        {item.description}
                    </Text>
                </Flex>

                {item.value && <Text size="sm">${item.value}</Text>}
            </Flex>
        </Radio.Card>
    ))

    return (
        <Radio.Group value={selected} onChange={setSelected}>
            <Flex
                direction={layout === "horizontal" ? "row" : "column"}
                gap="xs"
            >
                {cards}
            </Flex>
        </Radio.Group>
    )
}
