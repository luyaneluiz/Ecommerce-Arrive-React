import { Banner } from "../../components/Banner"
import { CategoriesCards } from "./CategoriesBlock"
import { Trends } from "../../components/Trends"
import { PromoCard } from "./PromoCard"
import { Products } from "./Products"

export function Home() {
    return (
        <div className="flex flex-col items-center w-full">
            <Banner />
            <CategoriesCards />

            <div className="flex flex-col lg:flex-row lg:gap-8 w-full px-8 items-start">
                <Trends />
                <div className="w-full flex flex-col gap-4">
                    <PromoCard />
                    <Products />
                </div>
            </div>
        </div>
    )
}
