import { SimpleGrid, Stack } from "@mantine/core"
import FavoriteCard from "../../components/FavoriteCard"
import { useFavorites } from "../../hooks/useFavorites"
import EmptyPage from "@/components/Empty"
import { Title } from "@/components/Titlte"

export function Favorites() {
    const userId = localStorage.getItem("user")
    const { favorites } = useFavorites(userId)

    return (
        <main className="px-4 md:px-12 pb-8">
            {favorites && favorites.length > 0 ? (
                <Stack>
                    <Title text="Favorites" />

                    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
                        {favorites.map((product) => (
                            <FavoriteCard key={product._id} product={product} />
                        ))}
                    </SimpleGrid>
                </Stack>
            ) : (
                <EmptyPage />
            )}
        </main>
    )
}
