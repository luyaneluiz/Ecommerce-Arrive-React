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
        <section className="flex justify-center">
          <Trends />
        </section>
        <section className="w-full">
          <PromoCard />
        </section>
      </div>
    </main>
  );
}
