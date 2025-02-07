import { CategoryCard } from "../CategoryCard"
import { Grid } from "@mantine/core"

const categories = [
    {
        id: 1,
        title: "Women's",
        cover: "https://plus.unsplash.com/premium_photo-1691367279381-0bc5f1048916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1vZGElMjBmZW1pbmluYXxlbnwwfDB8MHx8fDA%3D",
    },
    {
        id: 2,
        title: "Men's",
        cover: "https://images.unsplash.com/photo-1548883354-caf6b10b1e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGElMjBtYXNjdWxpbmF8ZW58MHwwfDB8fHww",
    },
    {
        id: 3,
        title: "Winter",
        cover: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

export function CategoriesCards() {
    return (
        <Grid p={30} w="100%">
            {categories.map((category) => (
                <Grid.Col
                    span={4}
                    key={category.title}
                    className="flex justify-center snap-center w-full"
                >
                    <CategoryCard
                        title={category.title}
                        cover={category.cover}
                    />
                </Grid.Col>
            ))}
        </Grid>
    )
}
