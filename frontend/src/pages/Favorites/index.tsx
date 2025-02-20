import { SimpleGrid, Stack } from "@mantine/core"
import FavoriteCard from "../../components/FavoriteCard"
import EmptyPage from "@/components/Empty"
import { PageTitle } from "@/components/PageTitle"
import { useFavoritesContext } from "@/contexts/FavoritesContext"

export function Favorites() {
    const { favorites } = useFavoritesContext()

    return (
        <Stack px={{ base: 20, md: 52 }} mb={30}>
            {favorites && favorites.length > 0 ? (
                <Stack>
                    <PageTitle text="Favorites" />

                    <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
                        {favorites.map((product) => (
                            <FavoriteCard key={product._id} product={product} />
                        ))}
                    </SimpleGrid>
                </Stack>
            ) : (
                <EmptyPage message="No favorites yet." />
            )}
        </Stack>
    )
}
