import { api } from "../../../services/api"
import React, { useEffect, useState } from "react"

import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { ProductCard } from "../ProductTrendCard"
import { useBreakpoint } from "../../../contexts/BreakpointContext"
import { ProductProps } from "../../../types/ProductTypes"

export function Trends() {
    const { isMobile } = useBreakpoint()
    const [trend, setTrend] = useState<"New" | "Hot">("New")
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        const fecthProducts = async () => {
            try {
                const response = await api.get("http://localhost:3002/products")
                const data = await response.data
                setProducts(data)
            } catch (error) {
                console.error("Erro ao buscar produtos:", error)
            }
        }

        fecthProducts()
    }, [])

    const filteredProducts = products.filter(
        (product) => product.type === trend || !isMobile,
    )

    function handleTrendClick() {
        setTrend(trend === "New" ? "Hot" : "New")
    }

    return (
        <div className="mb-6 w-full">
            {isMobile ? (
                <MobileView
                    products={filteredProducts}
                    trend={trend}
                    handleTrendClick={handleTrendClick}
                />
            ) : (
                <DesktopView products={products} />
            )}
        </div>
    )
}

interface MobileViewProps {
    products: ProductProps[]
    trend: "New" | "Hot"
    handleTrendClick: () => void
}

const MobileView: React.FC<MobileViewProps> = ({
    products,
    trend,
    handleTrendClick,
}) => (
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
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    </div>
)

interface DesktopViewProps {
    products: ProductProps[]
}

const DesktopView: React.FC<DesktopViewProps> = ({ products }) => {
    const newProducts = products.filter((product) => product.type === "New")
    const hotProducts = products.filter((product) => product.type === "Hot")

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <CategorySection title="New" products={newProducts} />
            <CategorySection title="Hot" products={hotProducts} />
        </div>
    )
}

interface CategorySectionProps {
    title: string
    products: ProductProps[]
}

const CategorySection: React.FC<CategorySectionProps> = ({
    title,
    products,
}) => (
    <div className="flex flex-col pe-5">
        <h2 className="font-bold text-xl uppercase">{title}</h2>
        {products.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
    </div>
)
