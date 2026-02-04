import { useParams } from "react-router-dom"

const properties = [
    {
        id: "1",
        title: "2 BHK Apartment",
        location: "Noida Sector 62",
        price: "45,00,000",
        image: "https://via.placeholder.com/600",
        description: "Spacious 2 BHK apartment near metro and market.",
    },
    {
        id: "2",
        title: "3 BHK Villa",
        location: "Greater Noida",
        price: "85,00,000",
        image: "https://via.placeholder.com/600",
        description: "Luxury villa with parking and garden area.",
    },
]

export default function PropertyDetails() {
    const { id } = useParams()
    const property = properties.find(p => p.id === id)

    if (!property) return <p className="p-6">Property not found</p>

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <img
                src={property.image}
                className="w-full h-80 object-cover rounded-lg mb-6"
            />

            <h1 className="text-3xl font-bold">{property.title}</h1>
            <p className="text-gray-600 mt-2">{property.location}</p>

            <p className="text-orange-500 text-xl font-bold mt-4">
                ₹ {property.price}
            </p>

            <p className="mt-6 text-gray-700">
                {property.description}
            </p>

            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-orange-600">
                <a
                    href="https://wa.me/919931419658?text=I%20am%20interested%20in%20this%20property"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600"
                >
                    Contact Dealer on WhatsApp
                </a>

            </button>
        </div>
    )
}
