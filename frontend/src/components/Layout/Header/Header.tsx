import { Link } from "react-router-dom"
import Logo from "../../../assets/logo.png"
import { LoggatedButtons } from "./LoggatedButtons"
import { InputSearch } from "../../Search"
import { useAuth } from "@/contexts/AuthContext"

export function Header() {
    const { user } = useAuth()

    return (
        <header className="flex justify-between items-center bg-white py-2 px-4 border-b-slate-100 border-b md:py-4 md:px-6">
            <Link to="/">
                <img src={Logo} alt="Logo arrive" className="w-20 md:w-24" />
            </Link>

            <InputSearch />

            {user ? (
                <LoggatedButtons mobile={false} />
            ) : (
                <Link to="/auth" className="text-pink">
                    Login
                </Link>
            )}
        </header>
    )
}
