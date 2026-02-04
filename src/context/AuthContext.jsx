import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [admin, setAdmin] = useState(false)

    // 🔐 CHECK TOKEN ON LOAD
    useEffect(() => {
        const token = localStorage.getItem("adminToken")
        if (token) {
            setAdmin(true)
        }
    }, [])

    // 🔓 LOGIN
    const login = (token) => {
        localStorage.setItem("adminToken", token)
        setAdmin(true)
    }

    // 🔒 LOGOUT
    const logout = () => {
        localStorage.removeItem("adminToken")
        setAdmin(false)
    }

    return (
        <AuthContext.Provider value={{ admin, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
