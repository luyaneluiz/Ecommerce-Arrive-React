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
                direction={{ base: "column", sm: "row" }}
                gap="xl"
                align="start"
                w="100%"
                p={32}
            >
                <Trends />

                <Stack w="100%">
                    <PromoCard />
                    <Products />
                </Stack>
            </Flex>
        </Stack>
    )
}
