import { useState } from "react"
// Mantine components
import { Menu } from "@mantine/core"
// Icons
import { BiMinus, BiPlus } from "react-icons/bi"
import CategoryList from "./CategoriesList"

interface CategoriesProps {
    mobile: boolean
}

const categories = [
    {
        title: "Women's",
        items: ["Formal", "Casual", "Sports", "Jacket", "Perfum"],
    },
    {
        title: "Men's",
        items: ["Formal", "Casual", "Sports", "Jacket", "Perfum"],
    },
    {
        title: "Accessories",
        items: ["Bags", "Belt", "Jewelry", "Cosmetics", "Cap"],
    },
    {
        title: "Beach",
        items: ["Bikini", "Sarong", "Speedo", "Hats", "Bags"],
    },
]

export function CategoriesBlock({ mobile }: CategoriesProps) {
    const [active, setActive] = useState(false)

    const handleActiveClick = () => setActive((prev) => !prev)

    if (mobile) {
        return (
            <div>
                <button
                    onClick={handleActiveClick}
                    className={`flex justify-between w-full items-center uppercase ${
                        active ? "text-pink" : "text-black"
                    }`}
                    aria-expanded={active}
                >
                    Categories
                    {active ? <BiMinus /> : <BiPlus />}
                </button>

                {active && (
                    <ul className="flex flex-col gap-3 p-4">
                        {categories.map(({ title }) => (
                            <li key={title}>{title}</li>
                        ))}
                    </ul>
                )}
            </div>
        )
    } else {
        return (
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                    <button className="cursor-pointer flex hover:text-pink uppercase">
                        Categories
                    </button>
                </Menu.Target>
                <Menu.Dropdown className="flex flex-wrap">
                    {categories.map(({ title, items }) => (
                        <CategoryList key={title} title={title} items={items} />
                    ))}
                </Menu.Dropdown>
            </Menu>
        )
    }
}
