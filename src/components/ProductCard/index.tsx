import { useState } from "react"

// icons
import { BiHeart, BiSolidHeart } from "react-icons/bi"

// types
import { ProductProps } from "../../types/ProductTypes"

// components
import { Badge } from "../Bagde"
import { Button } from "../../components/Button"

export function ProductCard({ product }: { product: ProductProps }) {
    const [favorite, setFavorite] = useState(false)

    function handleFavoriteClick() {
        setFavorite((prevState) => !prevState)
    }

    return (
        <div className="flex flex-col items-center w-full border border-gray-300 rounded-xl bg-white p-6 sm:h-[460px]">
            <div className="w-full flex flex-row-reverse justify-between">
                <button
                    onClick={() => {
                        handleFavoriteClick()
                    }}
                >
                    {favorite ? (
                        <BiSolidHeart size={28} />
                    ) : (
                        <BiHeart size={28} />
                    )}
                </button>
                {product.type && <Badge {...product} />}
            </div>
            <img
                src={product.cover}
                alt={product.title}
                className="transition-all duration-500 hover:scale-105 h-60 :w-56 cursor-pointer"
            />
            <div className="flex flex-col items-center text-center w-5/6 gap-2">
                <p className="text-base">{product.title}</p>
                <div className="flex items-center">
                    <h3 className="text-pink pe-2 text-lg font-extrabold">
                        ${product.price.toFixed(2)}
                    </h3>
                    <del className="text-xs">
                        ${product.old_price.toFixed(2)}
                    </del>
                </div>
                <Button text="ADD TO CART" />
            </div>
        </div>
    )
}
