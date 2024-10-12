import React from "react"
import TrendsSection from "../Section"
import { ProductProps } from "../../../types/ProductTypes"

interface DesktopTrendsProps {
    products: ProductProps[]
}

export default function DesktopTrends({ products }: DesktopTrendsProps) {
    const newProducts = products.filter((product) => product.type === "New")
    const hotProducts = products.filter((product) => product.type === "Hot")

    return (
        <div className="flex flex-col gap-6">
            <TrendsSection title="New" products={newProducts} />
            <TrendsSection title="Hot" products={hotProducts} />
        </div>
    )
}
