import { useAuth } from "@/contexts/AuthContext"
import {
    Anchor,
    Button,
    Checkbox,
    Group,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { upperFirst, useToggle } from "@mantine/hooks"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Auth() {
    const navigate = useNavigate()
    const { login, register } = useAuth()
    const [type, toggle] = useToggle(["login", "register"])
    const [loading, setLoading] = useState(false)
    const form = useForm({
        initialValues: {
            email: "maria@gmail.com",
            name: "maria",
            password: "1234",
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { email, name, password, terms } = form.values

        if (type === "register" && !terms) return

        setLoading(true)

        try {
            if (type === "login") {
                await login(email, password)
                navigate("/")
            } else {
                await register(name, email, password)
                toggle()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Stack align="center" justify="center" gap={80} py={40}>
            <Paper radius="md" p="xl" w={450} withBorder>
                <Stack align="center" gap={10} mb={20}>
                    <Text size="lg" fw="bold">
                        {upperFirst(type)}
                    </Text>
                    <Text size="sm" c="dimmed">
                        {type === "register"
                            ? "Create an account to continue"
                            : "Login to your account"}
                    </Text>
                </Stack>

                <form onSubmit={handleSubmit}>
                    <Stack>
                        {type === "register" && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "name",
                                        event.currentTarget.value,
                                    )
                                }
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "email",
                                    event.currentTarget.value,
                                )
                            }
                            error={form.errors.email && "Invalid email"}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue(
                                    "password",
                                    event.currentTarget.value,
                                )
                            }
                            error={
                                form.errors.password &&
                                "Password should include at least 6 characters"
                            }
                            radius="md"
                        />

                        {type === "register" && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                color="pink"
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "terms",
                                        event.currentTarget.checked,
                                    )
                                }
                            />
                        )}
                    </Stack>

                    <Group justify="space-between" mt={25}>
                        <Button
                            type="submit"
                            radius="md"
                            color="pink"
                            w="100%"
                            loading={loading}
                        >
                            {upperFirst(type)}
                        </Button>

                        <Anchor
                            component="button"
                            type="button"
                            c="dimmed"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === "register"
                                ? "Already have an account? Login"
                                : "Don't have an account? Register"}
                        </Anchor>
                    </Group>
                </form>
            </Paper>
        </Stack>
    )
}
