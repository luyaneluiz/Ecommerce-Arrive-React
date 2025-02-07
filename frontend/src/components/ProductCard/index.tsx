import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import {
    ActionIcon,
    Badge,
    Box,
    Button,
    Flex,
    Image,
    Paper,
    Stack,
    Text,
} from "@mantine/core"
import { useState } from "react"
import { useFavoritesContext } from "@/contexts/FavoritesContext"
import { CartProductProps } from "@/types/Product"
import { useModalContext } from "@/contexts/ModalContext"

export function ProductCard({
    id,
    title,
    description,
    price,
    cover,
    old_price,
    type,
}: CartProductProps) {
    const navigate = useNavigate()
    const { openModal } = useModalContext()
    const { user } = useAuth()
    const { favorites, handleAddFavorite, handleRemoveFavorite } =
        useFavoritesContext()
    const [isFavorite, setIsFavorite] = useState<boolean>(
        favorites ? favorites.some((product) => product._id === id) : false,
    )

    const toggleFavorite = () => {
        if (isFavorite) {
            handleRemoveFavorite(id)
        } else {
            handleAddFavorite(id)
        }

        setIsFavorite(!isFavorite)
    }

    const badgeColor = () => {
        switch (type) {
            case "New":
                return "yellow"
            case "Offer":
                return "green"
            case "Hot":
                return "red"
            default:
                return "blue"
        }
    }

    const handleAddToCartClick = () => {
        if (user) {
            openModal({ id, title, price, cover })
        } else {
            navigate("/auth")
        }
    }

    return (
        <Paper shadow="xs" radius="md" p="sm" withBorder>
            <Flex justify="space-between" direction="row-reverse">
                <ActionIcon
                    variant="transparent"
                    color="gray"
                    onClick={toggleFavorite}
                >
                    {isFavorite ? (
                        <BiSolidHeart size={22} />
                    ) : (
                        <BiHeart size={22} />
                    )}
                </ActionIcon>

                {type && !description && (
                    <Badge color={badgeColor()}>{type}</Badge>
                )}
            </Flex>

            <Link to={`/product/${id}`}>
                <Box w={200} h={200} m="auto">
                    <Image src={cover} alt={title} h="100%" fit="contain" />
                </Box>
            </Link>

            <Stack mt="sm" align={description ? "flex-start" : "center"}>
                <Text
                    fw={description ? "bold" : 500}
                    size={description ? "sm" : "md"}
                    lineClamp={1}
                >
                    {title}
                </Text>

                {description && (
                    <Text size="xs" c="dimmed" lineClamp={3}>
                        {description}
                    </Text>
                )}

                <Flex align="center" gap={4}>
                    <Text
                        size={description ? "md" : "lg"}
                        c={description ? "dark" : "pink"}
                        fw={700}
                    >
                        ${price.toFixed(2)}
                    </Text>
                    {old_price && (
                        <Text td="line-through" c="gray" size="xs">
                            ${old_price}
                        </Text>
                    )}
                </Flex>

                <Button
                    variant={description ? "outline" : "filled"}
                    color="pink"
                    fullWidth
                    onClick={handleAddToCartClick}
                >
                    ADD TO BAG
                </Button>
            </Stack>
        </Paper>
    )
}
