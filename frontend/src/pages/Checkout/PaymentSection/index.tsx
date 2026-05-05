import RadioCardGroup from "@/components/RadioCardGroup"
import { CheckoutFormData } from "@/types/Checkout"
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
import { useFormContext } from "react-hook-form"
import { BiCreditCard, BiLogoPaypal } from "react-icons/bi"

export default function PaymentSection() {
    const {
        setValue,
        watch,
        register,
        formState: { errors },
    } = useFormContext<CheckoutFormData>()
    const paymentMethod = watch("paymentMethod")
    const cardNumber = watch("card.number")
    const expiryDate = watch("card.expiry")
    const cvv = watch("card.cvv")

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

    const formatCardNumber = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()
    }

    const formatExpiryDate = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d{0,2})/, "$1/$2")
            .trim()
    }

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
                        setSelected={(value) =>
                            setValue(
                                "paymentMethod",
                                value as CheckoutFormData["paymentMethod"],
                            )
                        }
                        layout="horizontal"
                        indicator="icon"
                    />
                </Box>

                {paymentMethod === "Credit card" && (
                    <Stack gap={15}>
                        <TextInput
                            label="Name on card"
                            placeholder="Enter your name"
                            error={errors.card?.name?.message}
                            {...register("card.name", {
                                required: "Name on card is required",
                            })}
                        />

                        <TextInput
                            label="Card number"
                            placeholder="0000 0000 0000 0000"
                            maxLength={19}
                            value={cardNumber}
                            error={errors.card?.number?.message}
                            {...register("card.number", {
                                required: "Card number is required",
                                minLength: {
                                    value: 19,
                                    message: "Invalid card number",
                                },
                            })}
                            onChange={(e) =>
                                setValue(
                                    "card.number",
                                    formatCardNumber(e.target.value),
                                )
                            }
                        />

                        <Flex gap={15}>
                            <TextInput
                                label="Expiry date"
                                placeholder="MM/YY"
                                maxLength={5}
                                value={expiryDate}
                                w="100%"
                                error={errors.card?.expiry?.message}
                                {...register("card.expiry", {
                                    required: "Expiry date is required",
                                    minLength: {
                                        value: 5,
                                        message: "Invalid expiry date",
                                    },
                                })}
                                onChange={(e) =>
                                    setValue(
                                        "card.expiry",
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
                                error={errors.card?.cvv?.message}
                                {...register("card.cvv", {
                                    required: "CVV is required",
                                    minLength: {
                                        value: 3,
                                        message: "Invalid CVV",
                                    },
                                })}
                                onChange={(e) =>
                                    setValue(
                                        "card.cvv",
                                        formatCvv(e.target.value),
                                    )
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
