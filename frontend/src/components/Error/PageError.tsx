import { Title, Button, Text, Stack } from "@mantine/core"

export default function PageError() {
    return (
        <Stack
            px={{ base: 20, sm: 80, md: 150 }}
            py={{ base: 40, sm: 60, md: 80 }}
            align="center"
        >
            <Title className="text-center" fz={{ base: "xl", md: 28 }}>
                Something is not right...
            </Title>

            <Text c="dimmed" size="lg" className="text-center">
                Page you are trying to open does not exist. You may have
                mistyped the address, or the page has been moved to another URL.
                If you think this is an error contact support.
            </Text>

            <Button
                component="a"
                href="/"
                color="pink"
                variant="outline"
                size="md"
            >
                Get back to home page
            </Button>
        </Stack>
    )
}
