// types
import { ProductProps } from "../ProductTypes";

export function Badge(product: ProductProps) {
  let bgColor;

  if (product.type === "New") {
    bgColor = "bg-yellow-600";
  } else if (product.type === "Offer") {
    bgColor = "bg-green-500";
  } else if (product.type === "Hot") {
    bgColor = "bg-red-500";
  } else {
    bgColor = "bg-blue-200";
  }

  return (
    <span
      className={`px-3 text-xs uppercase rounded-md font-semibold ${bgColor} text-white flex items-center justify-center`}
    >
      {product.type}
    </span>
  );
}
