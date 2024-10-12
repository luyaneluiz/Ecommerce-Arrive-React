import React from "react"
import ReactDOM from "react-dom/client"
import { router } from "./App.tsx"
import { RouterProvider } from "react-router-dom"
import "./index.css"

import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"

import { BreakpointProvider } from "./contexts/BreakpointContext"

const theme = createTheme({
    /** Put your mantine theme override here */
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <BreakpointProvider>
                <RouterProvider router={router} />
            </BreakpointProvider>
        </MantineProvider>
    </React.StrictMode>,
)
