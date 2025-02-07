import { Layout } from "../layout"
import { Profile } from "../pages/Profile"
import { AuthGuard } from "../components/Auth"
import { Favorites } from "../pages/Favorites"
import CreateProduct from "../pages/Admin/CreateProduct"
import Checkout from "../pages/Checkout"

export const AuthenticatedRoutes = [
    {
        path: "/",
        element: (
            <AuthGuard>
                <Layout />
            </AuthGuard>
        ),
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/create/product",
                element: <CreateProduct />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
    },
]
