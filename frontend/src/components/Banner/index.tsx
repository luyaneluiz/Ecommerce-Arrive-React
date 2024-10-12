import React from "react"
import { Carousel } from "@mantine/carousel"
import { useBreakpoint } from "../../contexts/BreakpointContext"
import { banners } from "../../assets/banner/banners"

export function Banner() {
    const { isMobile } = useBreakpoint()

    return (
        <div className="w-full">
            <Carousel withIndicators loop slideSize="100%">
                {banners.map((banner, index) => (
                    <Carousel.Slide key={index} className="w-full">
                        <img
                            src={
                                isMobile ? banner.srcMobile : banner.srcDesktop
                            }
                            alt={banner.alt}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}
