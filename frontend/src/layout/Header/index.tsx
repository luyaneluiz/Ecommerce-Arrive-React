// Context
import { useAuth } from "@/contexts/AuthContext"
// Custom components
import Logo from "@/components/Logo"
import LoggatedActions from "@/components/LoggatedActions"
import RedirectLink from "@/components/RedirectLink"
import InputSearch from "@/components/Search"
// Mantine components
import { AppShell, Burger, Group } from "@mantine/core"

interface HeaderProps {
    opened: boolean
    toggle: () => void
}

export default function Header({ opened, toggle }: HeaderProps) {
    const { user } = useAuth()

    return (
        <AppShell.Header
            withBorder={false}
            className="border-b-slate-100 border-b"
        >
            <Group h="100%" px="md" justify="space-between">
                <Logo />
                <InputSearch />

                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />

                <Group ml="xl" gap={0} visibleFrom="sm">
                    {user ? (
                        <LoggatedActions />
                    ) : (
                        <RedirectLink path="/auth" text="Login" />
                    )}
                </Group>
            </Group>
        </AppShell.Header>
    )
}
