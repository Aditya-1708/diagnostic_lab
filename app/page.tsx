"use client";

import { BentoGridDemo } from "@/components/BentoDemo";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Packages } from "@/components/Packages";
import { Specialists } from "@/components/Specialists";
import { motion, Variants } from "framer-motion";
import { ChevronRight, MessageCircle, Phone, Shield } from "lucide-react";
import Link from "next/link";

/* Motion presets */
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
  "Accuracy",
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
    <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">
      <NavbarDemo />

      <main className="pt-12 md:pt-20">
        {/* HERO */}
        <section
          id="home"
          className="max-w-7xl mx-auto px-5 sm:px-8 py-6 md:py-16 flex flex-col lg:flex-row items-center gap-10"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left space-y-5"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-red-600">
                Tathagat polyclonic
              </span>
              , diagnostics and diabetes centre
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
              className="flex justify-center lg:justify-start gap-4 flex-wrap pt-1"
            >
              <Link
                href="https://wa.me/919343103103"
                target="_blank"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-gradient-to-br from-rose-600 via-red-500 to-red-600
                text-white shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Book Test
                <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="tel:+919343103103"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-rose-50/80 backdrop-blur border border-rose-200
                text-rose-700 hover:bg-rose-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5 group-hover:-rotate-6 transition-transform" />
                Call Now
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full
              bg-white/70 backdrop-blur-md border border-rose-200 shadow-sm mx-auto lg:mx-0"
            >
              <Shield className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700">
                NABL-grade accuracy • Elder-friendly service
              </span>
            </motion.div>
          </motion.div>

          {/* HERO IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative flex justify-center mt-6 lg:mt-0"
          >
            <div className="relative w-[18rem] sm:w-[24rem] md:w-[26rem] h-[20rem] md:h-[26rem]">
              {["/ecg.jpg", "/bt.webp", "/tmt.jpeg"].map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  className="absolute rounded-xl object-cover shadow-lg"
                  style={{
                    width: i === 1 ? "11rem" : "9rem",
                    height: i === 1 ? "11rem" : "9rem",
                    top: i === 0 ? 0 : i === 2 ? "2.5rem" : "auto",
                    bottom: i === 1 ? 0 : "auto",
                    left: i !== 2 ? "2rem" : "auto",
                    right: i === 2 ? 0 : "auto",
                  }}
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* PACKAGES */}
        <Packages />

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <BentoGridDemo />
        </section>

        {/* SPECIALISTS */}
        <Specialists />
        {/* ABOUT */}
        <section
          id="about"
          className="relative max-w-7xl mx-auto px-5 sm:px-8 py-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="space-y-3 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-700 to-red-500 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                At{" "}
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  Tathagat Labs
                </span>
                , we make diagnostics affordable, accessible, and
                elder-friendly.
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
        <section
          id="testimonials"
          className="max-w-7xl mx-auto px-5 sm:px-8 py-14"
        >
          <h2
            className="text-center text-4xl sm:text-5xl font-bold mb-8
            bg-gradient-to-r from-rose-700 via-red-600 to-red-500
            bg-clip-text text-transparent"
          >
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
                className="p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/80
                border border-rose-100 shadow-sm"
              >
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-2">
                  <span className="text-3xl text-red-400">“</span>
                  {t.response}
                  <span className="text-3xl text-red-400">”</span>
                </blockquote>
                <figcaption className="text-right text-sm text-gray-600">
                  — {t.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="w-full bg-neutral-50 dark:bg-neutral-950 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <span
                className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-medium
        bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
              >
                Our Location
              </span>

              <h2 className="text-3xl font-semibold text-red-600 dark:text-red-400">
                Visit Tathagat Polyclinic & Diagnostics
              </h2>

              <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md">
                Conveniently located with easy accessibility, our clinic offers
                modern diagnostics and patient-focused healthcare services.
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    Address:
                  </span>{" "}
                  Bengaluru, Karnataka, India
                </p>
                <p>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    Timings:
                  </span>{" "}
                  Mon – Sat · 9:00 AM – 8:00 PM
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Tathagat+Polyclinic+And+Diagnostics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
          bg-gradient-to-r from-red-600 to-rose-600
          text-white text-sm font-medium
          shadow-md hover:shadow-lg hover:scale-[1.02]
          transition-all"
              >
                Get Directions →
              </a>
            </div>

            {/* Right: Map */}
            <div
              className="w-full h-[420px] rounded-3xl overflow-hidden
      border border-red-200 dark:border-red-900/40
      shadow-sm"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5624020068663!2d77.5859567!3d13.0635029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1822109d089d%3A0x9494c2da962c21f7!2sTathagat%20Polyclinic%20And%20Diagnostics!5e0!3m2!1sen!2sin!4v1765875961443!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="mt-14 bg-gradient-to-b from-white via-rose-50/40 to-red-50/50
  dark:from-neutral-900 dark:via-red-950/30 dark:to-neutral-950
  border-t border-rose-100/40 dark:border-neutral-800/60"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* BRAND */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <img src="/logo.jpeg" alt="Tathagat Labs Logo" width={36} />
                  <h3
                    className="text-xl font-semibold text-transparent bg-clip-text
            bg-gradient-to-r from-rose-600 via-red-500 to-red-600"
                  >
                    Tathagat Labs
                  </h3>
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
                  {[
                    "Home",
                    "Services",
                    "About Us",
                    "Testimonials",
                    "Location",
                  ].map((l) => (
                    <li key={l}>
                      <a
                        href={`#${l.toLowerCase().replace(/ /g, "")}`}
                        className="hover:text-red-600 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>
                    <Phone className="inline h-4 w-4 text-red-500 mr-2" />
                    <a href="tel:+919343103103">+91 93431 03103</a>
                  </li>
                  <li>
                    <MessageCircle className="inline h-4 w-4 text-red-500 mr-2" />
                    <a href="https://wa.me/919343103103" target="_blank">
                      WhatsApp Us
                    </a>
                  </li>
                  <li>info@tathagatlabs.com</li>
                  <li>
                    #123, Tathagat Diagnostics Lane,
                    <br />
                    Bengaluru, India
                  </li>
                  <li>Landline: 080-23624484</li>
                </ul>
              </div>

              {/* HOURS & CTA */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Visit Us</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Open daily{" "}
                  <span className="font-medium">7:00 AM – 9:00 PM</span>
                </p>

                <a
                  href="https://wa.me/919343103103"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
          bg-gradient-to-br from-rose-600 via-red-500 to-red-600
          text-white shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Test
                </a>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div
              className="border-t border-rose-100/50 dark:border-neutral-800 mt-10 pt-5
      flex flex-col sm:flex-row items-center justify-between text-sm
      text-gray-500 dark:text-gray-400 gap-3"
            >
              <p className="text-xs text-neutral-500 leading-relaxed">
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-neutral-600">
                  Tathagat Labs
                </span>
                . All rights reserved.
                <span className="block mt-1">
                  <a
                    href="https://www.instagram.com/brandstorysocials?igsh=MXFoamFnNWpoZDR3cA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-red-500 transition-colors duration-200"
                  >
                    Crafted by{" "}
                    <span className="font-medium">Brand Story Socials</span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
