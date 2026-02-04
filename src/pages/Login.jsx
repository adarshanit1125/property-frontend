import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        // TEMP user (backend later)
        login({ name: "Customer" })
        navigate("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow w-full max-w-md">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Customer Login
                </h2>

                <input className="w-full border p-3 rounded mb-4" placeholder="Email" />
                <input className="w-full border p-3 rounded mb-4" placeholder="Password" type="password" />

                <button
                    onClick={handleLogin}
                    className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-5">
                    New user?{" "}
                    <Link to="/register" className="text-orange-500 font-semibold">
                        Create account
                    </Link>
                </p>
            </div>
        </div>
    )
}
