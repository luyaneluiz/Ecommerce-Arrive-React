import { useEffect, useState } from "react"
import {
    Box,
    Button,
    Card,
    Flex,
    Image,
    Progress,
    Skeleton,
    Stack,
    Text,
} from "@mantine/core"
import { PageTitle } from "@/components/PageTitle"
import { CounterBlock } from "../CounterBlock"
import { useProducts } from "@/hooks/useProducts"
import { Link, useNavigate } from "react-router-dom"
import { useModalContext } from "@/contexts/ModalContext"
import { useAuth } from "@/contexts/AuthContext"

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
    const {
        filteredProducts: products,
        loading,
        fetchProductsByType,
    } = useProducts()
    const navigate = useNavigate()
    const { openModal } = useModalContext()
    const { user } = useAuth()

    const [timerValues, setTimerValues] = useState({
        days: 10,
        hours: 4,
        minutes: 15,
        seconds: 60,
    })

    const time = 900

    useEffect(() => {
        fetchProductsByType("Promo")

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

    const handleAddToCartClick = () => {
        const { _id: id, title, price, cover } = products[0]
        if (user) {
            openModal({ id, title, price, cover })
        } else {
            navigate("/auth")
        }
    }

    if (loading) <Skeleton radius="lg" height={400} />

    if (products.length === 0) return

    return (
        <Stack>
            <PageTitle text="Daily deal" />

            <Card
                className="lg:!flex-row items-center w-full gap-4"
                radius={8}
                padding="xl"
                withBorder
            >
                <Link to={`/product/${products[0]._id}`}>
                    <Box
                        w={{ base: "auto", md: 250, lg: 300 }}
                        h={{ base: 200, md: 250, lg: 300 }}
                        m="auto"
                    >
                        <Image
                            src={products[0].cover}
                            alt={products[0].title}
                            h="100%"
                            fit="contain"
                        />
                    </Box>
                </Link>

                <Stack>
                    <Text size="xl" fw={700} lineClamp={2}>
                        {products[0].title}
                    </Text>

                    <Text size="xs" lineClamp={5}>
                        {products[0].description}
                    </Text>

                    <Flex align="center" gap={4}>
                        <Text size="xl" c="pink" fw={700}>
                            ${products[0].price.toFixed(2)}
                        </Text>

                        {products[0].old_price && (
                            <Text size="xs" c="gray" td="line-through">
                                ${products[0].old_price.toFixed(2)}
                            </Text>
                        )}
                    </Flex>

                    <Button color="pink" onClick={handleAddToCartClick}>
                        SHOP NOW
                    </Button>

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
