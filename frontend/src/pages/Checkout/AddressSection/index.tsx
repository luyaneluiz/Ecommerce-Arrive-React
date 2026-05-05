import { Paper, Flex, Avatar, Button, Divider, Box, Text } from "@mantine/core"
import { BiSave, BiEdit } from "react-icons/bi"
import { useEffect, useState } from "react"
import AddressRadioCardGroup from "@/components/AddressCard"
import { useAddress } from "@/hooks/useAddress"
import { useFormContext } from "react-hook-form"
import { CheckoutFormData } from "@/types/Checkout"

export default function AddressSection() {
    const [isEditing, setIsEditing] = useState(false)
    const { addresses } = useAddress()
    const { setValue, watch } = useFormContext<CheckoutFormData>()
    const address = watch("address")

    const onClickSave = async () => {
        setIsEditing(false)
    }

    useEffect(() => {
        if (addresses.length > 0) {
            const defaultAddress =
                addresses.find((addr) => addr.isDefault) || addresses[0]
            setValue("address", defaultAddress)
        }
    }, [addresses])

    return (
        <Paper p={20} withBorder>
            <Flex justify="space-between">
                <Flex gap={10} align="center">
                    <Avatar size={32} radius="xl" name="1" />

                    <Text fs="lg" fw={600}>
                        ADDRESS
                    </Text>
                </Flex>

                <Flex>
                    {isEditing ? (
                        <Button
                            variant="outline"
                            color="pink"
                            onClick={onClickSave}
                        >
                            <BiSave size={16} />
                            <Text ml={4}>Save</Text>
                        </Button>
                    ) : (
                        <Button
                            variant="transparent"
                            color="pink"
                            onClick={() => setIsEditing(true)}
                        >
                            <BiEdit size={16} />
                            <Text ml={4}>Edit</Text>
                        </Button>
                    )}
                </Flex>
            </Flex>

            <Divider my={15} />

            {isEditing ? (
                <AddressRadioCardGroup
                    onAddressSelect={(address) => setValue("address", address)}
                />
            ) : (
                <Box>
                    <Text fw={600}>
                        {address?.first_name} {address?.last_name}
                    </Text>
                    <Text fz={14}>
                        {address?.number}, {address?.street} - {address?.state},{" "}
                        {address?.zipCode}
                    </Text>
                    <Text fz={14}>{address?.phone_number}</Text>
                </Box>
            )}
        </Paper>
    )
}
