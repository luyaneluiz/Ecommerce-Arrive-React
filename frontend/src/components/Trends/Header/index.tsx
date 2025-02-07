import { Group, ActionIcon, Text } from "@mantine/core"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

interface HeaderTrendProps {
    trend: string
    changeTrend?: () => void
    hasArrows?: boolean
}

export default function HeaderTrend({
    trend,
    changeTrend,
    hasArrows,
}: HeaderTrendProps) {
    return (
        <Group justify="space-between">
            <ActionIcon
                variant="transparent"
                onClick={changeTrend}
                display={hasArrows ? "flex" : "none"}
            >
                <BiChevronLeft />
            </ActionIcon>

            <Text fw={600}>{trend}</Text>

            <ActionIcon
                variant="transparent"
                onClick={changeTrend}
                display={hasArrows ? "flex" : "none"}
            >
                <BiChevronRight />
            </ActionIcon>
        </Group>
    )
}
