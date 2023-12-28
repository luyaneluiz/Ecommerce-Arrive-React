// types
import { ProductProps } from "../ProductTypes";

export function ProductCard({ product }: { product: ProductProps }) {
  const { title, category, price, old_price, cover } = product;

  return (
    <div className="flex gap-4 w-full p-4 rounded-2xl my-4 shadow-lg">
      <div className="flex justify-center h-20 w-2/5 overflow-hidden">
        <img src={cover} alt={title} className="h-20" />
      </div>
      <div className="w-3/5">
        <h4 className="text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h4>
        <p>{category}</p>
        <div className="flex items-center">
          <h3 className="text-pink pe-2">${price.toFixed(2)}</h3>
          <del className="text-xs">${old_price.toFixed(2)}</del>
        </div>
      </div>
    </div>
  );
}
