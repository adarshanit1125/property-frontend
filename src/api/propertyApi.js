const API_URL = `${import.meta.env.VITE_API_URL}/api/properties`

const getToken = () => localStorage.getItem("adminToken")

const authHeaders = () => ({
    Authorization: `Bearer ${getToken()}`,
})

// 🔓 GET (PUBLIC)
export const getProperties = async () => {
    const res = await fetch(API_URL)

    if (!res.ok) {
        throw new Error("Failed to fetch properties")
    }

    return res.json()
}

// 🔐 ADD
export const addProperty = async (property) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...authHeaders(),
        },
        body: JSON.stringify(property),
    })

    if (!res.ok) {
        throw new Error("Add property failed")
    }

    return res.json()
}

// 🔐 UPDATE
export const updateProperty = async (id, property) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...authHeaders(),
        },
        body: JSON.stringify(property),
    })

    if (!res.ok) {
        throw new Error("Update failed")
    }

    return res.json()
}

// 🔐 DELETE
export const deleteProperty = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
    })

    if (!res.ok) {
        throw new Error("Delete failed")
    }

    return res.json()
}
