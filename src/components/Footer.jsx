import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* COMPANY */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Maa Gayatri Properties</h3>
                    <p className="text-gray-400 text-sm">
                        Trusted property dealer for buying, selling and renting properties.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link to="/" className="hover:text-orange-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/properties" className="hover:text-orange-400">
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-orange-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ADMIN */}
                <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link
                                to="/admin/login"
                                className="hover:text-orange-400"
                            >
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" className="hover:text-orange-400">
                                About
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} Maa Gayatri Properties. All rights reserved.
            </div>
        </footer>
    )
}
