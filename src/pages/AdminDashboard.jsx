import { useState } from "react"
import { useProperties } from "../context/PropertyContext"
import { compressImage } from "../utils/imageCompress"

export default function AdminDashboard() {
    const { properties, addProperty, updateProperty, deleteProperty } = useProperties()

    const [form, setForm] = useState({
        _id: null,
        title: "",
        location: "",
        price: "",
        image: "",
        description: "",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleImageUpload = async (e) => {
        const file = e.target.files[0]
        if (!file) return
        const img = await compressImage(file)
        setForm((prev) => ({ ...prev, image: img }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form._id) {
            await updateProperty(form._id, form)
        } else {
            await addProperty(form)
        }

        setForm({ _id: null, title: "", location: "", price: "", image: "", description: "" })
    }

    const handleEdit = (p) => {
        setForm(p)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Welcome, Maa Gayatri Properties</h1>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow mb-10 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-3 rounded" />
                <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-3 rounded" />
                <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-3 rounded" />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Property Description"
                    rows="4"
                    className="border p-3 rounded md:col-span-2"
                />
                {form.image && (
                    <img src={form.image} className="h-40 w-full object-cover rounded md:col-span-2" />
                )}

                <button className="bg-blue-300 text-black p-3 rounded md:col-span-2">
                    {form._id ? "Update Property" : "Add Property"}
                </button>
            </form>

            {/* LIST */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((p) => (
                    <div key={p._id} className="bg-white p-4 rounded shadow">
                        <img src={p.image} className="h-40 w-full object-cover rounded mb-3" />
                        <h3 className="font-semibold">{p.title}</h3>
                        <p>{p.location}</p>
                        <p className="text-green-600 font-bold">₹ {p.price}</p>

                        <div className="flex gap-3 mt-4">
                            <button onClick={() => handleEdit(p)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Edit
                            </button>
                            <button onClick={() => deleteProperty(p._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
