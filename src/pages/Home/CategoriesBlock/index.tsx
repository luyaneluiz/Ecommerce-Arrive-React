import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { CategoryCard } from "../CategoryCard"
import { CategoriesProps } from "../../../types/CategoriesTypes"

export function CategoriesCards() {
    const [categories, setCategories] = useState<CategoriesProps[]>([])

    useEffect(() => {
        async function getCategories() {
            const response = await api.get("/categories")
            setCategories(response.data)
        }

        getCategories()
    }, [])

    return (
        <section className="flex justify-center my-5 w-full">
            <div className="flex sm:grid sm:grid-cols-3 gap-3 w-full max-w-[1000px] px-4 overflow-y-hidden sm:overflow-visible snap-x snap-mandatory overscroll-contain">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex justify-center my-7 snap-center min-w-full"
                    >
                        <CategoryCard
                            id={category.id}
                            title={category.title}
                            amount={category.amount}
                            cover={category.cover}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
