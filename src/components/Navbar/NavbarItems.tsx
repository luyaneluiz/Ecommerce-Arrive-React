import { Link } from "react-router-dom";

// components
import { CategoriesList } from "../CategoriesList";

// types
interface NavbarProps {
    mobile: boolean,
    closeDrawer?: () => void
}

export function NavbarItems( { mobile, closeDrawer }: NavbarProps ) {
    const handleLinkClick = () => {
        closeDrawer?.();
    };

    return (
        <div className={`flex ${mobile ? "flex-col" : "flex-row w-1/2"}`}>
            <ul className={`flex ${mobile ? "flex-col gap-4" : "flex-row"}`}>
                <li className="cursor-pointer flex hover:text-pink ">
                    <Link to="/" onClick={handleLinkClick}>HOME</Link>
                </li>

                <li>
                    <CategoriesList mobile={mobile} />
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link to="/news" onClick={handleLinkClick}>NEWS</Link>
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link to="/trends" onClick={handleLinkClick}>TRENDS</Link>
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link to="/tops" onClick={handleLinkClick}>TOPS</Link>
                </li>

                <li className="cursor-pointer flex hover:text-pink">
                    <Link to="/offers" onClick={handleLinkClick}>OFFERS</Link>
                </li>
            </ul>
        </div>
    )
}