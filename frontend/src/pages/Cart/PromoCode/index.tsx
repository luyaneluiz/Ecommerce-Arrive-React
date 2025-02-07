import {
    Paper,
    Flex,
    Input,
    Text,
    Stack,
    ActionIcon,
    Alert,
} from "@mantine/core"
import { LuTicket } from "react-icons/lu"
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoTicketOutline } from "react-icons/io5"
import { useRef, useState } from "react"

export default function PromoCode() {
    const [promoCode, setPromoCode] = useState("")
    const [isApplied, setIsApplied] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleApplyPromoCode = () => {
        setIsApplied(true)

        if (inputRef.current) inputRef.current.disabled = true
        if (buttonRef.current) buttonRef.current.disabled = true
    }

    return (
        <Paper bg="#f1f1f1" p={20} my={15}>
            <Stack>
                <Flex gap={6}>
                    <IoTicketOutline size={20} />
                    <Text size="sm">Apply promo code or gift card</Text>
                </Flex>

                <Flex gap={8}>
                    <Input
                        placeholder="Enter your promo code here"
                        w="100%"
                        ref={inputRef}
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.currentTarget.value)}
                    />

                    <ActionIcon
                        color="pink"
                        bg="white"
                        variant="outline"
                        size="lg"
                        disabled={!promoCode}
                        ref={buttonRef}
                        onClick={handleApplyPromoCode}
                    >
                        <IoIosArrowRoundForward size={20} />
                    </ActionIcon>
                </Flex>

                {isApplied && (
                    <Alert variant="light" color="teal" id="alert">
                        <Flex align="center" gap={5}>
                            <LuTicket color="teal" />
                            <Text size="xs" fw={800} c="teal">
                                Promo code applied successfully!
                            </Text>
                        </Flex>
                    </Alert>
                )}

                <Text size="sm" c="gray">
                    Save $10 on your first order with code WELCOME10.
                </Text>
            </Stack>
        </Paper>
    )
}
