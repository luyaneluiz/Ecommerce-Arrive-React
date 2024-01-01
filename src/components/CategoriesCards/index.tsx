import { useEffect, useState } from "react";

import { api } from "../../services/api";

// components
import { CategoryCard } from "./CategoryCard";

// types
import { CategoriesProps } from "../CategoriesTypes";

export function CategoriesCards() {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    getCategories();
  }, []);

  return (
    <section className="flex justify-center my-5 w-full">
      <div className="flex sm:grid sm:grid-cols-3 gap-3 w-full max-w-[1000px] overflow-y-hidden sm:overflow-visible snap-x snap-mandatory overscroll-contain">
        {categories.map((categories) => (
          <CategoryCard
            id={categories.id}
            title={categories.title}
            amount={categories.amount}
            cover={categories.cover}
          />
        ))}
      </div>
    </section>
  );
}
