import { Flex, Loader } from "@mantine/core"

export default function LoadingPage() {
    return (
        <Flex w="100%" mih={400} align="center" justify="center">
            <Loader color="pink" />
        </Flex>
    )
}
