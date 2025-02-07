import Auth from "@/pages/Auth/"
import { Layout } from "../layout"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Trends } from "../pages/Trends"
import { Offers } from "../pages/Offers"
import { Product } from "../pages/Product"
import PageError from "@/components/Error/PageError"
import { NotFound } from "@/pages/NotFound"

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
                path: "/cart",
                element: <Cart />,
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
            {
                path: "/not-authorized",
                element: <PageError />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]
