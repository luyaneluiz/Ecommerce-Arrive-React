import { useState, ChangeEvent } from 'react';

// icons
import { BiSearch } from "react-icons/bi";

// types
import { ProductProps } from "../../types/ProductTypes";
interface InputSearchProps {
    data: ProductProps[]; // A base de dados JSON
}  

export function InputSearch({ data }: InputSearchProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    // const [searchResults, setSearchResults] = useState<ProductProps[]>([]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        console.log(data)
    
        // const results = data.filter(item =>
        //   item.nome.toLowerCase().includes(term.toLowerCase())
        // );
        // setSearchResults(results);
      };

    return (
        <div className="flex items-center relative border border-slate-100 rounded-md px-3 w-3/5 max-w-sm h-10 md:h-11">
            <input type="text" placeholder="Search product..." value={searchTerm} onChange={handleSearchChange} className="bg-transparent outline-none w-full pe-6 text-sm"/>
            <BiSearch className="absolute right-3 cursor-pointer" size={20} />
        </div>
    )
}