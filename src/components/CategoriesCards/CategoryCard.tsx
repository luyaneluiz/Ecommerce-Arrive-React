// types
import { CategoriesProps } from "../CategoriesTypes";

export function CategoryCard({ title, amount, cover }: CategoriesProps) {
  return (
    <div className="flex justify-center my-7 snap-center min-w-full">
      <div className="flex w-full p-4 rounded-2xl shadow-slate-200 shadow-md mx-4 sm:mx-0">
        <div className="flex justify-center items-center w-1/5 me-3 rounded-lg bg-slate-100">
          <img src={cover} />
        </div>
        <div className="w-4/5">
          <div className="flex justify-between">
            <h3>{title}</h3>
            <p>({amount})</p>
          </div>
          <a href="" className="text-pink font-medium text-sm">
            Show All
          </a>
        </div>
      </div>
    </div>
  );
}
