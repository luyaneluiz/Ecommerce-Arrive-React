// components
import { Banner } from "../../components/Banner";
import { CategoriesCards } from "../../components/CategoriesCards";
import { Trends } from "../../components/Trends";
import { PromoCard } from "../../components/PromoCard";

export function Home() {
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <CategoriesCards />
      <div className="flex flex-col sm:flex-row w-full max-w-[1300px] px-4">
        <div className="flex justify-center">
          <Trends />
        </div>
        <div className="w-full">
          <PromoCard />
        </div>
      </div>
    </main>
  );
}
