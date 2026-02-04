import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="bg-blue-200 text-white py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Find Your Dream
                </h1>
                <p className="text-lg mb-8 text-black">
                    Buy • Sell • Rent
                </p>

                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                    <input className="flex-1 px-4 py-2 text-black rounded border" placeholder="Location" />
                    <select className="flex-1 px-4 py-2 text-black rounded border">
                        <option>Buy</option>
                        <option>Rent</option>
                    </select>
                    <button className="bg-blue-500 px-6 py-2 rounded text-white font-semibold hover:bg-blue-600">
                        Search
                    </button>
                </div>
            </motion.div>
        </section>
    )
}
