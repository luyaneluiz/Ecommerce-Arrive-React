import { Paper, Flex, Avatar, Button, Divider, Box, Text } from "@mantine/core"
import { BiEdit } from "react-icons/bi"

export default function AddressSection() {
    return (
        <Paper p={20} withBorder>
            <Flex justify="space-between">
                <Flex gap={10} align="center">
                    <Avatar size={32} radius="xl" name="1" />

                    <Text fs="lg" fw={600}>
                        ADDRESS
                    </Text>
                </Flex>

                <Button variant="transparent" color="pink">
                    <BiEdit size={16} />
                    <Text ml={4}>Edit</Text>
                </Button>
            </Flex>

            <Divider my={15} />

            <Box>
                <Text fw={600}>Maria</Text>
                <Text fz={14}>1234 Main St, Springfield, IL 62701</Text>
                <Text fz={14}>United States - 123456789</Text>
            </Box>
        </Paper>
    )
}
