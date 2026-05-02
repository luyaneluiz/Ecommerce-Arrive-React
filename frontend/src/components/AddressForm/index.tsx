import { useAddress } from "@/hooks/useAddress"
import { Stack, Flex, TextInput, Button, Text } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useEffect } from "react"
import Address from "@/types/Address"

export default function AddressForm({
    addressData,
    onCancel,
    onSave,
}: {
    addressData?: Address
    onCancel?: () => void
    onSave?: () => void
}) {
    const { handleAddAddress, handleUpdateAddress } = useAddress()

    const form = useForm<Address>({
        initialValues: {
            _id: addressData?._id || "",
            user: addressData?.user || "",
            isDefault: addressData?.isDefault || false,
            first_name: addressData?.first_name || "",
            last_name: addressData?.last_name || "",
            street: addressData?.street || "",
            number: addressData?.number || "",
            state: addressData?.state || "",
            zipCode: addressData?.zipCode || "",
            phone_number: addressData?.phone_number || "",
        },
        validate: {
            first_name: (value) =>
                value.length < 2
                    ? "First name must be at least 2 characters"
                    : null,
            last_name: (value) =>
                value.length < 2
                    ? "Last name must be at least 2 characters"
                    : null,
            street: (value) =>
                value.length < 5
                    ? "Street address must be at least 5 characters"
                    : null,
            number: (value) => (value.length < 1 ? "Number is required" : null),
            state: (value) =>
                value.length < 2 ? "State must be at least 2 characters" : null,
            zipCode: (value) =>
                value.length < 5
                    ? "Zip code must be at least 5 characters"
                    : null,
            phone_number: (value) =>
                value.length < 10
                    ? "Phone number must be at least 10 characters"
                    : null,
        },
    })

    useEffect(() => {
        if (addressData) {
            form.setValues(addressData)
        }

        console.log("Address data updated:", addressData)
    }, [addressData])

    const handleSubmit = async (values: Address) => {
        if (addressData) {
            await handleUpdateAddress(addressData._id, values)
        } else {
            await handleAddAddress(values)
        }

        form.reset()
        onSave?.()
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Text fw={600}>{addressData ? "Edit Address" : "Add Address"}</Text>

            <Stack gap={6}>
                <Flex gap={10}>
                    <TextInput
                        label="First Name"
                        {...form.getInputProps("first_name")}
                        w="50%"
                        required
                    />
                    <TextInput
                        label="Last Name"
                        {...form.getInputProps("last_name")}
                        w="50%"
                        required
                    />
                </Flex>
                <TextInput
                    label="Street Address"
                    {...form.getInputProps("street")}
                    required
                />
                <Flex gap={10}>
                    <TextInput
                        label="Number"
                        {...form.getInputProps("number")}
                        w="50%"
                        required
                    />
                    <TextInput
                        label="State"
                        {...form.getInputProps("state")}
                        w="50%"
                        required
                    />
                    <TextInput
                        label="Zip Code"
                        {...form.getInputProps("zipCode")}
                        w="50%"
                        required
                    />
                </Flex>
                <TextInput
                    label="Phone Number"
                    {...form.getInputProps("phone_number")}
                    required
                />
            </Stack>

            <Flex justify="space-between" mt="md">
                <Button
                    variant="outline"
                    color="gray"
                    onClick={() => {
                        form.reset()
                        onCancel?.()
                    }}
                >
                    Cancel
                </Button>
                <Button variant="filled" color="pink" type="submit">
                    Save
                </Button>
            </Flex>
        </form>
    )
}
