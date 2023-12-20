import { Link } from "react-router-dom";

// icons
import { BiUser, BiHeart, BiShoppingBag } from "react-icons/bi";

// types
interface NavbarProps {
    mobile: boolean,
    closeDrawer?: () => void
}

export function NavigationButtons( { mobile, closeDrawer }: NavbarProps ) {
    const handleLinkClick = () => {
        closeDrawer?.();
    };

    return (
        <div className={`flex items-center ${mobile ? "absolute bottom-0 left-0 w-full justify-around py-4 border-t border-slate-300" : "w-24 justify-between" }`}>
            <Link to="/Profile" onClick={handleLinkClick}>
                <BiUser className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5" />
            </Link>

            <Link to="/Favorites" onClick={handleLinkClick}>
                <BiHeart size={20} className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5"/>
            </Link>

            <Link to="/Bag" onClick={handleLinkClick}>
                <BiShoppingBag size={20} className="text-black hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5"/>
            </Link>
        </div>
    )
}
