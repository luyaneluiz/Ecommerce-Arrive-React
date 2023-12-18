// logo
import Logo from '../../assets/logo.png'

// icons
import { BiSearch } from "react-icons/bi";

// components 
import { NavigationButtons } from './Desktop/NavigationButtons';

// types
import { BreakpointProps } from '../BreakpointTypes';

export function Header( { width, breakpoint }: BreakpointProps ) {
    return (
      <header className="flex justify-between items-center bg-white py-2 px-4 border-b-slate-100 border-b md:py-4 md:px-6">
        <img src={Logo} alt="Logo arrive" className="w-20 md:w-24" />
        
        <div className="flex items-center relative border border-slate-100 rounded-md px-3 w-2/4 max-w-sm h-10 md:h-11">
          <input type="text" placeholder="Search product..." className="bg-transparent outline-none w-full pe-6 text-sm"/>
          <BiSearch className="absolute right-3 cursor-pointer" size={20} />
        </div>

        {width > breakpoint && (
          <NavigationButtons />
        )}
      </header>
    );
  }
