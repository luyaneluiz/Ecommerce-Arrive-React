import { Button, Image, Paper, Stack, Text } from "@mantine/core"
import { ProductProps } from "../../types/Product"
import { useAuth } from "@/contexts/AuthContext"
import { useModalContext } from "@/contexts/ModalContext"
import { useNavigate } from "react-router-dom"

export default function FavoriteCard({ product }: { product: ProductProps }) {
    const navigate = useNavigate()
    const { openModal } = useModalContext()
    const { user } = useAuth()

    const handleAddToCartClick = () => {
        const { _id: id, title, price, cover } = product

        if (user) {
            openModal({ id, title, price, cover })
        } else {
            navigate("/auth")
        }
    }

    return (
        <Paper>
            <Paper
                w="100%"
                h={230}
                m="auto"
                bg="#f2f2f2"
                p={10}
                mb={5}
                radius="sm"
            >
                <Image
                    src={product.cover}
                    alt={product.title}
                    fit="contain"
                    w="100%"
                    h="100%"
                    radius="lg"
                />
            </Paper>

            <Stack gap={8}>
                <Text lineClamp={1} fw={600}>
                    {product.title}
                </Text>

                <Text size="xs" c="dimmed" lineClamp={1}>
                    {product.description}
                </Text>

                <Text fw={600}>${product.price.toFixed(2)}</Text>

                <Button
                    variant="outline"
                    color="pink"
                    fullWidth
                    onClick={handleAddToCartClick}
                >
                    Shop now
                </Button>
            </Stack>
        </Paper>
    )
}
