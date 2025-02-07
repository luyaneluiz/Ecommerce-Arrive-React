import { Flex, NumberFormatter, Text } from "@mantine/core"

interface TotalizerProps {
    quantity: number
    price: number
}

export default function Totalizer({ quantity, price }: TotalizerProps) {
    return (
        <Flex
            justify={{ base: "space-between", md: "end" }}
            align="center"
            gap={50}
        >
            <Text fw={700} size="sm">
                Total:
            </Text>

            <NumberFormatter
                prefix="$"
                value={quantity * price}
                thousandSeparator
                decimalSeparator="."
                decimalScale={2}
                className="text-pink font-bold text-xl"
            />
        </Flex>
    )
}
