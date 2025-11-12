"use client";

import { BentoGridDemo } from "@/components/BentoDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { motion, Variants } from "framer-motion";
import {
  ChevronRight,
  HeartPulse,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// Reusable motion presets
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Brand constants
const theme = {
  accentGradient: "from-sky-600 to-cyan-500",
  glowLight: "bg-sky-200/20",
  glowDark: "bg-cyan-200/20",
  border: "border-sky-100 dark:border-cyan-900/40",
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
    response:
      "Very quick and old-age friendly lab. They guided me very patiently.",
  },
  {
    name: "Lakshmi Narayan",
    response:
      "The home sample collection was smooth. Technician was polite and well trained.",
  },
  {
    name: "Sushma Devi",
    response:
      "Reports were delivered on WhatsApp within a few hours. Very convenient for elders.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fcff] text-gray-900 dark:bg-neutral-950 dark:text-white relative overflow-hidden">
      <NavbarDemo />

      {/* BACKGROUND LIGHTS */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={`absolute -top-24 -right-16 h-64 w-64 rounded-full ${theme.glowLight} blur-3xl`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className={`absolute top-40 -left-16 h-72 w-72 rounded-full ${theme.glowDark} blur-3xl`}
        />
      </div>

      <main className="pt-24">
        {/* HERO SECTION */}
        <section
          id="home"
          className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-10"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow-sm mx-auto lg:mx-0"
            >
              <Shield className="h-4 w-4 text-sky-600" />
              <span className="text-sm font-medium text-gray-700">
                NABL-grade accuracy • Elder-friendly service
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Diagnostics with{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.accentGradient}`}
              >
                Heart & Precision
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-700/90 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Bringing world-class diagnostic technology to your doorstep —
              fast, accurate, and filled with care.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start gap-4 flex-wrap pt-2"
            >
              <Link
                href="https://wa.me/919900356000"
                target="_blank"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-6" />
                Book Test
                <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="tel:+919900356000"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-sky-200 text-sky-700 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5 transition-transform group-hover:-rotate-6" />
                Call Now
              </Link>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative flex justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-[18rem] sm:w-[24rem] md:w-[26rem] h-[20rem] md:h-[26rem]">
              <motion.img
                src="/ecg.jpg"
                alt="ECG Diagnostics"
                className="absolute top-0 left-0 w-36 sm:w-44 h-36 sm:h-44 rounded-xl object-cover shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/bt.webp"
                alt="Blood Test"
                className="absolute bottom-0 left-10 w-40 sm:w-48 h-40 sm:h-48 rounded-xl object-cover shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/scan.avif"
                alt="Scanning"
                className="absolute top-10 right-0 w-36 sm:w-44 h-36 sm:h-44 rounded-xl object-cover shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200/20 to-cyan-200/30 blur-3xl" />
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <BentoGridDemo />
        </section>

        {/* ABOUT US */}
        <section
          id="about"
          className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 overflow-hidden"
        >
          {/* Decorative background glows */}
          <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-10 left-10 w-72 h-72 bg-sky-200/20 blur-3xl rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {/* Intro Column */}
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-700 to-cyan-500 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                At{" "}
                <span className="font-semibold text-sky-600 dark:text-sky-300">
                  Tathagat Labs
                </span>
                , we believe that compassionate care and medical precision go
                hand-in-hand. Our mission is to make diagnostics affordable,
                accessible, and anxiety-free for everyone — especially elders.
              </p>
            </div>

            {/* Mission / Vision / Values Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Our Mission",
                  text: "To provide world-class diagnostic care with compassion, transparency, and affordability — ensuring every patient feels cared for.",
                  icon: "💙",
                },
                {
                  title: "Our Vision",
                  text: "To become the region’s most trusted and patient-friendly diagnostic center, setting the gold standard in ethical healthcare.",
                  icon: "🌍",
                },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-800/60 backdrop-blur-md border border-sky-100 dark:border-neutral-700 shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{info.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {info.text}
                  </p>
                </motion.div>
              ))}

              {/* Core Values */}
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-800/60 backdrop-blur-md border border-sky-100 dark:border-neutral-700 shadow-sm sm:col-span-2"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Core Values
                  </h3>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300 mt-2">
                  {coreValues.map((value) => (
                    <li key={value} className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      {value}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 overflow-hidden"
        >
          {/* Glow Background */}
          <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-10 left-0 w-96 h-96 bg-sky-300/20 blur-3xl rounded-full" />
            <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-sky-700 to-cyan-500 bg-clip-text text-transparent">
              What Patients Say
            </h2>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group p-6 rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-sky-100 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all"
                >
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    <span className="text-3xl text-sky-400">“</span>
                    {t.response}
                    <span className="text-3xl text-sky-400">”</span>
                  </blockquote>
                  <figcaption className="text-right font-medium text-gray-800 dark:text-gray-400">
                    — {t.name}
                  </figcaption>

                  {/* Decorative hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-sky-400/10 to-cyan-400/10 blur-xl -z-10" />
                </motion.figure>
              ))}
            </div>

            {/* Subtext */}
            <p className="text-center text-gray-600 dark:text-gray-400 mt-10 text-sm max-w-xl mx-auto">
              Every story matters. At Tathagat Labs, patient trust and
              satisfaction drive our purpose.
            </p>
          </motion.div>
        </section>

        {/* LOCATION SECTION */}
        <section
          id="location"
          className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          >
            <div className="absolute top-20 left-0 w-72 h-72 bg-sky-300/20 blur-3xl rounded-full" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Visit Our Center
              </h2>

              <p className="text-gray-700/90 dark:text-gray-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Our center is built for comfort, accuracy, and accessibility —
                right in the heart of <strong>Bengaluru</strong>. We ensure
                smooth parking, wheelchair access, and stress-free visits.
              </p>

              <div className="mt-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <p className="font-medium text-sky-700 dark:text-sky-300">
                  📍 Tathagat Polyclinic & Diagnostics
                </p>
                <p>
                  #123, Tathagat Diagnostics Lane, Bengaluru, Karnataka, India
                </p>
                <p>
                  ⏰ <span className="font-medium">Open Daily:</span> 7:00 AM –
                  9:00 PM
                </p>
                <p>
                  📞{" "}
                  <a
                    href="tel:+919900356000"
                    className="hover:text-sky-600 transition"
                  >
                    +91 99003 56000
                  </a>
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-3 pt-4 flex-wrap">
                <a
                  href="https://goo.gl/maps/JgJY7c9VYQpQ9eV97"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Open in Google Maps
                </a>
                <a
                  href="https://wa.me/919900356000"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl border border-sky-400/60 text-sky-700 dark:text-sky-300 text-sm font-medium backdrop-blur-sm hover:bg-sky-50/30 dark:hover:bg-neutral-800/50 transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-sky-100 dark:border-neutral-800 shadow-lg bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.1361398974555!2d77.5859426!3d13.063531599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1822109d089d%3A0x9494c2da962c21f7!2sTathagat%20Polyclinic%20And%20Diagnostics!5e1!3m2!1sen!2sin!4v1762942907900!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-2xl"
                title="Tathagat Labs Location"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative mt-20 bg-gradient-to-b from-white to-sky-50/40 dark:from-neutral-900 dark:to-neutral-950 border-t border-sky-100/40 dark:border-neutral-800/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* BRAND INFO */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/logo.png" alt="Tathagat Labs Logo" width={36} />
                  <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-300">
                    Tathagat Labs
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Transparent, affordable, and elder-friendly diagnostics.
                  Trusted by thousands for accurate, compassionate care.
                </p>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  {["Home", "Services", "About Us", "Testimonials"].map(
                    (label) => (
                      <li key={label}>
                        <a
                          href={`#${label.toLowerCase().replace(" ", "")}`}
                          className="hover:text-sky-600 transition"
                        >
                          {label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* CONTACT INFO */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>
                    <Phone className="inline h-4 w-4 text-sky-500 mr-2" />
                    <a href="tel:+919900356000">+91 99003 56000</a>
                  </li>
                  <li>
                    <MessageCircle className="inline h-4 w-4 text-cyan-500 mr-2" />
                    <a
                      href="https://wa.me/919900356000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Us
                    </a>
                  </li>
                  <li>info@tathagatlabs.com</li>
                  <li>
                    #123, Tathagat Diagnostics Lane, <br /> Bengaluru, India
                  </li>
                </ul>
              </div>

              {/* HOURS */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Visit Us</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Open daily from{" "}
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    7:00 AM – 9:00 PM
                  </span>
                </p>
                <a
                  href="https://wa.me/919900356000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Test
                </a>
              </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="border-t border-sky-100/40 dark:border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-3">
              <p>
                © {new Date().getFullYear()} Tathagat Labs. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>

          {/* BLUR GLOWS */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-sky-300/20 blur-3xl rounded-full" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-200/20 blur-3xl rounded-full" />
        </footer>
      </main>
    </div>
  );
}
