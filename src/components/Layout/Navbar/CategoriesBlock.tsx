import { useState } from "react";

import { Menu } from "@mantine/core";

// icons
import { BiMinus, BiPlus } from "react-icons/bi";

// types
interface CategoriesProps {
  mobile: boolean;
  showCategories: boolean;
}

export function CategoriesBlock({ mobile, showCategories }: CategoriesProps) {
  const [active, setActive] = useState(false);

  function handleActiveClick() {
    setActive((prevStatus) => !prevStatus);
  }

  if (mobile) {
    return (
      <div>
        <a
          onClick={handleActiveClick}
          className={`flex justify-between ${
            active ? "text-pink" : "text-black"
          }`}
        >
          CATEGORIES
          {active ? <BiPlus /> : <BiMinus />}
        </a>

        {active && (
          <ul className="flex flex-col gap-3 p-4">
            <li>Women's</li>
            <li>Men's</li>
            <li>Accessories</li>
            <li>Beach</li>
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
        <a className="cursor-pointer flex hover:text-pink">CATEGORIES</a>

        <div
          className={`${
            showCategories ? "flex" : "hidden"
          } justify-around w-3/4 max-w-[650px] z-10 absolute m-auto left-0 right-0 bg-white shadow-sm shadow-slate-300 rounded-xl p-6`}
        >
          <ul className="flex flex-col gap-2 w-1/4 pl-4">
            <li className="font-bold pb-1">Women's</li>
            <li className="cursor-pointer flex hover:text-pink">Formal</li>
            <li className="cursor-pointer flex hover:text-pink">Casual</li>
            <li className="cursor-pointer flex hover:text-pink">Sports</li>
            <li className="cursor-pointer flex hover:text-pink">Jacket</li>
            <li className="cursor-pointer flex hover:text-pink">Perfum</li>
          </ul>

          <ul className="flex flex-col gap-2 w-1/4 pl-4">
            <li className="font-bold pb-1">Men's</li>
            <li className="cursor-pointer flex hover:text-pink">Formal</li>
            <li className="cursor-pointer flex hover:text-pink">Casual</li>
            <li className="cursor-pointer flex hover:text-pink">Sports</li>
            <li className="cursor-pointer flex hover:text-pink">Jacket</li>
            <li className="cursor-pointer flex hover:text-pink">Perfum</li>
          </ul>

          <ul className="flex flex-col gap-2 w-1/4 pl-4">
            <li className="font-bold pb-1">Accessories</li>
            <li className="cursor-pointer flex hover:text-pink">Bags</li>
            <li className="cursor-pointer flex hover:text-pink">Belt</li>
            <li className="cursor-pointer flex hover:text-pink">Jewelry</li>
            <li className="cursor-pointer flex hover:text-pink">Cosmetics</li>
            <li className="cursor-pointer flex hover:text-pink">Cap</li>
          </ul>

          <ul className="flex flex-col gap-2 w-1/4 pl-4">
            <li className="font-bold pb-1">Beach</li>
            <li className="cursor-pointer flex hover:text-pink">Bikini</li>
            <li className="cursor-pointer flex hover:text-pink">Sarong</li>
            <li className="cursor-pointer flex hover:text-pink">Speedo</li>
            <li className="cursor-pointer flex hover:text-pink">Hats</li>
            <li className="cursor-pointer flex hover:text-pink">Bags</li>
          </ul>
        </div>
      </Menu>
    );
  }
}
