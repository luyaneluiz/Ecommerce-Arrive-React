import { Text } from "@mantine/core"
import emptyIllustration from "@/assets/illustrations/empty-favorites.svg"

export default function EmptyPage() {
    return (
        <div className="flex flex-col items-center gap-8 py-10">
            <img src={emptyIllustration} alt="" width={150} />
            <Text c="dimmed">No favorites yet.</Text>
        </div>
    )
}
