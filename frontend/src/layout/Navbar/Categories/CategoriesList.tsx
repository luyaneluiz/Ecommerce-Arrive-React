interface CategoryListProps {
    title: string
    items: string[]
}

export default function CategoryList({ title, items }: CategoryListProps) {
    return (
        <ul className="flex flex-col gap-2 min-w-[150px] px-8 py-4">
            <li className="font-bold pb-1">{title}</li>

            {items.map((item) => (
                <li key={item} className="cursor-pointer flex hover:text-pink">
                    {item}
                </li>
            ))}
        </ul>
    )
}
