import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"

import Home from "./pages/Home"
import Properties from "./pages/Properties"
import PropertyDetails from "./pages/PropertyDetails"
import Contact from "./pages/Contact"
import About from "./pages/About"


// Admin
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import AdminRoute from "./components/AdminRoute"

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* 🌍 PUBLIC PAGES */}
        <Route
          path="/"
          element={<AnimatedPage><Home /></AnimatedPage>}
        />

        <Route
          path="/properties"
          element={<AnimatedPage><Properties /></AnimatedPage>}
        />

        <Route
          path="/properties/:id"
          element={<AnimatedPage><PropertyDetails /></AnimatedPage>}
        />

        <Route
          path="/contact"
          element={<AnimatedPage><Contact /></AnimatedPage>}
        />

        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />


        {/* 🔐 ADMIN AUTH */}
        <Route
          path="/admin/login"
          element={<AnimatedPage><AdminLogin /></AnimatedPage>}
        />

        {/* 🔒 PROTECTED ADMIN DASHBOARD */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AnimatedPage>
                <AdminDashboard />
              </AnimatedPage>
            </AdminRoute>
          }
        />

        {/* ❌ FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  )
}
