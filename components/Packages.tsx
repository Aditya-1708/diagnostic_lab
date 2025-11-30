"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "Basic Health Checkup",
    price: "₹999",
    features: [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    title: "Comprehensive Wellness",
    price: "₹1,999",
    features: [
      "All Basic Features",
      "Thyroid Profile (T3, T4, TSH)",
      "HbA1c (Diabetes Monitor)",
      "Urine Routine & Microscopy",
      "Vitamin D & B12",
    ],
    color: "from-rose-500 to-red-500",
    popular: true,
  },
  {
    title: "Senior Citizen Care",
    price: "₹2,499",
    features: [
      "All Comprehensive Features",
      "Cardiac Risk Markers",
      "Bone Health Profile",
      "Iron Deficiency Profile",
      "Doctor Consultation Included",
    ],
    color: "from-emerald-500 to-green-500",
    popular: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300">
          Health Packages
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose a package that suits your needs. Affordable, comprehensive, and accurate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-3xl border bg-white dark:bg-neutral-900 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col ${
              pkg.popular
                ? "border-rose-200 dark:border-rose-900 scale-105 z-10"
                : "border-slate-100 dark:border-neutral-800"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {pkg.title}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${pkg.color}`}>
                  {pkg.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">/person</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-r ${pkg.color} bg-opacity-10`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`https://wa.me/919900356000?text=Hi, I am interested in the ${pkg.title} package.`}
              target="_blank"
              className={`w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${pkg.color}`}
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
