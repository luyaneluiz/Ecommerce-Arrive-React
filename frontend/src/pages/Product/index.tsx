import React, { useState } from "react"
import { useProduct } from "../../hooks/useProduct"
import {
    Button,
    Text,
    Divider,
    Group,
    NumberFormatter,
    ActionIcon,
} from "@mantine/core"
import PageError from "../../components/Error/PageError"
import ProductDetails from "../../components/ProductDetails"
import ColorSelect from "../../components/ColorSelect"
import SelectSize from "../../components/SelectSize"
import { BiHeart } from "react-icons/bi"
import ProductImage from "../../components/ProductImage"

export function Product() {
    const { product } = useProduct()
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)

    // Seleção da quantidade
    const [quantity, setQuantity] = useState(1)

    if (product) {
        return (
            <div className="flex justify-center p-8">
                <section className="flex flex-col lg:flex-row lg:max-w-[1000px] gap-10">
                    <ProductImage cover={`../../${product.cover}`} />

                    <aside>
                        <ProductDetails
                            type={product.type}
                            title={product.title}
                            rating={product.rating}
                            price={product.price}
                            description={product.description}
                        />

                        <Divider my={20} />

                        <section className="flex justify-between">
                            <ColorSelect
                                colors={product.colors}
                                selectedColor={selectedColor}
                                setSelectedColor={setSelectedColor}
                            />

                            <SelectSize
                                sizes={product.sizes}
                                selectedSize={selectedSize}
                                setSelectedSize={setSelectedSize}
                            />
                        </section>

                        <Divider my={20} />

                        <div className="flex justify-between">
                            <div>
                                <Text fw={700} size="sm">
                                    Quantity:
                                </Text>

                                <Group className="mt-2">
                                    <Button
                                        variant="default"
                                        size="xs"
                                        onClick={() =>
                                            setQuantity(
                                                quantity > 1 ? quantity - 1 : 1,
                                            )
                                        }
                                    >
                                        -
                                    </Button>
                                    <Text size="sm">{quantity}</Text>
                                    <Button
                                        variant="default"
                                        size="xs"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                    >
                                        +
                                    </Button>
                                </Group>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Text fw={700} size="sm">
                                    Total:
                                </Text>

                                <NumberFormatter
                                    prefix="$"
                                    value={quantity * product.price}
                                    thousandSeparator
                                    decimalSeparator="."
                                    decimalScale={2}
                                    className="text-pink font-bold text-xl"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4 items-center">
                            <Button color="pink" size="md" fullWidth>
                                Buy now
                            </Button>

                            <ActionIcon variant="light" size="xl" color="pink">
                                <BiHeart />
                            </ActionIcon>
                        </div>
                    </aside>
                </section>
            </div>
        )
    } else {
        return <PageError />
    }
}
