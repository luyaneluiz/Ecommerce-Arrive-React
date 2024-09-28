import { createBrowserRouter } from "react-router-dom";

// layout
import { Layout } from "./components/Layout";

// pages
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Favorites } from "./pages/Favorites";
import { Bag } from "./pages/Bag";
import { New } from "./pages/New";
import { Trends } from "./pages/Trends";
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
        path: "/new",
        element: <New />
      },
      {
        path: "/trends",
        element: <Trends />
      },
      {
        path: "/offers",
        element: <Offers />
      },
    ]
  }
])

export {router}