import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow w-full max-w-md">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create Account
                </h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded mb-4"
                />

                <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500">
                    Register
                </button>

                {/* LOGIN LINK */}
                <p className="text-center text-sm mt-5">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-500 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    )
}
