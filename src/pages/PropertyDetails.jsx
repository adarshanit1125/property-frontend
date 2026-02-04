import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const API_URL = `${import.meta.env.VITE_API_URL}/api/properties`

export default function PropertyDetails() {
    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await fetch(`${API_URL}/${id}`)
                if (!res.ok) throw new Error("Not found")
                const data = await res.json()
                setProperty(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchProperty()
    }, [id])

    if (loading) return <p className="text-center mt-10">Loading...</p>

    if (!property)
        return (
            <p className="text-center mt-10 text-red-500">
                Property not found
            </p>
        )

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-96 object-cover rounded"
            />

            <h1 className="text-3xl font-bold mt-6">
                {property.title}
            </h1>

            <p className="text-gray-600 mt-2">
                {property.location}
            </p>

            <p className="text-green-600 text-xl font-bold mt-4">
                ₹ {property.price}
            </p>

            <p className="mt-4 text-gray-700">
                {property.description}
            </p>
        </div>
    )
}
