import { useCartContext } from "@/contexts/CartContext"
import { useFavoritesContext } from "@/contexts/FavoritesContext"
import { ProductCartProps } from "@/types/Cart"
import {
    Table,
    Flex,
    Box,
    Stack,
    ColorSwatch,
    NumberFormatter,
    Tooltip,
    ActionIcon,
    Image,
    Text,
} from "@mantine/core"
import { BiTrash } from "react-icons/bi"
import { TbHeartShare } from "react-icons/tb"

export default function CartTable({ cart }: { cart: ProductCartProps[] }) {
    const { handleRemoveFromCart } = useCartContext()
    const { handleAddFavorite } = useFavoritesContext()

    const handleMoveToFavorites = (product: ProductCartProps) => {
        handleRemoveFromCart(product._id)
        handleAddFavorite(product._id)
    }

    const handleRemoveProduct = (product: ProductCartProps) => {
        handleRemoveFromCart(product._id)
    }

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
                        <ActionIcon
                            color="dark"
                            variant="subtle"
                            onClick={() => handleMoveToFavorites(product)}
                        >
                            <TbHeartShare />
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Remove" position="bottom" fz="xs">
                        <ActionIcon
                            color="red"
                            variant="subtle"
                            onClick={() => handleRemoveProduct(product)}
                        >
                            <BiTrash />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
            </Table.Td>
        </Table.Tr>
    ))

    return (
        <Table.ScrollContainer minWidth={300}>
            <Table layout="fixed" verticalSpacing="md" w={"100%"}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th w={230}>Items</Table.Th>
                        <Table.Th w={90}>Quantity</Table.Th>
                        <Table.Th w={100}>Subtotal</Table.Th>
                        <Table.Th w={100}>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    )
}
