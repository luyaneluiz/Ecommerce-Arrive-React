import { ProductCartProps } from "@/types/Cart"
import {
    Paper,
    Divider,
    Flex,
    NumberFormatter,
    Text,
    Stack,
    Button,
    Image,
} from "@mantine/core"
import PaymentMethods from "@/assets/payment-methods.png"

export default function OrderSummary({ cart }: { cart: ProductCartProps[] }) {
    const fixTax = 2.0
    const fixShipping = 8.0

    return (
        <Paper bg="#f1f1f1" p={20} miw={300}>
            <Text fw={800} size="md">
                Order Summary
            </Text>

            <Divider color="gray" my={10} />

            <Stack my={15} gap={10}>
                <Flex>
                    <Text size="sm">Subtotal:</Text>
                    <Text size="sm" ml="auto">
                        <NumberFormatter
                            value={cart.reduce(
                                (acc, product) => acc + product.subtotal,
                                0,
                            )}
                            prefix="$"
                            decimalScale={2}
                        />
                    </Text>
                </Flex>

                <Flex>
                    <Text size="sm">Estimated tax:</Text>
                    <Text size="sm" ml="auto">
                        ${fixTax}
                    </Text>
                </Flex>

                <Flex>
                    <Text size="sm">Shipping:</Text>
                    <Text size="sm" ml="auto">
                        ${fixShipping}
                    </Text>
                </Flex>
            </Stack>

            <Divider color="gray" my={10} />

            <Flex mb={15}>
                <Text size="md" fw={900}>
                    Total:
                </Text>
                <Text size="md" ml="auto" fw={900}>
                    <NumberFormatter
                        value={
                            cart.reduce(
                                (acc, product) => acc + product.subtotal,
                                0,
                            ) +
                            fixTax +
                            fixShipping
                        }
                        prefix="$"
                        decimalScale={2}
                    />
                </Text>
            </Flex>

            <Button color="pink" fullWidth component="a" href="/checkout">
                Proceed to checkout
            </Button>

            <Flex justify="center" mt={20}>
                <Image src={PaymentMethods} alt="Payments Methods" w={200} />
            </Flex>
        </Paper>
    )
}
