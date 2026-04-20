"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function ContactConsultation() {
  return (
    <section className="relative bg-[#0b0f14] text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Container */}
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-semibold leading-[1.1]">
          <span className="block text-gray-300">
            Let&apos;s Build a
          </span>

          <span className="block">
            Hospitality Brand
          </span>

          <span className="block text-gray-400 font-normal">
            Guests Love to Return To.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Schedule a consultation to discuss your goals, challenges, and how we can help you grow.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button label="Schedule Consultation"
            href="#"
            size="lg"
            icon="/assets/icons/arrow-logo.svg" />

          <span className="text-gray-500 text-sm">
            or email hello@stellarrank.com
          </span>

        </div>
      </div>
    </section>
  );
}