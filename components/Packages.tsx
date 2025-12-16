"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "GENERAL CHECKUP 1",
    total: "₹1200",
    discount: "₹200",
    price: "₹1000",
    features: [
      "FBS (Fasting Blood Sugar)",
      "PPBS (Post Prandial Blood Sugar)",
      "HbA1C (Glycosylated Haemoglobin)",
      "Lipid Profile Test (LPT)",
      "Urine Routine",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "MINI GENERAL CHECKUP",
    total: "₹3600",
    discount: "₹1000",
    price: "₹2600",
    features: [
      "FBS",
      "PPBS",
      "HbA1C",
      "CBC (Complete Blood Count)",
      "Blood Urea",
      "Serum Creatinine",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Routine",
      "ECG",
    ],
    color: "from-purple-500 to-indigo-500",
    popular: true,
  },
  {
    title: "MINI GENERAL CHECKUP - 2",
    total: "₹3600",
    discount: "₹1100",
    price: "₹2500",
    features: [
      "FBS",
      "PPBS",
      "HbA1C",
      "CBC",
      "Renal Function Test (RFT)",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Routine",
      "ECG",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DIABETIC HEALTH PACKAGE - 2",
    total: "₹4650",
    discount: "₹1300",
    price: "₹3350",
    features: [
      "CBC",
      "RBS (Random Blood Sugar)",
      "FBS",
      "PPBS",
      "Liver Function Test",
      "Renal Function Test",
      "HbA1C",
      "TFT (Thyroid Profile)",
      "Lipid Profile Test",
      "EGFR",
      "Urine Analysis",
      "Urine Microalbuminurea",
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "MASTER HEALTH CHECKUP",
    total: "₹6100",
    discount: "₹1900",
    price: "₹4200",
    features: [
      "CBC",
      "FBS",
      "PPBS",
      "RFT",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Analysis",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "TFT",
      "HbA1C",
    ],
    color: "from-yellow-500 to-orange-500",
    popular: true,
  },
  {
    title: "DIABETIC HEALTH PACKAGE",
    total: "₹6650",
    discount: "₹2000",
    price: "₹4650",
    features: [
      "CBC",
      "RBS",
      "FBS",
      "PPBS",
      "Liver Function Test",
      "Renal Function Test",
      "HbA1C",
      "TFT",
      "Lipid Profile Test",
      "Vitamin B-12",
      "Vitamin D-3",
      "EGFR",
      "Urine Analysis",
      "Urine Microalbuminurea",
    ],
    color: "from-lime-500 to-teal-500",
  },
  {
    title: "TATHAGAT SILVER HEALTH CHECKUP",
    total: "₹8400",
    discount: "₹2800",
    price: "₹5600",
    features: [
      "CBC",
      "ESR",
      "HbA1C",
      "Blood Group & RH Type",
      "FBS",
      "PPBS",
      "RFT",
      "LPT",
      "LFT",
      "Urine Analysis",
      "TFT",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "Ultrasound Scan",
      "Chest X-Ray",
    ],
    color: "from-lime-500 to-teal-500",
  },
  {
    title: "TATHAGAT GOLD HEALTH CHECKUP",
    total: "₹10200",
    discount: "₹3400",
    price: "₹6800",
    features: [
      "CBC",
      "ESR",
      "HbA1C",
      "Blood Group & RH Type",
      "FBS",
      "PPBS",
      "RFT",
      "LPT",
      "LFT",
      "Urine Analysis",
      "TFT",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "2D Echo",
      "Ultrasound Scan",
      "Chest X-Ray",
    ],
    color: "from-amber-500 to-yellow-600",
    popular: true,
  },
  {
    title: "TATHAGAT DIAMOND HEALTH CHECKUP",
    total: "₹12000",
    discount: "₹4000",
    price: "₹8000",
    features: [
      "CBC",
      "ESR",
      "Blood Group & RH Type",
      "FBS",
      "PPBS",
      "HbA1C",
      "RFT",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Analysis",
      "TFT",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "2D Echo",
      "TMT",
      "Ultrasound Scan",
      "Chest X-Ray",
    ],
    color: "from-sky-500 to-indigo-500",
    popular: true,
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
          Choose a package that suits your needs. Affordable, comprehensive, and
          accurate.
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
            className={`relative p-8 rounded-3xl border bg-red-100/50 dark:bg-red-950/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col ${pkg.popular
                ? "border-red-200 dark:border-red-900 scale-105 z-10"
                : "border-red-200 dark:border-red-900/50"
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
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${pkg.color}`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.total && (
                    <span
                      className="text-red-500 dark:text-red-400 
                   line-through text-xl font-semibold
                   opacity-80"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, -2, 2, -2, 2, 0] }}
                        transition={{ duration: 0.4 }}
                        className="text-red-500 line-through text-xl font-semibold opacity-80"
                      >
                        {pkg.total}
                      </motion.span>
                    </span>
                  )}
                </div>
                {pkg.discount && (
                  <div
                    className="mt-2 inline-flex items-center gap-1 self-start
                  px-3 py-1 rounded-full text-xs font-bold
                  bg-green-100 text-green-700
                  dark:bg-green-900/40 dark:text-green-300
                  animate-pulse"
                  >
                    💰 You Save {pkg.discount}
                  </div>
                )}
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-3 mb-8 flex-1">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-xs font-medium"
                >
                  <div
                    className={`mt-0.5 p-0.5 rounded-full bg-gradient-to-r ${pkg.color} bg-opacity-10 shrink-0`}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="leading-tight">{feature}</span>
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
