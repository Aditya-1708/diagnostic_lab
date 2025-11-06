import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-md shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">
        Tathagath Diagnostics
      </h1>

      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#services" className="hover:text-blue-600 transition">Services</a>
        <a href="#about" className="hover:text-blue-600 transition">About Us</a>
        <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
      </nav>

      <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </header>
  )
}

export default Navbar
