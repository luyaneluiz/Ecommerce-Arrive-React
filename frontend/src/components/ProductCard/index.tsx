import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { ProductProps } from "../../types/ProductTypes"
import { Badge } from "../Bagde"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { useFavorites } from "../../hooks/useFavorites"
import { useAuth } from "@/contexts/AuthContext"

export function ProductCard({ product }: { product: ProductProps }) {
    const { user } = useAuth()
    const userId = user?.id || null
    const { favorites, setFavorites } = useFavorites(userId)
    const isFavorite = favorites?.some((fav) => fav._id === product._id)

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
                userId: "6718fc3fe2238b22cef334d4",
                productId: product._id,
            })

            if (response.data) {
                setFavorites((prev) => [...(prev || []), product])
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
                    userId: "6718fc3fe2238b22cef334d4",
                    productId: product._id,
                },
            })

            if (response.data) {
                setFavorites((prev) =>
                    prev ? prev.filter((fav) => fav._id !== product._id) : [],
                )
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
                {product.type && <Badge {...product} />}
            </div>
            <Link to={`/product/${product._id}`}>
                <img
                    src={product.cover}
                    alt={product.title}
                    className="transition-all duration-500 hover:scale-105 h-60 :w-56 cursor-pointer"
                />
            </Link>
            <div className="flex flex-col items-center text-center w-5/6 gap-2">
                <p className="text-base">{product.title}</p>
                <div className="flex items-center">
                    <h3 className="text-pink pe-2 text-lg font-extrabold">
                        ${product.price.toFixed(2)}
                    </h3>
                    {product.old_price && (
                        <del className="text-xs">
                            ${product.old_price.toFixed(2)}
                        </del>
                    )}
                </div>
                <Button text="ADD TO CART" />
            </div>
        </div>
    )
}
