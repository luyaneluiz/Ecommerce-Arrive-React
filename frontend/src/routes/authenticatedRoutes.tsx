import { Layout } from "../layout"
import { Profile } from "../pages/Profile"
import { AuthGuard } from "../components/Auth"
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
                path: "/checkout",
                element: <Checkout />,
            },
        ],
    },
]
