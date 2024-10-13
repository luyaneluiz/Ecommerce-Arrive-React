interface ButtonProps {
    text: string
}

export function Button({ text }: ButtonProps) {
    return (
        <button className="bg-pink font-bold text-white cursor-pointer rounded-lg py-2 transition-all hover:bg-lightPink w-full sm:w-32 sm:text-sm sm:my-2">
            {text}
        </button>
    )
}
