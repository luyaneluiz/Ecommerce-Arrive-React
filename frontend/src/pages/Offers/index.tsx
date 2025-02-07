import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { ProductCard } from "../../components/ProductCard"
import { PageTitle } from "../../components/PageTitle"
import { ProductProps } from "../../types/Product"

export function Offers() {
    const [products, setProducts] = useState<ProductProps[]>([])
    const offers = products.filter((product) => product.type === "Offer")

    useEffect(() => {
        api.get("/products").then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <main className="flex justify-center">
            <section className="flex flex-col items-center pb-6 max-w-[1300px]">
                <PageTitle text="Offers" />

                <div className="flex flex-col items-center gap-4 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:sm:grid-cols-3">
                    {offers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    )
}
