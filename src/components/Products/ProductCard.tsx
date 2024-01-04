// types
import { ProductProps } from "../ProductTypes";

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="flex flex-col items-center w-full border border-gray-300 rounded-xl bg-white p-6">
      <div></div>
      <img
        src={product.cover}
        alt={product.title}
        className="transition-all duration-500 hover:scale-105 h-72 w-64"
      />
      <div className="flex flex-col items-center text-center w-5/6 gap-2">
        <p className="text-base">{product.title}</p>
        <div className="flex items-center">
          <h3 className="text-pink pe-2 text-lg font-extrabold">
            ${product.price.toFixed(2)}
          </h3>
          <del className="text-xs">${product.old_price.toFixed(2)}</del>
        </div>
        <button className="bg-pink font-bold text-white cursor-pointer rounded-lg py-2 transition-all hover:bg-lightPink w-full sm:w-32 sm:text-sm sm:my-2">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
