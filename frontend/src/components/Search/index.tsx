import { useState } from "react"

// api
// import { api } from "../../services/api"

// icons
import { BiSearch } from "react-icons/bi"

// types
import { ProductProps } from "../../types/Product"
interface InputSearchProps {
    data: ProductProps[] // A base de dados JSON
}

export default function InputSearch() {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [searchResults, setSearchResults] = useState<ProductProps[]>([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await api.get("/products")
    //             setSearchResults(response.data)
    //         } catch (error) {
    //             console.error("Error fetching data:", error)
    //         }
    //     }

    //     fetchData()
    // }, [])

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value)
        filterResults(event.target.value)
    }

    const filterResults = (query: any) => {
        const filteredResults = searchResults.filter(
            (product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase()),
        )
        setSearchResults(filteredResults)
    }

    return (
        <div className="flex items-center relative border border-slate-100 rounded-md px-3 w-3/5 max-w-sm h-10 md:h-11">
            <input
                type="text"
                placeholder="Search product..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-transparent outline-none w-full pe-6 text-sm"
            />
            <BiSearch className="absolute right-3 cursor-pointer" size={20} />
        </div>
    )
}
