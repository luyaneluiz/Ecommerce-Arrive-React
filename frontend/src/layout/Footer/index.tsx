import { Link } from "react-router-dom"
// Images
import Logo from "@/assets/logo.png"
import PaymentMethods from "@/assets/payment-methods.png"
// Mantine components
import {
    Button,
    Flex,
    Image,
    Input,
    Paper,
    SimpleGrid,
    Stack,
    Text,
} from "@mantine/core"
// Icons
import {
    BiLogoInstagram,
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoPinterest,
} from "react-icons/bi"

export default function Footer() {
    return (
        <Stack>
            <Paper shadow="xs" bg="#e5e7eb" radius="xs" p={20}>
                <SimpleGrid cols={2} spacing={30} p={10}>
                    <Stack gap="xs">
                        <Image src={Logo} alt="Logo arrive" w={100} />
                        <Text>Avenue des Champs-Élysées, Paris, France</Text>
                        <Text>(+33) 900-6543-99</Text>
                        <Link to="mailto:arriveboutique@contato.com">
                            arriveboutique@contato.com
                        </Link>
                        <Text>arrive.boutique.com</Text>
                        <Flex>
                            <BiLogoInstagram size={28} />
                            <BiLogoFacebook size={28} />
                            <BiLogoTwitter size={28} />
                            <BiLogoPinterest size={28} />
                        </Flex>
                    </Stack>

                    <Stack gap="xs">
                        <Text fw={700} fz={22}>
                            Terms
                        </Text>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms & Condition</Link>
                        <Link to="/">Search Terms</Link>
                        <Link to="/">About us</Link>
                        <Link to="/">Order & Return</Link>
                    </Stack>
                </SimpleGrid>

                <SimpleGrid cols={2} spacing={30} p={10}>
                    <Stack gap="xs">
                        <Text fw={700} fz={22}>
                            Popular
                        </Text>
                        <Link to="/">Fashion</Link>
                        <Link to="/">Cosmetic</Link>
                        <Link to="/">New Products</Link>
                        <Link to="/">Best Sales</Link>
                        <Link to="/">Footwear</Link>
                    </Stack>

                    <Stack gap="xs">
                        <Text fw={700} fz={22}>
                            Newsletter
                        </Text>

                        <Flex gap={10}>
                            <Input
                                placeholder="Enter your e-mail here"
                                size="md"
                                w="100%"
                            />
                            <Button
                                color="pink"
                                w={150}
                                size="md"
                                fz={14}
                                p={5}
                            >
                                SUBSCRIBE
                            </Button>
                        </Flex>

                        <Stack>
                            <Flex
                                justify="space-between"
                                className="border-b border-gray-500 pb-3"
                            >
                                <Text>Monday - Friday</Text>
                                <Text>08:00 - 18:00</Text>
                            </Flex>
                            <Flex
                                justify="space-between"
                                className="border-b border-gray-500 pb-3"
                            >
                                <Text>Saturday</Text>
                                <Text>10:00 - 20:00</Text>
                            </Flex>
                            <Flex
                                justify="space-between"
                                className="border-b border-gray-500 pb-3"
                            >
                                <Text>Sunday</Text>
                                <Text>13:00 - 21:00</Text>
                            </Flex>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Paper>

            <Stack align="center" p={15} gap={10}>
                <Text fz={14} c="gray">
                    © 2022 <span>Arrive</span> - All Right reserved!
                </Text>
                <Image src={PaymentMethods} alt="Payments Methods" w={260} />
            </Stack>
        </Stack>
    )
}
