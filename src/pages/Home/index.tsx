// components
import { Banner } from "../../components/Banner";
import { CategoriesCards } from "./CategoriesBlock";
import { Trends } from "./Trends";
import { PromoCard } from "./PromoCard";
import { Products } from "./Products";

// context
import { useBreakpoint } from "../../contexts/BreakpointContext";

export function Home() {
  const { isMobile } = useBreakpoint();

  return (
    <main className="flex flex-col items-center">
      <Banner />
      <CategoriesCards />
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row gap-4"
        } w-full max-w-[1300px] px-6 items-start`}
      >
        <div
          className={`flex justify-center ${
            isMobile ? "w-full" : "max-w-[370px]"
          }`}
        >
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
