import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function PropertyCard({ property }) {
    return (
        <Link to={`/properties/${property.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow hover:shadow-xl cursor-pointer"
            >
                <img
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-green-600 font-bold mt-2">
                        ₹ {property.price}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}
