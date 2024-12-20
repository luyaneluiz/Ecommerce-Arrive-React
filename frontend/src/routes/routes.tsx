import Auth from "@/pages/Auth/"
import { Layout } from "../components/Layout"
import { Trends } from "../components/Trends"
import { Bag } from "../pages/Bag"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Offers } from "../pages/Offers"
import { Product } from "../pages/Product"

export const Routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "/bag",
                element: <Bag />,
            },
            {
                path: "/new",
                element: <New />,
            },
            {
                path: "/trends",
                element: <Trends />,
            },
            {
                path: "/offers",
                element: <Offers />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
        ],
    },
]
