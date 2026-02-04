import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .sendForm(
                "service_4a8p1wg",
                "template_9diq0rj",
                e.target,
                "T-BAAdV1rWEtC9tMc"
            )
            .then(() => {
                alert("Message sent successfully ✅")
                e.target.reset()
            })
            .catch(() => {
                alert("Failed to send message ❌")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-10 text-center">
                Contact Us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* 📍 ADDRESS SECTION */}
                <div className="bg-white shadow rounded p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Our Office Address
                    </h2>

                    <p className="text-gray-700 mb-3">
                        <strong>Maa Gayatri Properties</strong>
                    </p>

                    <p className="text-gray-700 mb-3">
                        First Floor,<br />
                        Near Bihar College Of Pharmacy,<br />
                        Behind Magadh Cancer Hospital,<br />
                        Gola Road, Patna, Bihar – 801503
                    </p>

                    <p className="text-gray-700 mb-2">
                        📞 <strong>Phone:</strong> +91 99314 19658
                    </p>

                    <p className="text-gray-700 mb-2">
                        📧 <strong>Email:</strong> maagayatriproperties9@gmail.com
                    </p>

                    <p className="text-gray-700">
                        🕒 <strong>Working Hours:</strong><br />
                        Monday – Sunday: 10:00 AM – 7:00 PM
                    </p>
                </div>

                {/* ✉️ CONTACT FORM */}
                <div className="bg-white shadow rounded p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Send Us a Message
                    </h2>

                    <form onSubmit={sendEmail} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full border p-3 rounded"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full border p-3 rounded"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="w-full border p-3 rounded"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-400 text-black px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
