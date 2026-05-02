import { Radio, Text, Flex, Button } from "@mantine/core"
import { useEffect, useState } from "react"
import AddressForm from "../AddressForm"
import { useAddress } from "@/hooks/useAddress"
import Address from "@/types/Address"

export default function AddressRadioCardGroup({
    onAddressSelect,
}: {
    onAddressSelect?: (address: Address) => void
}) {
    const [editingId, setEditingId] = useState<string | null>(null)
    const { addresses, fetchAddresses } = useAddress()
    const [selected, setSelected] = useState<string>("")

    useEffect(() => {
        setSelected(
            addresses.find((addr) => addr.isDefault === true)?._id || "",
        )
    }, [addresses])

    useEffect(() => {
        if (selected && addresses.length > 0) {
            const selectedAddress = addresses.find(
                (addr) => addr._id === selected,
            )
            if (selectedAddress) {
                onAddressSelect?.(selectedAddress)
            }
        }
    }, [selected, addresses, onAddressSelect])

    const cards = addresses.map((address) => (
        <Radio.Card
            p={15}
            style={selected === address._id ? { border: "1px solid pink" } : {}}
            c={selected === address._id ? "pink" : "black"}
            className="transition-colors duration-150 ease-in-out hover:border-gray-300"
            radius="md"
            value={address._id}
            key={address._id}
        >
            {editingId === address._id ? (
                <Flex gap={10}>
                    <Radio.Indicator color="pink" />

                    <AddressForm
                        addressData={address}
                        onCancel={() => setEditingId(null)}
                        onSave={() => {
                            setEditingId(null)
                            fetchAddresses()
                        }}
                    />
                </Flex>
            ) : (
                <Flex justify="space-between" align="center" gap={10}>
                    <Flex justify="space-between" align="center" gap={10}>
                        <Radio.Indicator color="pink" />

                        <Flex direction="column">
                            <Text size="md">
                                {address.first_name} {address.last_name}
                            </Text>
                            <Text c="dimmed" size="xs">
                                {address.street}, {address.number},{" "}
                                {address.state} - {address.zipCode}
                            </Text>
                        </Flex>
                    </Flex>

                    <Button
                        variant="transparent"
                        color="pink"
                        fw="lighter"
                        onClick={() => setEditingId(address._id)}
                    >
                        Edit
                    </Button>
                </Flex>
            )}
        </Radio.Card>
    ))

    return (
        <Radio.Group value={selected} onChange={setSelected}>
            <Flex gap="xs">{cards}</Flex>
        </Radio.Group>
    )
}
