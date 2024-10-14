import React from "react"
import { useProduct } from "../../hooks/useProduct"
import { Title, Button, Text } from "@mantine/core"

export function Product() {
    const { product } = useProduct()

    if (!product) {
        return (
            <div>
                <Title>Something is not right...</Title>
                <Text c="dimmed" size="lg">
                    Page you are trying to open does not exist. You may have
                    mistyped the address, or the page has been moved to another
                    URL. If you think this is an error contact support.
                </Text>
                <Button variant="outline" size="md" mt="xl">
                    Get back to home page
                </Button>
            </div>
        )
    } else {
        return (
            <div>
                <img
                    src={`../../${product.cover}`}
                    alt=""
                    width={300}
                    height={300}
                />
                <h1>{product.title}</h1>
            </div>
        )
    }
}
