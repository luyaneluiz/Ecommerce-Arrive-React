import { Routes } from "./routes/routes"
import { createBrowserRouter } from "react-router-dom"
import { AuthRoutes } from "./routes/auth"

const router = createBrowserRouter([...AuthRoutes, ...Routes])

export { router }
