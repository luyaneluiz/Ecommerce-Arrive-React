import React from "react"
import { TrendProductCard } from "../Card"
import { ProductProps } from "../../../types/ProductTypes"

interface TrendsSectionProps {
    title: string
    products: ProductProps[]
}

export default function TrendsSection({ title, products }: TrendsSectionProps) {
    return (
        <div className="flex flex-col pe-5">
            <h2 className="font-bold text-xl uppercase">{title}</h2>
            {products.map((product) => (
                <TrendProductCard key={product._id} product={product} />
            ))}
        </div>
    )
}
