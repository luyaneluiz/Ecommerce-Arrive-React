import { SimpleGrid, Title } from "@mantine/core"
import FavoriteCard from "../../components/FavoriteCard"
import { useFavorites } from "../../hooks/useFavorites"
import EmptyPage from "@/components/Empty"

export function Favorites() {
    const userId = "6718fc3fe2238b22cef334d4"
    const { favorites } = useFavorites(userId)

    return (
        <main className="px-8">
            {favorites && favorites.length > 0 ? (
                <>
                    <Title order={1} size={24} pb={20}>
                        Favorites
                    </Title>

                    <SimpleGrid cols={{ base: 1, sm: 3, md: 4, lg: 5 }}>
                        {favorites.map((product) => (
                            <FavoriteCard key={product._id} product={product} />
                        ))}
                    </SimpleGrid>
                </>
            ) : (
                <EmptyPage />
            )}
        </main>
    )
}
