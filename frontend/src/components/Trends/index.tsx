import { useMemo, useState } from "react"
import { useProducts } from "../../hooks/useProducts"
import { useBreakpoint } from "../../contexts/BreakpointContext"
import { Stack } from "@mantine/core"
import HeaderTrend from "./Header"
import { TrendProductCard } from "./Card"

type Trend = "New" | "Hot"

export function Trends() {
    const { isMobile } = useBreakpoint()
    const { products } = useProducts()
    const [trend, setTrend] = useState<Trend>("New")

    const filteredProducts = products.filter(
        (product) => product.type === trend,
    )

    const trendsData = useMemo(
        () => ({
            New: products.filter((product) => product.type === "New"),
            Hot: products.filter((product) => product.type === "Hot"),
        }),
        [products],
    )

    const handleChangeTrend = () => setTrend(trend === "New" ? "Hot" : "New")

    return (
        <section className="mb-6 w-full lg:max-w-[370px]">
            {isMobile ? (
                <>
                    <HeaderTrend
                        trend={trend}
                        changeTrend={handleChangeTrend}
                        hasArrows={isMobile}
                    />

                    {filteredProducts.map((product) => (
                        <TrendProductCard key={product._id} product={product} />
                    ))}
                </>
            ) : (
                <Stack>
                    {Object.entries(trendsData).map(([key, products]) => (
                        <Stack key={key}>
                            <HeaderTrend trend={key as Trend} />
                            {products.map((product) => (
                                <TrendProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </Stack>
                    ))}
                </Stack>
            )}
        </section>
    )
}
