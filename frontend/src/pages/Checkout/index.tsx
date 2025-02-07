import { PageTitle } from "@/components/PageTitle"
import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    Paper,
    Stack,
    Text,
} from "@mantine/core"
import { useEffect, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import AddressSection from "./AddressSection"
import DeliverySection from "./DeliverySection"
import PaymentSection from "./PaymentSection"
import { useCartContext } from "@/contexts/CartContext"

export default function Checkout() {
    const { cart } = useCartContext()
    const [subtotal, setSubtotal] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [shipping, setShipping] = useState<number>(8)

    useEffect(() => {
        if (cart && cart.length > 0) {
            setSubtotal(
                cart.reduce((acc, product) => acc + product.subtotal, 0),
            )
            setTotal(subtotal + 2 + shipping)
        }
    }, [cart, shipping])

    return (
        <Stack px={{ base: 20, md: 52 }} mb={30}>
            <PageTitle text="Checkout" />

            <Flex
                direction={{ base: "column-reverse", md: "row" }}
                align="flex-start"
                gap={20}
            >
                <Stack w="100%" gap={20}>
                    <AddressSection />

                    <DeliverySection setShipping={setShipping} />

                    <PaymentSection />

                    <Flex justify="space-between">
                        <Button
                            variant="default"
                            leftSection={<BiArrowBack />}
                            component="a"
                            href="/cart"
                        >
                            Back to bag
                        </Button>
                        <Button color="pink">Confirm order</Button>
                    </Flex>
                </Stack>

                <Paper
                    w={{ base: "100%", md: 450 }}
                    p={20}
                    bg="#f9f9f9"
                    withBorder
                >
                    <Text fs="xl" fw={600} mb={20}>
                        MY SHOPPING BAG
                    </Text>

                    <Stack>
                        {cart &&
                            cart.map((product) => (
                                <Flex gap={15} align="center" key={product._id}>
                                    <Box w={60} miw={60} h={60} p={2}>
                                        <Image
                                            src={product.cover}
                                            alt={product.title}
                                            w="100%"
                                            h="100%"
                                            fit="contain"
                                        />
                                    </Box>

                                    <Flex
                                        w="100%"
                                        justify="space-between"
                                        align="flex-end"
                                    >
                                        <Stack gap={2} w="100%">
                                            <Text
                                                fw={600}
                                                size="sm"
                                                lineClamp={1}
                                            >
                                                {product.title}
                                            </Text>

                                            <Flex align="center" gap={4}>
                                                <Text size="xs" c="dimmed">
                                                    ${product.price.toFixed(2)}{" "}
                                                    x {product.quantity}
                                                </Text>
                                            </Flex>
                                        </Stack>
                                        <Text size="sm" fw={500}>
                                            ${product.subtotal.toFixed(2)}
                                        </Text>
                                    </Flex>
                                </Flex>
                            ))}
                    </Stack>

                    <Divider my={20} />

                    <Stack gap={5}>
                        <Flex justify="space-between">
                            <Text size="xs">Subtotal</Text>
                            <Text size="xs">$ {subtotal.toFixed(2)}</Text>
                        </Flex>

                        <Flex justify="space-between">
                            <Text size="xs">Tax</Text>
                            <Text size="xs">$ 2.00</Text>
                        </Flex>

                        <Flex justify="space-between">
                            <Text size="xs">Shipping</Text>
                            <Text size="xs">$ {shipping.toFixed(2)}</Text>
                        </Flex>

                        <Flex my={5} justify="space-between">
                            <Text size="sm" fw={900}>
                                Total
                            </Text>
                            <Text size="sm" fw={900}>
                                $ {total.toFixed(2)}
                            </Text>
                        </Flex>
                    </Stack>
                </Paper>
            </Flex>
        </Stack>
    )
}
