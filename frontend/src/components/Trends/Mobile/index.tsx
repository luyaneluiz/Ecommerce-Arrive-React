import React from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { TrendProductCard } from "../Card"
import { ProductProps } from "../../../types/ProductTypes"

interface MobileTrendsProps {
    products: ProductProps[]
    trend: "New" | "Hot"
    handleTrendClick: () => void
}

export default function MobileTrends({
    products,
    trend,
    handleTrendClick,
}: MobileTrendsProps) {
    return (
        <div>
            <div className="flex justify-between items-center p-1">
                <button onClick={handleTrendClick}>
                    <BiChevronLeft />
                </button>
                <h2 className="font-bold uppercase">{trend}</h2>
                <button onClick={handleTrendClick}>
                    <BiChevronRight />
                </button>
            </div>
            <div>
                {products.map((product) => (
                    <TrendProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}
