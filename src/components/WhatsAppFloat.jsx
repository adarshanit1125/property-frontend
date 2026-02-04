import { motion } from "framer-motion"

export default function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/919931419658"
            target="_blank"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg z-50"
        >
            WhatsApp
        </motion.a>
    )
}
