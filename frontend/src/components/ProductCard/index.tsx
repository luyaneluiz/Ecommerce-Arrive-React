import { BiHeart, BiSolidHeart } from "react-icons/bi"
// import { Badge } from "../Bagde"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { useFavorites } from "../../hooks/useFavorites"
import { useAuth } from "@/contexts/AuthContext"
import { Button, Flex, Text } from "@mantine/core"
import { useCart } from "@/hooks/useCart"

interface ProductProps {
    id: string
    title: string
    price: number
    cover: string
    old_price?: number
    isFavorite?: boolean
    type?: string
}

export function ProductCard({
    id,
    title,
    price,
    cover,
    old_price,
    isFavorite,
    // type,
}: ProductProps) {
    const { user } = useAuth()
    const userId = user?._id || null
    const { setFavorites } = useFavorites(userId)
    const { handleAddToCart } = useCart(userId)

    function handleFavoriteClick() {
        if (isFavorite) {
            removeFavorite()
        } else {
            addFavorite()
        }
    }

    async function addFavorite() {
        try {
            const response = await api.post("/favorites", {
                userId: userId,
                productId: id,
            })

            if (response.data) {
                setFavorites((prev) => [...(prev || []), response.data])
                isFavorite = true
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function removeFavorite() {
        try {
            const response = await api.delete("/favorites", {
                data: {
                    userId: userId,
                    productId: id,
                },
            })

            if (response.data) {
                setFavorites((prev) =>
                    prev ? prev.filter((fav) => fav._id !== id) : [],
                )
                isFavorite = false
            } else {
                console.log(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center w-full border border-gray-300 rounded-xl bg-white p-6 sm:h-[460px]">
            <div className="w-full flex flex-row-reverse justify-between">
                <button
                    onClick={() => {
                        handleFavoriteClick()
                    }}
                >
                    {isFavorite ? (
                        <BiSolidHeart size={28} />
                    ) : (
                        <BiHeart size={28} />
                    )}
                </button>
                {/* {type && <Badge {...product} />} */}
            </div>
            <Link to={`/product/${id}`}>
                <img
                    src={cover}
                    alt={title}
                    className="transition-all duration-500 hover:scale-105 h-60 :w-56 cursor-pointer"
                />
            </Link>
            <div className="flex flex-col items-center text-center w-5/6 gap-2">
                <p className="text-base">{title}</p>

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
                    onClick={() => handleAddToCart(id)}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    )
}
