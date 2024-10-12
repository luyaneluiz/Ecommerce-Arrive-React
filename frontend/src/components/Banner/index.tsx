import React from "react"
import { useBreakpoint } from "../../contexts/BreakpointContext"
import ImageMobile from "../../assets/banner/Banner630x429.png"
import ImageDesktop from "../../assets/banner/Banner1300x429.png"

export function Banner() {
    const { isMobile } = useBreakpoint()

    return (
        <div>
            <img src={isMobile ? ImageMobile : ImageDesktop} alt="Banner" />
        </div>
    )
}
