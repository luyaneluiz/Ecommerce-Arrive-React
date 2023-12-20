import { useState } from "react";

// icons
import { BiMinus, BiPlus} from "react-icons/bi";

export function CategoriesList( {mobile}: {mobile: boolean} ) {
    const [ active, setActive ] = useState(false)

    function handleActiveClick() {
        setActive((prevStatus) => !prevStatus)
    }

    if(mobile) {
        return (
            <div>
                <a onClick={handleActiveClick} className={`flex justify-between ${active ? "text-pink" : "text-black"}`}> 
                    CATEGORIES

                    { active ? <BiPlus /> : <BiMinus /> }
                </a>

                { active && 
                    <ul className="flex flex-col gap-3 p-4">
                        <li>Women's</li>
                        <li>Men's</li>
                        <li>Accessories</li>
                        <li>Beach</li>
                    </ul>
                }
            </div>
        )
    } else {
        return (
            <div>
                <a className="navbar__link" 
                            // onClick={toggleExpandCategories}
                        >
                            CATEGORIES
                            
                            {/* <div
                                className={`categoriesButton ${
                                expandCategories === "true" ? "mobile" : ""
                                }`}
                            >
                                <BiPlus
                                    className={`buttonExpand ${
                                        expandCategories === false ? "active" : ""
                                    }`}
                                />
                                <BiMinus
                                    className={`buttonMinus ${
                                        expandCategories === true ? "active" : ""
                                    }`}
                                />
                            </div> */}
                </a>
    
                <div
                    // className={`categories__list ${
                    //     expandCategories === true ? "open" : ""
                    // }`}
                >
                    <div className="list__content">
                        <ul>
                            <li className="categories__title">Women's</li>
                            <li>Formal</li>
                            <li>Casual</li>
                            <li>Sports</li>
                            <li>Jacket</li>
                            <li>Perfum</li>
                        </ul>
    
                        <ul>
                            <li className="categories__title">Men's</li>
                            <li>Formal</li>
                            <li>Casual</li>
                            <li>Sports</li>
                            <li>Jacket</li>
                            <li>Perfum</li>
                        </ul>
    
                        <ul>
                            <li className="categories__title">Accessories</li>
                            <li>Bags</li>
                            <li>Belt</li>
                            <li>Jewelry</li>
                            <li>Cosmetics</li>
                            <li>Cap</li>
                        </ul>
    
                        <ul>
                            <li className="categories__title">Beach</li>
                            <li>Bikini</li>
                            <li>Sarong</li>
                            <li>Speedo</li>
                            <li>Hats</li>
                            <li>Bags</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}