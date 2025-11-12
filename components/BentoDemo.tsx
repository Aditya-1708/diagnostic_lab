"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconHeartPause,
  IconActivityHeartbeat,
  IconStethoscope,
  IconRun,
  IconDroplet,
  IconScan,
  IconClipboardCopy,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Our Diagnostic Services
      </h2>

      <BentoGrid className="max-w-6xl mx-auto px-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 3 || i === 6
                ? "md:col-span-2"
                : "" /* Makes TMT and Delivery wider */
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// ✅ Bento data
const items = [
  {
    title: "Doctor Consultation",
    description:
      "Get personalized guidance and medical advice from qualified professionals for accurate diagnostics and treatment plans.",
    header: (
      <img
        src="/consultation.jpeg"
        alt="Doctor Consultation"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconStethoscope className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "ECG (Electrocardiogram)",
    description:
      "Quick and painless heart rhythm analysis to detect irregularities and monitor cardiovascular health.",
    header: (
      <img
        src="/ecg.jpg"
        alt="ECG test"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconActivityHeartbeat className="h-5 w-5 text-rose-500" />,
  },
  {
    title: "ECHO (Echocardiogram)",
    description:
      "High-precision imaging of your heart using ultrasound to evaluate structure, motion, and blood flow.",
    header: (
      <img
        src="/echo.webp"
        alt="Echocardiogram test"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconHeartPause className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Treadmill Test (TMT)",
    description:
      "Monitored exercise stress test to assess heart function and detect coronary artery blockages.",
    header: (
      <img
        src="/tmt.jpeg"
        alt="Treadmill Test"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconRun className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: "Blood Tests",
    description:
      "Comprehensive lab analysis for glucose, cholesterol, thyroid, and more — all done with hygienic, single-use kits.",
    header: (
      <img
        src="/bt.webp"
        alt="Blood Tests"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconDroplet className="h-5 w-5 text-sky-500" />,
  },
  {
    title: "Scans & Imaging",
    description:
      "State-of-the-art digital imaging services including X-rays, ultrasounds, and advanced radiological scans.",
    header: (
      <img
        src="/scan.avif"
        alt="Scans and Imaging"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconScan className="h-5 w-5 text-indigo-500" />,
  },
  {
    title: "Report Delivery & Records",
    description:
      "Get your reports delivered securely via WhatsApp or email — accessible 24×7 from anywhere.",
    header: (
      <img
        src="/delivery.jpg"
        alt="Report Delivery"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-5 w-5 text-fuchsia-500" />,
  },
];
