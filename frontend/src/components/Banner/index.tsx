import { Carousel } from "@mantine/carousel"
import { banners } from "../../assets/banner/banners"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import isMobile from "@/utils/isMobile"

export function Banner() {
    const mobile = isMobile()
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
                            src={mobile ? banner.srcMobile : banner.srcDesktop}
                            width="100%"
                            alt={banner.alt}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}
