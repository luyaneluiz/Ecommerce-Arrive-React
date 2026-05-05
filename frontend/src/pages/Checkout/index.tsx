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
import { useMemo } from "react"
import { BiArrowBack } from "react-icons/bi"
import AddressSection from "./AddressSection"
import DeliverySection from "./DeliverySection"
import PaymentSection from "./PaymentSection"
import { useCartContext } from "@/contexts/CartContext"
import { CheckoutFormData } from "@/types/Checkout"
import { useForm, FormProvider } from "react-hook-form"
import { useOrders } from "@/hooks/useOrders"

export default function Checkout() {
    const { cart } = useCartContext()
    const { handleAddOrder } = useOrders()
    const methods = useForm<CheckoutFormData>({
        defaultValues: {
            address: null,
            shippingMethod: "Standard",
            paymentMethod: "Credit card",
            card: {
                name: "",
                number: "",
                expiry: "",
                cvv: "",
            },
        },
    })
    const shipping = methods.watch("shippingMethod")
    const shippingCost = shipping === "Express" ? 15 : 8

    const subtotal = useMemo(
        () => cart?.reduce((acc, product) => acc + product.subtotal, 0) ?? 0,
        [cart],
    )

    const total = subtotal + 2 + shippingCost

    const onSubmit = async (data: CheckoutFormData) => {
        console.log("📝 Formulário enviado:", data)

        if (!data.address) {
            alert("Por favor selecione um endereço")
            return
        }

        try {
            await handleAddOrder({
                products:
                    cart?.map((item) => ({
                        product: item._id,
                        quantity: item.quantity,
                        price: item.price,
                    })) || [],
                total,
                status: "pending",
                paymentMethod: data.paymentMethod,
                shippingAddress: data.address._id,
                orderDate: new Date(),
            })
            alert("✅ Pedido realizado com sucesso!")
        } catch (error) {
            console.error("Erro ao enviar pedido:", error)
            alert("❌ Erro ao finalizar o pedido. Tente novamente.")
        }
    }

    return (
        <Stack px={{ base: 20, md: 52 }} mb={30}>
            <PageTitle text="Checkout" />

            <Flex
                direction={{ base: "column-reverse", md: "row" }}
                align="flex-start"
                gap={20}
            >
                <FormProvider {...methods}>
                    <form
                        style={{
                            width: "100%",
                            gap: 20,
                            display: "flex",
                            flexDirection: "column",
                        }}
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <AddressSection />

                        <DeliverySection />

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

                            <Button color="pink" type="submit">
                                Confirm order
                            </Button>
                        </Flex>
                    </form>
                </FormProvider>

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
                            <Text size="xs">$ {shippingCost.toFixed(2)}</Text>
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
