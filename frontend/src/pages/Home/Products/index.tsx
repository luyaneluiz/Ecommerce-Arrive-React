import { Title } from "@/components/Titlte"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import { useAuth } from "@/contexts/AuthContext"
import { useFavorites } from "@/hooks/useFavorites"
import { SimpleGrid, Stack } from "@mantine/core"
import { useEffect, useState } from "react"

type TypeProps = "New" | "Offer" | "Hot"

export function Products() {
    const { user } = useAuth()
    const userId = user?._id
    const { products: fetchedProducts } = useProducts()
    const { favorites, handleAddFavorite, handleRemoveFavorite } = useFavorites(
        userId || null,
    )

    const [products, setProducts] = useState(
        fetchedProducts.map((product) => ({ ...product, isFavorite: false })),
    )

    useEffect(() => {
        if (userId && favorites) {
            const favoriteIds = new Set(favorites.map((fav) => fav._id))
            const updatedProducts = fetchedProducts.map((product) => ({
                ...product,
                isFavorite: favoriteIds.has(product._id),
            }))
            setProducts(updatedProducts)
        }
    }, [fetchedProducts])

    const toggleFavorite = (id: string) => {
        setProducts((prev) =>
            prev.map((product) => {
                if (product._id === id) {
                    return { ...product, isFavorite: !product.isFavorite }
                }
                return product
            }),
        )

        const product = products.find((product) => product._id === id)

        console.log(product)

        if (product && !product.isFavorite) {
            handleAddFavorite(id)
        } else {
            handleRemoveFavorite(id)
        }
    }

    return (
        <Stack>
            <Title text="Products" />

            <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 3, md: 2, lg: 3 }}
                spacing="lg"
            >
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        price={product.price}
                        cover={product.cover}
                        old_price={product.old_price}
                        isFavorite={product.isFavorite}
                        type={product.type as TypeProps}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </SimpleGrid>
        </Stack>
    )
}
