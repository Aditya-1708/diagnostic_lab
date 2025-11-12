"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaHeartbeat, FaMicroscope, FaArrowRight } from "react-icons/fa";

export function ThreeDCardDemo() {
  return (
    <CardContainer containerClassName="my-16">
      <CardBody
        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-xl 
        dark:bg-neutral-900/70 dark:border-white/10 w-full sm:w-[28rem] hover:shadow-purple-500/20 transition-all duration-300"
      >
        {/* Title */}
        <CardItem
          translateZ={60}
          className="flex items-center gap-3 text-2xl font-bold text-gray-800 dark:text-white"
        >
          <FaMicroscope className="text-purple-600" />
          <span>Tathagat Diagnostics</span>
        </CardItem>

        {/* Subtext */}
        <CardItem
          translateZ={80}
          as="p"
          className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-sm"
        >
          Precision-driven, patient-friendly diagnostics. From ECG to blood
          tests — experience seamless sample collection, accurate results, and
          digital delivery in hours.
        </CardItem>

        {/* Image preview */}
        <CardItem
          translateZ={120}
          rotateX={10}
          rotateZ={-5}
          className="mt-6 w-full rounded-xl overflow-hidden"
        >
          <img
            src="/scan.avif"
            alt="Tathagat Labs Diagnostic Center"
            className="rounded-xl w-full h-56 object-cover transition-transform duration-300 group-hover/card:scale-105"
          />
        </CardItem>

        {/* CTA Buttons */}
        <div className="flex justify-between items-center mt-8">
          <CardItem translateZ={20} translateX={-30}>
            <button className="px-5 py-2 rounded-xl border border-purple-500/40 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200">
              Book a Test
            </button>
          </CardItem>

          <CardItem translateZ={20} translateX={30}>
            <button className="px-5 py-2 rounded-xl border border-purple-500/40 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-200">
              Contact Us
            </button>
          </CardItem>
        </div>

        {/* Decorative glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-500/10 via-transparent to-fuchsia-400/10 rounded-2xl blur-3xl"></div>

        {/* Subtle pulse animation */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>
      </CardBody>
    </CardContainer>
  );
}
