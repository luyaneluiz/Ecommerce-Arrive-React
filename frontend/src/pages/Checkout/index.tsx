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

export default function Checkout() {
    const [total, setTotal] = useState<number>(0)
    const [shipping, setShipping] = useState<number>(8)

    useEffect(() => {
        setTotal(100 + 2 + shipping)
    }, [shipping])

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
                        <Button variant="default" leftSection={<BiArrowBack />}>
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

                    <Flex gap={15} align="center">
                        <Box w={60} miw={60} h={60} m="auto">
                            <Image
                                src="https://images.unsplash.com/photo-1738672688024-5ce3b389f76b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                                alt="Product title"
                                w="100%"
                                h="100%"
                                fit="cover"
                            />
                        </Box>

                        <Stack gap={2} w="100%">
                            <Text fw={600} size="sm">
                                Product title
                            </Text>

                            <Flex align="center" gap={4}>
                                <Text size="xs" c="dimmed">
                                    $100.00
                                </Text>
                            </Flex>
                        </Stack>
                    </Flex>

                    <Divider my={20} />

                    <Stack gap={5}>
                        <Flex justify="space-between">
                            <Text size="xs">Subtotal</Text>
                            <Text size="xs">$ 100.00</Text>
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
