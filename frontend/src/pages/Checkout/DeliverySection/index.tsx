import { useEffect, useState } from "react"
import { Paper, Flex, Avatar, Divider, Text } from "@mantine/core"
import RadioCardGroup from "@/components/RadioCardGroup"

interface DeliverySectionProps {
    setShipping: (value: number) => void
}

export default function DeliverySection({ setShipping }: DeliverySectionProps) {
    const [deliveryValue, setDeliveryValue] = useState<string>("Standard")

    const deliveryData = [
        {
            name: "Standard",
            description: "Transit time: 4-6 business days.",
            value: 8,
        },
        {
            name: "Express",
            description: "Transit time: 2-3 business days.",
            value: 15,
        },
    ]

    useEffect(() => {
        setShipping(
            deliveryData.find((item) => item.name === deliveryValue)?.value ||
                8,
        )
    }, [deliveryValue])

    return (
        <Paper p={20} withBorder>
            <Flex gap={10} align="center">
                <Avatar size={32} radius="xl" name="2" />

                <Text fs="lg" fw={600}>
                    DELIVERY OPTIONS
                </Text>
            </Flex>

            <Divider my={15} />

            <RadioCardGroup
                options={deliveryData}
                selected={deliveryValue}
                setSelected={setDeliveryValue}
            />
        </Paper>
    )
}
