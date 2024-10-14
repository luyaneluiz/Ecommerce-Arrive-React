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
} from "@mantine/core"

export function Product() {
    const { product } = useProduct()
    const [checked, setChecked] = useState(true)

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
            <div className="flex justify-center py-8">
                <section className="flex max-w-[800px] gap-6">
                    <aside className="border rounded-lg border-slate-100 p-4">
                        <img
                            src={`../../${product.cover}`}
                            alt=""
                            width={500}
                            height={500}
                        />
                    </aside>

                    <aside>
                        <div className="mb-4">
                            <Badge color="blue">{product.type}</Badge>
                            <Title size="h4">{product.title}</Title>
                            <Rating defaultValue={2} />
                            <Text size="md" mt="sm">
                                {product.description}
                            </Text>
                        </div>

                        <Divider />

                        <div className="my-4">
                            <Text fw={700}>Color:</Text>
                            <Group className="flex gap-2 mt-2">
                                <ColorSwatch
                                    component="button"
                                    color="var(--mantine-color-grape-6)"
                                    onClick={() => setChecked((c) => !c)}
                                    style={{ color: "#fff", cursor: "pointer" }}
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

                                <ColorSwatch
                                    component="button"
                                    color="var(--mantine-color-grape-6)"
                                    onClick={() => setChecked((c) => !c)}
                                    style={{ color: "#fff", cursor: "pointer" }}
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
                        </div>

                        <Divider />

                        <div className="my-4">
                            <Text fw={700}>Size:</Text>
                            <Group className="flex gap-2 mt-2">
                                <Button variant="default">S</Button>
                                <Button variant="default">M</Button>
                                <Button variant="default">L</Button>
                            </Group>
                        </div>
                    </aside>
                </section>
            </div>
        )
    }
}
