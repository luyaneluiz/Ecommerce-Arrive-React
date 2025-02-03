import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import {
    ActionIcon,
    Badge,
    Button,
    Flex,
    Image,
    Stack,
    Text,
} from "@mantine/core"
import { useState } from "react"
import AddToCartModal from "../Modal/AddToCart"

type TypeProps = "New" | "Offer" | "Hot"

interface ProductProps {
    id: string
    title: string
    price: number
    cover: string
    old_price?: number
    isFavorite?: boolean
    type?: TypeProps
    onToggleFavorite: (id: string) => void
}

export function ProductCard({
    id,
    title,
    price,
    cover,
    old_price,
    isFavorite,
    type,
    onToggleFavorite,
}: ProductProps) {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [openModal, setOpenModal] = useState(false)

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

    const FavoriteIcon = () => {
        return isFavorite ? <BiSolidHeart size={24} /> : <BiHeart size={24} />
    }

    const handleAddToCartClick = () => {
        if (user) {
            setOpenModal(true)
        } else {
            navigate("/login")
        }
    }

    return (
        <>
            <AddToCartModal
                opened={openModal}
                setOpened={setOpenModal}
                id={id}
            />

            <div className="flex flex-col items-center w-full border border-gray-300 rounded-xl bg-white p-6 sm:h-[460px]">
                <div className="w-full flex flex-row-reverse justify-between">
                    <ActionIcon
                        variant="transparent"
                        color="dark"
                        onClick={() => onToggleFavorite(id)}
                    >
                        {FavoriteIcon()}
                    </ActionIcon>

                    {type && <Badge color={badgeColor()}>{type}</Badge>}
                </div>

                <Link to={`/product/${id}`}>
                    <Image
                        src={cover}
                        alt={title}
                        h={230}
                        className="transition-all duration-700 hover:scale-105"
                    />
                </Link>

                <Stack w="100%" align="center">
                    <Text>{title}</Text>

                    <Flex align="center" gap={4}>
                        <Text size="lg" c="pink" fw={600}>
                            ${price.toFixed(2)}
                        </Text>
                        {old_price && (
                            <Text td="line-through" c="gray" size="sm">
                                ${old_price}
                            </Text>
                        )}
                    </Flex>

                    <Button
                        color="pink"
                        fullWidth
                        onClick={handleAddToCartClick}
                    >
                        Add to cart
                    </Button>
                </Stack>
            </div>
        </>
    )
}
