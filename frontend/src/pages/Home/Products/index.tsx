import { Title } from "@/components/Titlte"
import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"

export function Products() {
    const { products } = useProducts()

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
