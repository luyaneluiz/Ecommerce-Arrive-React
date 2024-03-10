// types
import { ProductProps } from "../../../types/ProductTypes";

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="flex gap-4 w-full p-4 rounded-2xl mt-4 shadow-lg">
      <div className="flex justify-center h-20 w-20 overflow-hidden">
        <img
          src={product.cover}
          alt={product.title}
          className="h-20 transition-all duration-500 hover:scale-105 cursor-pointer"
        />
      </div>
      <div className="w-4/5">
        <h4 className="text-ellipsis overflow-hidden whitespace-nowrap">
          {product.title}
        </h4>
        <p>{product.category}</p>
        <div className="flex items-center">
          <h3 className="text-pink pe-2">${product.price.toFixed(2)}</h3>
          <del className="text-xs">${product.old_price.toFixed(2)}</del>
        </div>
      </div>
    </div>
  );
}
