import { SimpleGrid, Stack } from "@mantine/core"
import FavoriteCard from "../../components/FavoriteCard"
import EmptyPage from "@/components/Empty"
import { PageTitle } from "@/components/PageTitle"
import { useFavoritesContext } from "@/contexts/FavoritesContext"
import { ModalProvider } from "@/contexts/ModalContext"

export function Favorites() {
    const { favorites } = useFavoritesContext()

    return (
        <ModalProvider>
            <main className="px-4 md:px-12 pb-8">
                {favorites && favorites.length > 0 ? (
                    <Stack>
                        <PageTitle text="Favorites" />

                        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
                            {favorites.map((product) => (
                                <FavoriteCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </SimpleGrid>
                    </Stack>
                ) : (
                    <EmptyPage message="No favorites yet." />
                )}
            </main>
        </ModalProvider>
    )
}
