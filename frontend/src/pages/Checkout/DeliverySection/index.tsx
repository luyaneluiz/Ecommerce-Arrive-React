import { Paper, Flex, Avatar, Divider, Text } from "@mantine/core"
import RadioCardGroup from "@/components/RadioCardGroup"
import { CheckoutFormData } from "@/types/Checkout"
import { useFormContext } from "react-hook-form"

export default function DeliverySection() {
    const { setValue, watch } = useFormContext<CheckoutFormData>()

    const deliveryData = [
        {
            name: "Standard",
            value: "standard",
            description: "Transit time: 4-6 business days.",
            price: 8,
        },
        {
            name: "Express",
            value: "express",
            description: "Transit time: 2-3 business days.",
            price: 15,
        },
    ]

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
                selected={watch("shippingMethod")}
                setSelected={(value) =>
                    setValue("shippingMethod", value as "standard" | "express")
                }
            />
        </Paper>
    )
}
