import Hero from "../components/Hero"
import { useProperties } from "../context/PropertyContext"

export default function Home() {
    const { properties, loading } = useProperties()

    return (
        <>
            {/* ✅ HERO SECTION */}
            <Hero />

            {/* FEATURED PROPERTIES */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold mb-6">
                    Featured Properties
                </h2>

                {loading ? (
                    <p>Loading properties...</p>
                ) : properties.length === 0 ? (
                    <p>No properties available.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {properties.map((p) => (
                            <div key={p._id} className="bg-white p-4 rounded shadow">
                                <img
                                    src={p.image}
                                    className="h-40 w-full object-cover rounded mb-3"
                                />
                                <h3 className="font-semibold">{p.title}</h3>
                                <p>{p.location}</p>
                                <p className="text-orange-500 font-bold">
                                    ₹ {p.price}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
