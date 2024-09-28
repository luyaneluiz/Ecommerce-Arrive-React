import { useState } from "react";
import { Link } from "react-router-dom";

// components
import { CategoriesBlock } from "./CategoriesBlock";

// types
interface NavbarProps {
  mobile: boolean;
  closeDrawer?: () => void;
}

export function NavbarItems({ mobile, closeDrawer }: NavbarProps) {
  const [showCategories, setShowCategories] = useState(false);

  const handleLinkClick = () => {
    closeDrawer?.();
  };

  return (
    <div
      className={`flex ${
        mobile ? "flex-col" : "flex-row w-full justify-center py-6"
      }`}
    >
      <ul className={`flex ${mobile ? "flex-col gap-4" : "flex-row gap-5"}`}>
        <li className="cursor-pointer flex hover:text-pink">
          <Link to="/" onClick={handleLinkClick}>
            HOME
          </Link>
        </li>

        <li
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <CategoriesBlock mobile={mobile} showCategories={showCategories} />
        </li>

        <li className="cursor-pointer flex hover:text-pink">
          <Link to="/new" onClick={handleLinkClick}>
            NEW
          </Link>
        </li>

        <li className="cursor-pointer flex hover:text-pink">
          <Link to="/trends" onClick={handleLinkClick}>
            TRENDS
          </Link>
        </li>

        <li className="cursor-pointer flex hover:text-pink">
          <Link to="/offers" onClick={handleLinkClick}>
            OFFERS
          </Link>
        </li>
      </ul>
    </div>
  );
}
