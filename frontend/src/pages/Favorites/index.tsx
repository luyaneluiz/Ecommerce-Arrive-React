import React from "react"
import { SimpleGrid, Title } from "@mantine/core"
import FavoriteCard from "../../components/FavoriteCard"
import { useFavorites } from "../../hooks/useFavorites"

export function Favorites() {
    const userId = "6718fc3fe2238b22cef334d4"
    const { favorites } = useFavorites(userId)

    return (
        <>
            <Title order={1}>Favorites</Title>

            <SimpleGrid cols={2}>
                {favorites && favorites.length > 0 ? (
                    favorites.map((product) => (
                        <FavoriteCard key={product._id} product={product} />
                    ))
                ) : (
                    <div>Nenhum favorito encontrado.</div>
                )}
            </SimpleGrid>
        </>
    )
}
