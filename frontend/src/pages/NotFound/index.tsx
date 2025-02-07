import { Link } from "react-router-dom"
import { Container, Title, Text, Button, Group } from "@mantine/core"
import { NotFoundIllustration } from "../../assets/illustrations/not-found"

export function NotFound() {
    return (
        <Container className="py-20">
            <div className="relative">
                <NotFoundIllustration className="absolute inset-0 opacity-75 text-black/10" />
                <div className="pt-28 lg:pt-40 relative z-10">
                    <Title className="text-center font-black text-3xl lg:text-4xl">
                        Nothing to see here
                    </Title>

                    <Text
                        c="dimmed"
                        size="lg"
                        ta="center"
                        mx="auto"
                        my={20}
                        px={40}
                    >
                        Page you are trying to open does not exist. You may have
                        mistyped the address, or the page has been moved to
                        another URL. If you think this is an error contact
                        support.
                    </Text>

                    <Group justify="center">
                        <Link to="/">
                            <Button size="md" color="pink">
                                Back to home page
                            </Button>
                        </Link>
                    </Group>
                </div>
            </div>
        </Container>
    )
}
