import { Button, Text } from "@mantine/core"
import emptyIllustration from "@/assets/illustrations/empty-favorites.svg"

interface EmptyPageProps {
    message: string
    hasButton?: boolean
    buttonText?: string
}

export default function EmptyPage({
    message,
    hasButton,
    buttonText,
}: EmptyPageProps) {
    return (
        <div className="flex flex-col items-center gap-8 py-10">
            <img src={emptyIllustration} alt="" width={150} />
            <Text c="dimmed">{message}</Text>

            {hasButton && (
                <Button color="pink" component="a" href="/">
                    {buttonText}
                </Button>
            )}
        </div>
    )
}
