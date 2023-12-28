// components
import { Banner } from "../../components/Banner";
import { CategoriesCards } from "../../components/CategoriesCards";
import { Trends } from "../../components/Trends";

export function Home() {
  return (
    <div>
      <Banner />
      <CategoriesCards />
      <section className="flex justify-center">
        <Trends />
      </section>
    </div>
  );
}
