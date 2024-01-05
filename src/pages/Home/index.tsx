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
      <div className="flex flex-col lg:flex-row lg:gap-4 w-full max-w-[1300px] px-6 items-start">
        <div className="flex justify-center w-full lg:max-w-[370px]">
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
