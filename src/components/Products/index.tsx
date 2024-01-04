import { api } from "../../services/api";
import { useEffect, useState } from "react";

// components
import { ProductCard } from "./ProductCard";

// types
import { ProductProps } from "../ProductTypes";

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="flex flex-col items-center sm:ps-7">
      <div className="w-full border-b mb-4 py-3">
        <h3 className="font-bold sm:text-lg">Products</h3>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
