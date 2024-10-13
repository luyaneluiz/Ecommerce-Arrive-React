import React from "react"
import { Carousel } from "@mantine/carousel"
import { useBreakpoint } from "../../contexts/BreakpointContext"
import { banners } from "../../assets/banner/banners"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

export function Banner() {
    const { isMobile } = useBreakpoint()
    const autoplay = useRef(Autoplay({ delay: 2000 }))

    return (
        <div className="w-full">
            <Carousel
                withIndicators
                loop
                slideSize="100%"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {banners.map((banner, index) => (
                    <Carousel.Slide key={index}>
                        <img
                            src={
                                isMobile ? banner.srcMobile : banner.srcDesktop
                            }
                            width="100%"
                            alt={banner.alt}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}
