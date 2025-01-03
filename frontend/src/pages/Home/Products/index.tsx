import { Title } from "@/components/Titlte"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import { useAuth } from "@/contexts/AuthContext"
import { useFavorites } from "@/hooks/useFavorites"

export function Products() {
    const { products } = useProducts()
    const { user } = useAuth()
    const userId = user?._id
    const { favorites } = useFavorites(userId || null)

    const favoriteIds = favorites
        ? new Set(favorites.map((fav) => fav._id))
        : new Set()
    products.map((product) => {
        product.isFavorite = favoriteIds.has(product._id)
    })

    return (
        <section className="flex flex-col items-center pb-6">
            <Title text="Products" />

            <div className="flex flex-col items-center gap-4 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:sm:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    )
}
