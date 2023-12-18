import { createBrowserRouter } from "react-router-dom";

// layout
import { Layout } from "./components/Layout";

// pages
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Favorites } from "./pages/Favorites";
import { Bag } from "./pages/Bag";
import { News } from "./pages/News";
import { Trends } from "./pages/Trends";
import { Tops } from "./pages/Tops";
import { Offers } from "./pages/Offers";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/bag",
        element: <Bag />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/trends",
        element: <Trends />
      },
      {
        path: "/tops",
        element: <Tops />
      },
      {
        path: "/offers",
        element: <Offers />
      },
    ]
  }
])

export {router}