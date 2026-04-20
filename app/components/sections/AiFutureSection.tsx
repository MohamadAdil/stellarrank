"use client";

import FeatureItem from "../ui/FeatureItem";
import { LuBrain } from "react-icons/lu";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { BsLightning } from "react-icons/bs";

export default function AiFutureSection() {
  return (
    <section className="relative bg-[#0b0f14] text-white py-24 overflow-hidden">

      {/* Subtle glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
      </div>

      {/* Container */}
      <div className="relative container text-start">

        {/* Top Tag */}
        <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-gray-400">
          INTELLIGENT BUT ELEGANT
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mt-6 leading-tight">
          Built for the AI-Powered Future <br /> of Travel
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 max-w-2xl text-sm">
          Your brand optimized for both traditional search and AI assistants like ChatGPT and Perplexity.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">

          <FeatureItem
            icon={<LuBrain />}
            title="AI-Optimized Content"
            description="Discoverable within ChatGPT and next-gen search"
          />

          <FeatureItem
            icon={<FiTrendingUp />}
            title="Predictive Analytics"
            description="Forecast trends and optimize pricing"
          />

          <FeatureItem
            icon={<HiOutlineSparkles />}
            title="Smart Personalization"
            description="Tailored experiences for every guest"
          />

          <FeatureItem
            icon={<BsLightning />}
            title="Automated Workflows"
            description="Intelligent automation and chatbots"
          />

        </div>

      </div>
    </section>
  );
}