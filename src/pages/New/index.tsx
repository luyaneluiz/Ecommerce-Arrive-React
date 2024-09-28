import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Title } from "../../components/Titlte";
import { ProductProps } from "../../types/ProductTypes";

export function New() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const newProducts = products.filter((product) => product.type === "New");

    useEffect(() => {
      api.get("/products").then((response) => {
        setProducts(response.data);
      });
    }, []);

  return (
    <main className="flex justify-center">
        <section className="flex flex-col items-center pb-6 max-w-[1300px]">
            <Title text="New" />

            <div className="flex flex-col items-center gap-4 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:sm:grid-cols-3">
                {newProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    </main>
  );
}