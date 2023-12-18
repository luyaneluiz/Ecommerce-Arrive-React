import { Link } from "react-router-dom";

// icons
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi";

export function NavigationButtons() {
    return (
        <div className="flex items-center justify-between w-24">
            <Link to="/Profile">
                <BiUser size={20} className="text-black hover:text-pink" />
            </Link>

            <Link to="/Favorites">
                <BiHeart size={20} className="text-black hover:text-pink"/>
            </Link>

            <Link to="/Bag">
                <BiShoppingBag size={20} className="text-black hover:text-pink"/>
            </Link>
        </div>
    )
}
