import { Link } from "react-router-dom"
// Mantine components
import {
    Accordion,
    List,
    ListItem,
    Menu,
    SimpleGrid,
    Stack,
    Text,
} from "@mantine/core"

const categories = [
    {
        title: "Women's",
        items: ["Formal", "Casual", "Sports", "Jacket", "Perfum"],
    },
    {
        title: "Men's",
        items: ["Formal", "Casual", "Sports", "Jacket", "Perfum"],
    },
    {
        title: "Accessories",
        items: ["Bags", "Belt", "Jewelry", "Cosmetics", "Cap"],
    },
    {
        title: "Beach",
        items: ["Bikini", "Sarong", "Speedo", "Hats", "Bags"],
    },
]

export function CategoriesBlock() {
    return (
        <>
            <Accordion variant="filled" className="sm:hidden">
                <Accordion.Item value="categories">
                    <Accordion.Control p={0} m={0}>
                        CATEGORIES
                    </Accordion.Control>
                    {categories.map(({ title }) => (
                        <Accordion.Panel key={title} pb={0}>
                            {title}
                        </Accordion.Panel>
                    ))}
                </Accordion.Item>
            </Accordion>

            <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                    <Link
                        to="#"
                        className="cursor-pointer hover:text-pink uppercase hidden sm:flex"
                    >
                        Categories
                    </Link>
                </Menu.Target>

                <Menu.Dropdown p={25}>
                    <SimpleGrid cols={4} spacing="lg">
                        {categories.map(({ title, items }) => (
                            <Stack key={title} gap="sm">
                                <Text fw={700}>{title}</Text>

                                <List spacing={5}>
                                    {items.map((title) => (
                                        <ListItem key={title}>{title}</ListItem>
                                    ))}
                                </List>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Menu.Dropdown>
            </Menu>
        </>
    )
}
