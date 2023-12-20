import { useState } from "react";

// components 
// import { NavbarItems } from "./NavbarItems";

// icons
import {
    BiMenu,
    BiShoppingBag,
    BiHomeAlt,
    BiHeart,
    BiUser,
  } from "react-icons/bi";

// types
import { BreakpointProps } from "../BreakpointTypes";

export function Navbar( { width, breakpoint }: BreakpointProps ) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const changeState = (newState: boolean) => {
        setMenuOpen(newState);
    };

    function handleMenuClick(status: boolean) {
        setMenuOpen(status);
    }

    // Desktop
    if (width > breakpoint) {
        // return <NavbarItems mobile={false} />;
    }

    // Mobile
    return (
        <section>
            <div className="flex justify-center absolute bottom-0 w-full z-10">
                <nav className="flex items-start justify-around w-4/5 p-4 rounded-t-2xl bg-white shadow-slate-300 shadow-lg drop-shadow-lg">
                    <BiMenu size={24} onClick={() => handleMenuClick(true)} />
                    <BiShoppingBag size={24} />
                    <BiHomeAlt size={24} />
                    <BiHeart size={24} />
                    <BiUser size={24} />
                </nav>
            </div>

            {/* <NavbarItems mobile={true} menu={menuOpen} onChangeState={changeState} /> */}
        </section>
    )
}