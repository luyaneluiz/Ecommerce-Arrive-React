// icons
import { BiSearch } from "react-icons/bi";

export function InputSearch() {
    return (
        <div className="flex items-center relative border border-slate-100 rounded-md px-3 w-3/5 max-w-sm h-10 md:h-11">
            <input type="text" placeholder="Search product..." className="bg-transparent outline-none w-full pe-6 text-sm"/>
            <BiSearch className="absolute right-3 cursor-pointer" size={20} />
        </div>
    )
}