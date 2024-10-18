import React from "react"
import { Badge, Title, Rating, NumberFormatter, Text } from "@mantine/core"
import ProductDetailsProps from "./type"

export default function ProductDetails({
    type,
    title,
    rating,
    price,
    description,
}: ProductDetailsProps) {
    return (
        <section>
            {type && (
                <Badge color="grape" variant="outline">
                    {type}
                </Badge>
            )}

            <Title size="h4" mb={3}>
                {title}
            </Title>

            <Rating defaultValue={rating} fractions={2} mb={8} />

            <NumberFormatter
                prefix="$"
                value={price}
                thousandSeparator
                decimalSeparator="."
                decimalScale={2}
                className="text-pink font-bold text-xl"
            />

            <Text size="md" my="xs">
                {description}
            </Text>
        </section>
    )
}
