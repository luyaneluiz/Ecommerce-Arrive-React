import React from "react"
import { Title, Button, Text } from "@mantine/core"
import { Link } from "react-router-dom"

export default function PageError() {
    return (
        <div>
            <Title>Something is not right...</Title>
            <Text c="dimmed" size="lg">
                Page you are trying to open does not exist. You may have
                mistyped the address, or the page has been moved to another URL.
                If you think this is an error contact support.
            </Text>
            <Link to="/">
                <Button variant="outline" size="md" mt="xl">
                    Get back to home page
                </Button>
            </Link>
        </div>
    )
}
