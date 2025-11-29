"use client";

import { BentoGridDemo } from "@/components/BentoDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Specialists } from "@/components/Specialists";
import { motion, Variants } from "framer-motion";
import { ChevronRight, MessageCircle, Phone, Shield } from "lucide-react";
import Link from "next/link";

// Motion presets
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const coreValues = [
  "Customer Satisfaction",
  "Highest Quality Care",
  "Integrity",
  "Innovation",
  "Team Work",
];

const testimonials = [
  {
    name: "Vijay Prakash",
    response: "Very quick and old-age friendly lab. They guided me very patiently.",
  },
  {
    name: "Lakshmi Narayan",
    response: "The home sample collection was smooth. Technician was polite and well trained.",
  },
  {
    name: "Sushma Devi",
    response: "Reports were delivered on WhatsApp within a few hours. Very convenient for elders.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-gray-900 dark:text-white overflow-hidden">
      <NavbarDemo />

      <main className="pt-12 md:pt-20"> {/* Reduced top padding for mobile */}

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-6 md:py-16 flex flex-col lg:flex-row items-center gap-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 text-center lg:text-left space-y-5">
            

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Diagnostics with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500"> Heart & Precision</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-700/90 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              Bringing world-class diagnostic technology to your doorstep — fast, accurate, and filled with care.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-4 flex-wrap pt-1">
              <Link href="https://wa.me/919900356000" target="_blank" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-6" />
                Book Test
                <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="tel:+919900356000" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-sky-200 text-sky-700 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">
                <Phone className="w-5 h-5 transition-transform group-hover:-rotate-6" />
                Call Now
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/30 shadow-sm mx-auto lg:mx-0">
              <Shield className="h-4 w-4 text-sky-600" />
              <span className="text-sm font-medium text-gray-700">NABL-grade accuracy • Elder-friendly service</span>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex-1 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-[18rem] sm:w-[24rem] md:w-[26rem] h-[20rem] md:h-[26rem]">
              <motion.img src="/ecg.jpg" className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 rounded-xl object-cover shadow-lg" animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
              <motion.img src="/bt.webp" className="absolute bottom-0 left-10 w-36 sm:w-44 h-36 sm:h-44 rounded-xl object-cover shadow-lg" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
              <motion.img src="/scan.avif" className="absolute top-10 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-xl object-cover shadow-lg" animate={{ y: [0, -5, 0] }} transition={{ duration: 5.5, repeat: Infinity }} />
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <BentoGridDemo />
        </section>

        {/* SPECIALISTS */}
        <Specialists />

        {/* ABOUT */}
        <section id="about" className="relative max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-700 to-red-500 bg-clip-text text-transparent">About Us</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                At <span className="font-semibold text-rose-600 dark:text-rose-300">Tathagat Labs</span>, we make diagnostics affordable, accessible, and elder-friendly.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Our Mission",
                  text: "To provide world-class diagnostic care with compassion and affordability.",
                  icon: "❤️",
                },
                {
                  title: "Our Vision",
                  text: "To become the region’s most trusted and patient-friendly diagnostic center.",
                  icon: "🌍",
                },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-neutral-800/60 backdrop-blur-md border border-rose-100 dark:border-neutral-700 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{info.icon}</span>
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {info.text}
                  </p>
                </motion.div>
              ))}

              {/* CORE VALUES */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl bg-white/80 dark:bg-neutral-800/60 backdrop-blur-md border border-rose-100 dark:border-neutral-700 shadow-sm sm:col-span-2"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  Core Values
                </h3>

                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  {coreValues.map((v) => (
                    <li key={v} className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      {v}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="relative max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-rose-700 to-red-500 bg-clip-text text-transparent">
              What Patients Say
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-rose-100 dark:border-neutral-700 shadow-sm"
                >
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-2">
                    <span className="text-3xl text-rose-400">“</span>
                    {t.response}
                    <span className="text-3xl text-rose-400">”</span>
                  </blockquote>
                  <figcaption className="text-right text-gray-800 dark:text-gray-400 text-sm">
                    — {t.name}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </section>

        {/* LOCATION */}
        <section id="location" className="relative max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold">Visit Our Center</h2>
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Our center is located in the heart of <strong>Bengaluru</strong> with wheelchair access and smooth parking.
              </p>

              <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <p className="font-medium text-rose-600 dark:text-rose-300">📍 Tathagat Polyclinic & Diagnostics</p>
                <p>#123, Tathagat Diagnostics Lane, Bengaluru, Karnataka</p>
                <p>⏰ Open Daily: 7:00 AM – 9:00 PM</p>
                <p>📞 <a href="tel:+919900356000" className="hover:text-rose-600">+91 99003 56000</a></p>
              </div>

              <div className="flex justify-center lg:justify-start gap-3 pt-3">
                <a href="https://goo.gl/maps/JgJY7c9VYQpQ9eV97" target="_blank" className="px-4 py-2 text-sm rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-md">Open in Google Maps</a>
                <a href="https://wa.me/919900356000" target="_blank" className="px-4 py-2 text-sm rounded-xl border border-rose-400/60 text-rose-700 dark:text-rose-300">WhatsApp Us</a>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-rose-100 dark:border-neutral-800 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.1361398974555!2d77.5859426!3d13.063531599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1822109d089d%3A0x9494c2da962c21f7!2sTathagat%20Polyclinic%20And%20Diagnostics!5e1!3m2!1sen!2sin!4v1762942907900!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tathagat Labs Location"
              />
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-14 bg-gradient-to-b from-white to-rose-50/40 dark:from-neutral-900 dark:to-neutral-950 border-t border-rose-100/40 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* BRAND */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <img src="/logo.jpeg" alt="Tathagat Labs Logo" width={36} />
                  <h3 className="text-xl font-semibold text-rose-700 dark:text-rose-300">Tathagat Labs</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Transparent, affordable, and elder-friendly diagnostics.
                  Trusted for accurate and compassionate care.
                </p>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  {['Home','Services','About Us','Testimonials','Location'].map(l => (
                    <li key={l}>
                      <a href={`#${l.toLowerCase().replace(/ /g,'')}`} className="hover:text-rose-600 transition">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li><Phone className="inline h-4 w-4 text-rose-500 mr-2" /><a href="tel:+919900356000">+91 99003 56000</a></li>
                  <li><MessageCircle className="inline h-4 w-4 text-red-500 mr-2" /><a href="https://wa.me/919900356000" target="_blank">WhatsApp Us</a></li>
                  <li>info@tathagatlabs.com</li>
                  <li>#123, Tathagat Diagnostics Lane,<br/>Bengaluru, India</li>
                </ul>
              </div>

              {/* HOURS */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Visit Us</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Open daily <span className="font-medium">7:00 AM – 9:00 PM</span></p>
                <a href="https://wa.me/919900356000" target="_blank" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-md text-sm font-medium">
                  <MessageCircle className="w-4 h-4" /> Book a Test
                </a>
              </div>
            </div>

            <div className="border-t border-rose-100/40 dark:border-neutral-800 mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-3">
              <p>© {new Date().getFullYear()} Tathagat Labs. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}