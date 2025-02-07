import RadioCardGroup from "@/components/RadioCardGroup"
import {
    Paper,
    Flex,
    Avatar,
    Divider,
    Stack,
    Box,
    TextInput,
    Text,
} from "@mantine/core"
import { useState } from "react"
import { BiCreditCard, BiLogoPaypal } from "react-icons/bi"

export default function PaymentSection() {
    const [paymentMethod, setPaymentMethod] = useState<string>("Credit card")

    const paymentData = [
        {
            name: "Credit card",
            icon: <BiCreditCard size={24} />,
        },
        {
            name: "PayPal",
            icon: <BiLogoPaypal size={24} />,
        },
    ]

    const [cardNumber, setCardNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cvv, setCvv] = useState("")

    const formatCardNumber = (value: string) => {
        console.log(value)
        return value
            .replace(/\D/g, "") // Remove tudo que não for número
            .replace(/(\d{4})/g, "$1 ") // Adiciona espaço a cada 4 dígitos
            .trim() // Remove espaços extras
    }

    const formatExpiryDate = (value: string) => {
        return value
            .replace(/\D/g, "") // Remove tudo que não for número
            .replace(/(\d{2})(\d{0,2})/, "$1/$2") // Insere a barra automaticamente
            .trim()
    }

    // Restringe o CVV para 3 ou 4 números (3 para Visa/Master, 4 para Amex)
    const formatCvv = (value: string) => {
        return value.replace(/\D/g, "").slice(0, 4)
    }
    return (
        <Paper p={20} withBorder>
            <Flex gap={10} align="center">
                <Avatar size={32} radius="xl" name="3" />

                <Text fs="lg" fw={600}>
                    PAYMENT METHOD
                </Text>
            </Flex>

            <Divider my={15} />

            <Stack>
                <Box w={280}>
                    <RadioCardGroup
                        options={paymentData}
                        selected={paymentMethod}
                        setSelected={setPaymentMethod}
                        layout="horizontal"
                        indicator="icon"
                    />
                </Box>

                {paymentMethod === "Credit card" && (
                    <Stack gap={15}>
                        <TextInput
                            label="Name on card"
                            placeholder="Enter your name"
                        />

                        <TextInput
                            label="Card number"
                            placeholder="0000 0000 0000 0000"
                            maxLength={19}
                            value={cardNumber}
                            onChange={(e) =>
                                setCardNumber(formatCardNumber(e.target.value))
                            }
                        />

                        <Flex gap={15}>
                            <TextInput
                                label="Expiry date"
                                placeholder="MM/YY"
                                maxLength={5}
                                value={expiryDate}
                                w="100%"
                                onChange={(e) =>
                                    setExpiryDate(
                                        formatExpiryDate(e.target.value),
                                    )
                                }
                            />

                            <TextInput
                                label="CVV"
                                placeholder="***"
                                maxLength={3}
                                value={cvv}
                                w="100%"
                                onChange={(e) =>
                                    setCvv(formatCvv(e.target.value))
                                }
                            />
                        </Flex>
                    </Stack>
                )}

                {paymentMethod === "PayPal" && (
                    <Text size="sm">
                        You will be redirected to PayPal to complete the
                        payment.
                    </Text>
                )}
            </Stack>
        </Paper>
    )
}
