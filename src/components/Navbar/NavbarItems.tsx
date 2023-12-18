import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

//import icons
import { BiX, BiPlus, BiMinus } from "react-icons/bi";

// types
interface MobileMenuProps {
    mobile?: string,
    menu?: string,
    onChangeState?: (newState: string) => void,
}

// export function NavbarItems() {
export function NavbarItems( { mobile, menu, onChangeState }: MobileMenuProps ) {
    const [stateMenu, setStateMenu] = useState(false);
    // const [expandCategories, setExpandCategories] = useState(false);
    // const location = useLocation();
  
    const handleMenuClick = (status: string) => {
        console.log(status)
    //   setStateMenu(status);
    //   onChangeState(status);
    };
  
    // const toggleExpandCategories = () => {
    //   if (mobile === "true") {
    //     setExpandCategories((value) => !value);
    //   }
    //   return;
    // };
    
    return (
        <div className={`flex ${mobile === "true" ? "flex-col gap-2 bg-white" : "flex-row" }` }>
            <div className={ mobile === "true" ? "flex" : "hidden" }>
                <BiX size={24} onClick={() => handleMenuClick("Closed")} />
            </div>

            <ul>
                <li className="cursor-pointer flex my-2 mx-4 hover:text-pink ">
                    <Link to="/">HOME</Link>
                </li>

                {/* <li></li> */}

                <li className="cursor-pointer flex my-2 mx-4 hover:text-pink">
                    <Link to="/news">NEWS</Link>
                </li>

                <li className="cursor-pointer flex my-2 mx-4 hover:text-pink">
                    <Link to="/trends">TRENDS</Link>
                </li>

                <li className="cursor-pointer flex my-2 mx-4 hover:text-pink">
                    <Link to="/tops">TOPS</Link>
                </li>

                <li className="cursor-pointer flex my-2 mx-4 hover:text-pink">
                    <Link to="/offers">OFFERS</Link>
                </li>
            </ul>
        </div>
        // <ul className={`navbar ${mobile === "true" ? "mobile" : ""} ${menu === "open" ? "open" : ""}`} >
        //     <div className={`headerMenu ${mobile === "true" ? "mobile" : ""}`}>
        //         <BiX size={24} onClick={() => handleMenuClick("Closed")} />
        //     </div>
        //     <li
        //         className={`navbar__link ${location.pathname === "/" ? "active" : ""}`}
        //     >
        //         <NavLink exact to="/">
        //         HOME
        //         </NavLink>
        //     </li>

        //     <li className="categories">
        //         <a className="navbar__link" onClick={toggleExpandCategories}>
        //         CATEGORIES
        //         <div
        //             className={`categoriesButton ${
        //             expandCategories === "true" ? "mobile" : ""
        //             }`}
        //         >
        //             <BiPlus
        //             className={`buttonExpand ${
        //                 expandCategories === false ? "active" : ""
        //             }`}
        //             />
        //             <BiMinus
        //             className={`buttonMinus ${
        //                 expandCategories === true ? "active" : ""
        //             }`}
        //             />
        //         </div>
        //         </a>

        //         <div
        //         className={`categories__list ${
        //             expandCategories === true ? "open" : ""
        //         }`}
        //         >
        //         <div className="list__content">
        //             <ul>
        //             <li className="categories__title">Women's</li>
        //             <li>Formal</li>
        //             <li>Casual</li>
        //             <li>Sports</li>
        //             <li>Jacket</li>
        //             <li>Perfum</li>
        //             </ul>

        //             <ul>
        //             <li className="categories__title">Men's</li>
        //             <li>Formal</li>
        //             <li>Casual</li>
        //             <li>Sports</li>
        //             <li>Jacket</li>
        //             <li>Perfum</li>
        //             </ul>

        //             <ul>
        //             <li className="categories__title">Accessories</li>
        //             <li>Bags</li>
        //             <li>Belt</li>
        //             <li>Jewelry</li>
        //             <li>Cosmetics</li>
        //             <li>Cap</li>
        //             </ul>

        //             <ul>
        //             <li className="categories__title">Beach</li>
        //             <li>Bikini</li>
        //             <li>Sarong</li>
        //             <li>Speedo</li>
        //             <li>Hats</li>
        //             <li>Bags</li>
        //             </ul>
        //         </div>
        //         </div>
        //     </li>

        //     <li
        //         className={`navbar__link ${
        //         location.pathname === "/news" ? "active" : ""
        //         }`}
        //     >
        //         <NavLink to="/news">NEWS</NavLink>
        //     </li>

        //     <li
        //         className={`navbar__link ${
        //         location.pathname === "/trends" ? "active" : ""
        //         }`}
        //     >
        //         <NavLink to="/trends">TRENDS</NavLink>
        //     </li>

        //     <li
        //         className={`navbar__link ${
        //         location.pathname === "/tops" ? "active" : ""
        //         }`}
        //     >
        //         <NavLink to="/tops">TOPS</NavLink>
        //     </li>

        //     <li
        //         className={`navbar__link ${
        //         location.pathname === "/offers" ? "active" : ""
        //         }`}
        //     >
        //         <NavLink to="/offers">OFFERS</NavLink>
        //     </li>
        // </ul>
    )
}