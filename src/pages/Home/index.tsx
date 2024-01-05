// components
import { Banner } from "../../components/Banner";
import { CategoriesCards } from "./CategoriesBlock";
import { Trends } from "./Trends";
import { PromoCard } from "./PromoCard";
import { Products } from "./Products";

export function Home() {
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <CategoriesCards />
      <div className="flex flex-col sm:flex-row w-full max-w-[1300px] px-6 items-start">
        <div className="flex justify-center">
          <Trends />
        </div>
        <div className="w-full flex flex-col gap-4">
          <PromoCard />
          <Products />
        </div>
      </div>
    </main>
  );
}
