import { Banner } from "../../components/Banner"
import { CategoriesCards } from "./CategoriesBlock"
import { Trends } from "../../components/Trends"
import { PromoCard } from "./PromoCard"
import { Products } from "./Products"
import { Stack } from "@mantine/core"

export function Home() {
    return (
        <Stack>
            <Banner />
            <CategoriesCards />

            <div className="flex flex-col lg:flex-row lg:gap-8 w-full px-8 items-start">
                <Trends />

                <Stack>
                    <PromoCard />
                    <Products />
                </Stack>
            </div>
        </Stack>
    )
}
