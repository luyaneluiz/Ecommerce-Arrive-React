import React, { useState } from "react"
import { useProducts } from "../../hooks/useProducts"
import { useBreakpoint } from "../../contexts/BreakpointContext"
import MobileTrends from "./Mobile"
import DesktopTrends from "./Desktop"

export function Trends() {
    const { isMobile } = useBreakpoint()
    const { products } = useProducts()
    const [trend, setTrend] = useState<"New" | "Hot">("New")

    const filteredProducts = products.filter(
        (product) => product.type === trend || !isMobile,
    )

    const handleTrendClick = () => {
        setTrend(trend === "New" ? "Hot" : "New")
    }

    return (
        <div className="flex justify-center mb-6 w-full lg:max-w-[370px]">
            {isMobile ? (
                <MobileTrends
                    products={filteredProducts}
                    trend={trend}
                    handleTrendClick={handleTrendClick}
                />
            ) : (
                <DesktopTrends products={products} />
            )}
        </div>
    )
}
