import { Link, useLocation } from "react-router-dom"

interface IconButtonActionProps {
    Icon: React.FC<{ size: number; className: string }>
    path: string
    onClick?: () => void
}

export default function IconButtonAction({
    Icon,
    path,
    onClick,
}: IconButtonActionProps) {
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path

    return (
        <Link to={path} onClick={onClick} className="relative">
            <Icon
                size={20}
                className={`${isActive(path) ? "text-pink" : "text-black"} hover:text-pink w-6 min-[600px]:w-5 h-6 min-[600px]:h-5`}
            />
        </Link>
    )
}
