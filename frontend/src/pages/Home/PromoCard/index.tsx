import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Button, Card, Flex, Image, Progress, Stack, Text } from "@mantine/core"
import { Title } from "@/components/Titlte"
import { ProductProps } from "@/types/ProductTypes"
import { CounterBlock } from "../CounterBlock"

interface TimerProps {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => (
    <div className="flex gap-2 mt-2">
        <CounterBlock value={days} title="days" />
        <CounterBlock value={hours} title="hours" />
        <CounterBlock value={minutes} title="min" />
        <CounterBlock value={seconds} title="sec" />
    </div>
)

export function PromoCard() {
    const [product, setProduct] = useState<ProductProps>()
    const [timerValues, setTimerValues] = useState({
        days: 10,
        hours: 4,
        minutes: 15,
        seconds: 60,
    })

    const time = 900

    useEffect(() => {
        api.get("/products").then((response) => {
            const promoProduct: ProductProps = response.data.find(
                (product: ProductProps) => product.type === "Promo",
            )

            setProduct(promoProduct)
        })

        const counter = setInterval(() => {
            setTimerValues((prevValues) => {
                let newSeconds = prevValues.seconds - 1
                let newMinutes = prevValues.minutes
                let newHours = prevValues.hours
                let newDays = prevValues.days

                if (newSeconds === 0) {
                    newSeconds = 59
                    newMinutes--

                    if (newMinutes === 0) {
                        newMinutes = 59
                        newHours--

                        if (newHours === 0) {
                            newHours = 23
                            newDays--
                        }
                    }
                }

                return {
                    days: newDays,
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds,
                }
            })
        }, time)

        return () => clearInterval(counter)
    }, [])

    if (product) {
        return (
            <Stack>
                <Title text="Daily deal" />

                <Card
                    component="a"
                    href="#"
                    className="lg:!flex-row items-center w-full gap-4"
                    radius={8}
                    padding="xl"
                    withBorder
                >
                    <Image
                        src={product.cover}
                        alt={product.title}
                        className="transition-all duration-500 hover:scale-105 w-52 h-52 max-w-sm md:w-64 md:h-64"
                    />

                    <Stack>
                        <Text size="xl" fw={700} lineClamp={2}>
                            {product.title}
                        </Text>

                        <Text size="xs" lineClamp={5}>
                            {product.description}
                        </Text>

                        <Flex align="center" gap={4}>
                            <Text size="xl" c="pink" fw={700}>
                                ${product.price.toFixed(2)}
                            </Text>

                            {product.old_price && (
                                <Text size="xs" c="gray" td="line-through">
                                    ${product.old_price.toFixed(2)}
                                </Text>
                            )}
                        </Flex>

                        <Button color="pink">SHOP NOW</Button>

                        <Stack gap={4}>
                            <Flex justify="space-between">
                                <Text size="xs">
                                    SOLD: <b>30</b>
                                </Text>

                                <Text size="xs">
                                    AVAILABLE: <b>20</b>
                                </Text>
                            </Flex>

                            <Progress
                                value={60}
                                size="lg"
                                radius="lg"
                                color="grape"
                            />
                        </Stack>

                        <Stack gap={2}>
                            <Text fw={700}>OFFER ENDS IN</Text>
                            <Timer {...timerValues} />
                        </Stack>
                    </Stack>
                </Card>
            </Stack>
        )
    }
}
