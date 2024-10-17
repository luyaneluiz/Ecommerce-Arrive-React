import React, { useState } from "react"
import { useProduct } from "../../hooks/useProduct"
import {
    Title,
    Button,
    Text,
    Badge,
    Rating,
    ColorSwatch,
    CheckIcon,
    rem,
    Divider,
    Group,
    NumberFormatter,
    ActionIcon,
} from "@mantine/core"
import PageError from "../../components/Error/PageError"
import { BiHeart } from "react-icons/bi"

export function Product() {
    const { product } = useProduct()
    const [checked, setChecked] = useState(true)

    if (product) {
        return (
            <div className="flex justify-center py-8">
                <section className="flex flex-col lg:flex-row max-w-[1000px] gap-10">
                    <aside className="border rounded-lg border-slate-100 p-4 w-[900px] h-[500px]">
                        <img
                            src={`../../${product.cover}`}
                            alt=""
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </aside>

                    <aside>
                        <div className="mb-4">
                            <Badge color="blue">{product.type}</Badge>
                            <Title size="h4">{product.title}</Title>
                            <Rating defaultValue={2} />
                            <div className="pt-2">
                                <NumberFormatter
                                    prefix="$"
                                    value={product.price}
                                    thousandSeparator
                                    decimalSeparator="."
                                    decimalScale={2}
                                    className="text-pink font-bold text-xl"
                                />
                            </div>
                        </div>

                        <Text size="md" mt="sm">
                            {product.description}
                        </Text>

                        <Divider my={20} />

                        <div className="flex justify-between">
                            <Group>
                                <Text fw={700} size="sm">
                                    Color
                                </Text>

                                <Group gap={5}>
                                    <ColorSwatch
                                        component="button"
                                        size={25}
                                        color="var(--mantine-color-grape-6)"
                                        onClick={() => setChecked((c) => !c)}
                                        style={{
                                            color: "#fff",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {!checked && (
                                            <CheckIcon
                                                style={{
                                                    width: rem(12),
                                                    height: rem(12),
                                                }}
                                            />
                                        )}
                                    </ColorSwatch>

                                    <ColorSwatch
                                        component="button"
                                        color="var(--mantine-color-pink-6)"
                                        size={25}
                                        onClick={() => setChecked((c) => !c)}
                                        style={{
                                            color: "#fff",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {checked && (
                                            <CheckIcon
                                                style={{
                                                    width: rem(12),
                                                    height: rem(12),
                                                }}
                                            />
                                        )}
                                    </ColorSwatch>
                                </Group>
                            </Group>

                            <Group>
                                <Text fw={700} size="sm">
                                    Size
                                </Text>

                                <Group gap={5}>
                                    <Button variant="default" size="xs">
                                        S
                                    </Button>
                                    <Button variant="default" size="xs">
                                        M
                                    </Button>
                                    <Button variant="default" size="xs">
                                        L
                                    </Button>
                                </Group>
                            </Group>
                        </div>

                        <Divider my={20} />

                        <div className="flex justify-between">
                            <div>
                                <Text fw={700} size="sm">
                                    Quantity:
                                </Text>

                                <Group className="mt-2">
                                    <Button variant="default" size="xs">
                                        -
                                    </Button>
                                    <Text size="sm">1</Text>
                                    <Button variant="default" size="xs">
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
                                    value={product.price}
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
