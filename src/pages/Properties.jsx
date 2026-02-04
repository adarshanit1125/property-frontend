import PropertyCard from "../components/PropertyCard"
import { useProperties } from "../context/PropertyContext"

export default function Properties() {
    const { properties } = useProperties()

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
                Available Properties
            </h1>

            {properties.length === 0 ? (
                <p className="text-gray-500 text-center">
                    No properties available right now.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
