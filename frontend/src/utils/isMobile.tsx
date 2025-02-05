import { useEffect, useState } from "react"

export default function isMobile() {
    const breakpoint = 768
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResizeWindow)

        return () => {
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    return width < breakpoint
}
