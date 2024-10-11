import developmentIllustration from "../../assets/illustrations/development-illustration.svg"

export function CreatingPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 my-20">
            <img
                src={developmentIllustration}
                alt="Illustration for page in development"
                width={300}
            />
            <p>This page is in development...</p>
        </div>
    )
}
