import { AuthenticatedRoutes } from "./routes/authenticatedRoutes"
import { Routes } from "./routes/routes"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([...Routes, ...AuthenticatedRoutes])

export { router }
