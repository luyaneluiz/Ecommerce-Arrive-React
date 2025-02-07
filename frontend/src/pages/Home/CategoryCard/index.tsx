import { BackgroundImage, Box, Flex, Text } from "@mantine/core"

export interface CategoriesProps {
    title: string
    cover: string
}

export function CategoryCard({ title, cover }: CategoriesProps) {
    return (
        <Box w="100%" mx="auto">
            <BackgroundImage
                src={cover}
                radius="sm"
                style={{ overflow: "hidden" }}
                h={100}
                component="a"
                href={`/products/${title}`}
            >
                <Flex
                    p="md"
                    h="100%"
                    align="center"
                    justify="center"
                    style={{
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <Text c="white">{title}</Text>
                </Flex>
            </BackgroundImage>
        </Box>
    )
}
