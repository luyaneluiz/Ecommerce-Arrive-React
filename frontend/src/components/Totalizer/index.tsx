import React from "react"
import { NumberFormatter, Text } from "@mantine/core"

export default function Totalizer({ quantity, price }) {
    return (
        <div className="flex flex-col gap-2">
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
        </div>
    )
}
