import { Banner } from "../../components/Banner"
import { CategoriesCards } from "./CategoriesBlock"
import { Trends } from "../../components/Trends"
import { PromoCard } from "./PromoCard"
import { Products } from "./Products"
import { Flex, Stack } from "@mantine/core"

export function Home() {
    return (
        <Stack>
            <Banner />
            <CategoriesCards />

            <Flex
                direction={{ base: "column", md: "row" }}
                gap="lg"
                align="start"
                w={"100%"}
                p={32}
            >
                <Trends />

                <Stack>
                    <PromoCard />
                    <Products />
                </Stack>
            </Flex>
        </Stack>
    )
}
