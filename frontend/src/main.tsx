import React from "react"
import ReactDOM from "react-dom/client"
import { router } from "./App.tsx"
import { RouterProvider } from "react-router-dom"
import "./index.css"

import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "@mantine/notifications/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"

const theme = createTheme({
    /** Put your mantine theme override here */
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <RouterProvider router={router} />
            <Notifications />
        </MantineProvider>
    </React.StrictMode>,
)
