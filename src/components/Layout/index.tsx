import { useEffect, useState } from "react";

import { Header } from "../Header";
import { NavbarItems } from "../Navbar/NavbarItems";
import { Outlet } from "react-router-dom";

export function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return(
    <>
      <Header width={width} breakpoint={breakpoint} />
      { width > breakpoint && <NavbarItems mobile={false} /> }
      <Outlet />
    </>
  )
}