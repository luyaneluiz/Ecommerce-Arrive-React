import { Link } from "react-router-dom"

interface RedirectLinkProps {
    path: string
    text: string
    handle?: () => void
}

export default function RedirectLink({
    path,
    text,
    handle,
}: RedirectLinkProps) {
    return (
        <Link
            to={path}
            className="block text-center text-pink"
            onClick={handle}
        >
            {text}
        </Link>
    )
}
