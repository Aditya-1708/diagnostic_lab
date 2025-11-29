"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const specialists = [
  { name: "General Physician", icon: "👨‍⚕️" },
  { name: "Diabetologist", icon: "🩸" },
  { name: "Pediatrician", icon: "👶" },
  { name: "Gynecologist", icon: "👩‍⚕️" },
  { name: "Orthopedic", icon: "🦴" },
  { name: "Dermatologist", icon: "🧴" },
  { name: "ENT Specialist", icon: "👂" },
  { name: "Psychiatrist", icon: "🧠" },
  { name: "Radiologist", icon: "☢️" },
  { name: "Physiotherapist", icon: "🤸" },
  { name: "Cardiologist", icon: "❤️" },
];

export function Specialists() {
  return (
    <section id="specialists" className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose-700 to-red-500 bg-clip-text text-transparent mb-4">
          Our Specialists
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Expert care from top specialists. Book an appointment easily via WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {specialists.map((specialist, index) => (
          <motion.div
            key={specialist.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-rose-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
          >
            <div className="text-4xl mb-4 bg-rose-50 dark:bg-rose-900/20 w-16 h-16 rounded-full flex items-center justify-center">
              {specialist.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {specialist.name}
            </h3>
            
            <Link
              href={`https://wa.me/919900356000?text=Hi, I would like to book an appointment with a ${specialist.name}`}
              target="_blank"
              className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors text-sm font-medium w-full justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Book Appointment
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
