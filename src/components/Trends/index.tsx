import { api } from "../../services/api";
import { useEffect, useState } from "react";

// icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// components
import { ProductCard } from "./ProductCard";

// types
import { ProductProps } from "../ProductTypes";

export function Trends() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      const allProducts: ProductProps[] = response.data;
      const newProducts: ProductProps[] = allProducts.filter(
        (product: ProductProps) => product.type === "New"
      );
      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="mx-7">
      <div className="flex justify-between items-center p-1">
        <BiChevronLeft />
        <h2>New</h2>
        <BiChevronRight />
      </div>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
