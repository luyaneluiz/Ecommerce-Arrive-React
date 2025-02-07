import { useMemo, useState } from "react"
// Hooks
import { useProducts } from "@/hooks/useProducts"
// Components
import { Stack } from "@mantine/core"
import HeaderTrend from "./Header"
import TrendProductCard from "./Card"
import isMobile from "@/utils/isMobile"

type Trend = "New" | "Hot"

export function Trends() {
    const mobile = isMobile()
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
        <section className="w-full md:max-w-xs">
            {mobile ? (
                <Stack gap="md">
                    <HeaderTrend
                        trend={trend}
                        changeTrend={handleChangeTrend}
                        hasArrows={mobile}
                    />

                    {filteredProducts.map((product) => (
                        <TrendProductCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            cover={product.cover}
                            old_price={product.old_price}
                        />
                    ))}
                </Stack>
            ) : (
                <Stack gap="lg">
                    {Object.entries(trendsData).map(([key, products]) => (
                        <Stack key={key} gap="md">
                            <HeaderTrend trend={key as Trend} />

                            {products.map((product) => (
                                <TrendProductCard
                                    key={product._id}
                                    id={product._id}
                                    title={product.title}
                                    price={product.price}
                                    cover={product.cover}
                                    old_price={product.old_price}
                                />
                            ))}
                        </Stack>
                    ))}
                </Stack>
            )}
        </section>
    )
}
