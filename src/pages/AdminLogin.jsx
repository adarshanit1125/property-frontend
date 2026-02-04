import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (data.token) {
            localStorage.setItem("adminToken", data.token)
            nav("/admin/dashboard")
        } else alert("Login failed")
    }

    return (
        <form onSubmit={submit} className="p-6 max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4">Company Login</h2>
            <input className="border p-2 w-full mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button className="bg-black text-white p-2 w-full">Login</button>
        </form>
    )
}
