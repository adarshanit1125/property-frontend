import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
    const { admin, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/admin/login")
    }

    return (
        <nav className="bg-blue-200 shadow px-6 py-4 flex justify-between items-center">

            {/* LOGO + NAME */}
            <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10" />
                <span className="text-xl font-bold text-black">
                    Maa Gayatri Properties
                </span>
            </Link>

            {/* NAV LINKS */}
            <ul className="flex items-center gap-6 font-medium text-black">
                <li>
                    <Link to="/" className="hover:text-blue-700">Home</Link>
                </li>
                <li>
                    <Link to="/properties" className="hover:text-blue-700">
                        Properties
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-blue-700">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/about" className="hover:text-blue-700">
                        About
                    </Link>
                </li>


                {/* 🔐 ADMIN ONLY */}
                {admin && (
                    <>
                        <li>
                            <Link
                                to="/admin/dashboard"
                                className="font-semibold hover:text-orange-600"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="bg-white px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
