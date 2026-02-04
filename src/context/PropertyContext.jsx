import { createContext, useContext, useEffect, useState } from "react"
import {
    getProperties,
    addProperty as apiAdd,
    updateProperty as apiUpdate,
    deleteProperty as apiDelete,
} from "../api/propertyApi"

const PropertyContext = createContext()

export function PropertyProvider({ children }) {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchAll = async () => {
        setLoading(true)
        const data = await getProperties()
        setProperties(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    const addProperty = async (property) => {
        await apiAdd(property)
        await fetchAll()
    }

    const updateProperty = async (id, updates) => {
        await apiUpdate(id, updates)
        await fetchAll()
    }

    const deleteProperty = async (id) => {
        await apiDelete(id)
        await fetchAll()
    }

    return (
        <PropertyContext.Provider
            value={{ properties, loading, addProperty, updateProperty, deleteProperty }}
        >
            {children}
        </PropertyContext.Provider>
    )
}

export const useProperties = () => useContext(PropertyContext)
