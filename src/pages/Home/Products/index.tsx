import { api } from "../../../services/api";
import { useEffect, useState } from "react";

// components
import { ProductCard } from "../../../components/ProductCard";
import { Title } from "../../../components/Titlte";

// types
import { ProductProps } from "../../../types/ProductTypes";

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="flex flex-col items-center pb-6">
      <Title text="Products" />

      <div className="flex flex-col items-center gap-4 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:sm:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
