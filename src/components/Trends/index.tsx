import { api } from "../../services/api";
import { useEffect, useState } from "react";

// icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// context
import { useBreakpoint } from "../../contexts/BreakpointContext";

// components
import { ProductCard } from "./ProductCard";

// types
import { ProductProps } from "../../types/ProductTypes";

export function Trends() {
  const { isMobile } = useBreakpoint();

  const [trend, setTrend] = useState("New");
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      const allProducts: ProductProps[] = response.data;
      const newProducts: ProductProps[] = allProducts.filter(
        (product: ProductProps) => product.type === trend
      );

      isMobile ? setProducts(newProducts) : setProducts(allProducts);
    });
  }, [trend]);

  function handleTrendClick() {
    trend === "New" ? setTrend("Hot") : setTrend("New");
  }

  if (isMobile) {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center p-1">
          <button onClick={() => handleTrendClick()} className="sm:hidden">
            <BiChevronLeft />
          </button>
          <h2 className="sm:font-bold sm:text-xl uppercase">{trend}</h2>
          <button onClick={() => handleTrendClick()} className="sm:hidden">
            <BiChevronRight />
          </button>
        </div>
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  } else {
    const newProducts = products.filter((product) => product.type === "New");
    const hotProducts = products.filter((product) => product.type === "Hot");

    return (
      <div className="flex justify-center flex-col max-w-md border-e gap-4">
        <div className="flex flex-col pe-5">
          <h2 className="sm:font-bold sm:text-xl uppercase">New</h2>
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col pe-5 mt-3">
          <h2 className="sm:font-bold sm:text-xl uppercase">Hot</h2>
          {hotProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}
