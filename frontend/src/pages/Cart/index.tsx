import EmptyPage from "@/components/Empty"
import { Title } from "@/components/Titlte"
import { useCart } from "@/hooks/useCart"
import { ProductCartProps } from "@/types/Cart"
import {
    Table,
    Image,
    Flex,
    Box,
    ActionIcon,
    Tooltip,
    Stack,
    Text,
    NumberFormatter,
    ColorSwatch,
} from "@mantine/core"
import { BiTrash } from "react-icons/bi"
import { TbHeartShare } from "react-icons/tb"

export function Cart() {
    const userId = localStorage.getItem("user")
    const { cart } = useCart(userId)
    const hasProductsInCart = cart && cart.length > 0

    return (
        <Stack px={{ base: 30, md: 52 }} mb={6}>
            <Title text="Cart" />
            {hasProductsInCart ? CartProductsContainer(cart) : CartEmpty()}
        </Stack>
    )
}

const CartProductsContainer = (cart: ProductCartProps[]) => {
    const rows = cart.map((product) => (
        <Table.Tr key={product._id}>
            <Table.Td>
                <Flex gap="md" align="center">
                    <Box w={70} h={70}>
                        <Image
                            src={product.cover}
                            alt={product.title}
                            fit="contain"
                            h={70}
                        />
                    </Box>
                    <Stack gap="sm">
                        <Text size="sm">{product.title}</Text>
                        <Flex align="center" gap={5}>
                            <Text size="xs" c="dimmed">
                                Size: {product.size} |
                            </Text>

                            <Text size="xs" c="dimmed">
                                Color:
                            </Text>

                            <ColorSwatch
                                key={product.color}
                                component="button"
                                color={product.color}
                                size={18}
                                disabled
                            />
                        </Flex>
                        <Text size="xs">
                            <NumberFormatter
                                value={product.price}
                                prefix="$"
                                decimalScale={2}
                            />
                        </Text>
                    </Stack>
                </Flex>
            </Table.Td>
            <Table.Td>{product.quantity}</Table.Td>
            <Table.Td>
                <NumberFormatter
                    value={product.subtotal}
                    prefix="$"
                    decimalScale={2}
                />
            </Table.Td>
            <Table.Td>
                <Flex gap={5}>
                    <Tooltip label="Move to favorite" position="bottom" fz="xs">
                        <ActionIcon color="dark" variant="subtle">
                            <TbHeartShare />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Remove" position="bottom" fz="xs">
                        <ActionIcon color="red" variant="subtle">
                            <BiTrash />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
            </Table.Td>
        </Table.Tr>
    ))

    return (
        <Table layout="fixed" verticalSpacing="md">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th w={350}>Items</Table.Th>
                    <Table.Th>Quantity</Table.Th>
                    <Table.Th>Subtotal</Table.Th>
                    <Table.Th>Actions</Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    )
}

const CartEmpty = () => {
    return (
        <EmptyPage
            message="No products in your cart."
            hasButton
            buttonText="Go shopping"
        />
    )
}
