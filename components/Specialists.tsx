"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const specialists = [
  { name: "General Physician", icon: "👨‍⚕️", color: "from-blue-400 to-blue-600" },
  { name: "Diabetologist", icon: "🩸", color: "from-red-400 to-red-600" },
  { name: "Pediatrician", icon: "👶", color: "from-yellow-400 to-orange-500" },
  { name: "Gynecologist", icon: "👩‍⚕️", color: "from-pink-400 to-rose-500" },
  { name: "Orthopedic", icon: "🦴", color: "from-stone-400 to-stone-600" },
  { name: "Dermatologist", icon: "🧴", color: "from-amber-400 to-amber-600" },
  { name: "ENT Specialist", icon: "👂", color: "from-cyan-400 to-cyan-600" },
  { name: "Psychiatrist", icon: "🧠", color: "from-violet-400 to-purple-600" },
  { name: "Radiologist", icon: "☢️", color: "from-emerald-400 to-teal-600" },
  { name: "Physiotherapist", icon: "🤸", color: "from-lime-400 to-green-600" },
  { name: "Cardiologist", icon: "❤️", color: "from-rose-500 to-red-600" },
];

export function Specialists() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  const handleBookClick = (specialistName: string) => {
    if (selectedSpecialist === specialistName) {
      setSelectedSpecialist(null); // Close if already open
    } else {
      setSelectedSpecialist(specialistName);
      setName("");
      setReason("");
    }
  };

  return (
    <section id="specialists" className="relative py-20 overflow-hidden">
      {/* Background Blobs for Glassmorphism Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-300/30 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-orange-300/30 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-red-300/30 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 text-sm font-semibold mb-4">
            Expert Care
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Meet Our Specialists
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Connect with top-tier medical professionals across various specializations.
            Book your appointment instantly via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => {
            const isSelected = selectedSpecialist === specialist.name;

            return (
              <motion.div
                layout
                key={specialist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`
                  relative p-6 rounded-3xl transition-all duration-300
                  ${isSelected
                    ? "bg-red-100/80 dark:bg-red-900/30 ring-2 ring-red-500 shadow-xl z-10"
                    : "bg-red-100/50 dark:bg-red-950/20 hover:bg-red-100/70 dark:hover:bg-red-900/30 border border-red-200/50 dark:border-red-900/20 shadow-lg backdrop-blur-md"
                  }
                `}
              >
                <motion.div layout="position" className="flex flex-col items-center text-center">
                  <div className={`
                    w-20 h-20 mb-4 rounded-2xl flex items-center justify-center text-4xl shadow-inner
                    bg-gradient-to-br ${specialist.color} bg-opacity-10
                  `}>
                    <div className="bg-white/90 dark:bg-black/20 w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {specialist.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {specialist.name}
                  </h3>

                  {!isSelected && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => handleBookClick(specialist.name)}
                      className="mt-2 text-rose-600 dark:text-rose-400 font-medium text-sm hover:underline decoration-2 underline-offset-4"
                    >
                      Book Appointment →
                    </motion.button>
                  )}
                </motion.div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-red-50 dark:bg-neutral-900/50 border border-red-200 dark:border-neutral-700 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                            autoFocus
                          />
                        </div>

                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
                          <input
                            type="text"
                            placeholder="Reason for Visit"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-red-50 dark:bg-neutral-900/50 border border-red-200 dark:border-neutral-700 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                          />
                        </div>

                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => setSelectedSpecialist(null)}
                            className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-neutral-800 transition-colors"
                          >
                            Cancel
                          </button>
                          <Link
                            href={`https://wa.me/919343103103?text=${encodeURIComponent(
                              `Hi, I would like to book an appointment with a ${specialist.name}.\nName: ${name}\nReason: ${reason}`
                            )}`}
                            target="_blank"
                            className="flex-[2] py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white text-sm font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Confirm
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
