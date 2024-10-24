import React from "react"
import { Button, Paper } from "@mantine/core"
import { ProductProps } from "../../types/ProductTypes"
import { BiShoppingBag } from "react-icons/bi"

export default function FavoriteCard({ product }: { product: ProductProps }) {
    return (
        <Paper shadow="xs" radius="md" p="xl">
            <div className="flex justify-center">
                <img
                    src={product.cover}
                    alt={product.title}
                    className="w-28 h-40"
                />
            </div>

            <div className="flex flex-col gap-1 my-4">
                <h4 className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {product.title}
                </h4>
                <h3 className="font-bold">${product.price.toFixed(2)}</h3>
            </div>

            <Button
                leftSection={<BiShoppingBag size={14} />}
                variant="outline"
                color="pink"
                fullWidth
            >
                Add to bag
            </Button>
        </Paper>
    )
}
