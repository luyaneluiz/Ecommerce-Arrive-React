import { useMemo, useState } from "react"
// Hooks
import { useProducts } from "@/hooks/useProducts"
// Contexts
import { useBreakpoint } from "@/contexts/BreakpointContext"
// Components
import { Stack } from "@mantine/core"
import HeaderTrend from "./Header"
import TrendProductCard from "./Card"

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

                    <Stack gap="lg">
                        {filteredProducts.map((product) => (
                            <TrendProductCard
                                key={product._id}
                                title={product.title}
                                price={product.price}
                                cover={product.cover}
                                old_price={product.old_price}
                            />
                        ))}
                    </Stack>
                </>
            ) : (
                <>
                    {Object.entries(trendsData).map(([key, products]) => (
                        <Stack key={key}>
                            <HeaderTrend trend={key as Trend} />

                            <Stack gap="lg">
                                {products.map((product) => (
                                    <TrendProductCard
                                        key={product._id}
                                        title={product.title}
                                        price={product.price}
                                        cover={product.cover}
                                        old_price={product.old_price}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </>
            )}
        </section>
    )
}
