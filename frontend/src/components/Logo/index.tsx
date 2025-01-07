import { Link } from "react-router-dom"
import Image from "@/assets/logo.png"

export default function Logo() {
    return (
        <Link to="/">
            <img src={Image} alt="Logo arrive" className="w-20 md:w-24" />
        </Link>
    )
}
