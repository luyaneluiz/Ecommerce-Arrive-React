import { useState } from "react";

// components 
import { NavbarItems } from "./NavbarItems";

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
    const [stateMenu, setStateMenu] = useState("closed");

    const changeState = (newState: string) => {
        setStateMenu(newState);
    };

    function handleMenuClick(status: string) {
        setStateMenu(status);
    }

    // Desktop
    if (width > breakpoint) {
        return <NavbarItems />;
    }

    // Mobile
    return (
        <section>
            <div className="flex justify-center absolute bottom-0 w-full z-10">
                <nav className="flex items-start justify-start gap-2">
                    <BiMenu size={24} onClick={() => handleMenuClick("open")} />
                    <BiShoppingBag size={24} />
                    <BiHomeAlt size={24} />
                    <BiHeart size={24} />
                    <BiUser size={24} />
                </nav>
            </div>

            <NavbarItems mobile="true" menu={stateMenu} onChangeState={changeState} />
        </section>
    )
}