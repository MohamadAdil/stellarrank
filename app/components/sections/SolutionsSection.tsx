"use client";
import { useState } from "react";
import Image from "next/image";

type Solution = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

const solutions: Solution[] = [
  {
    id: "01",
    title: "Branding",
    desc: "Strategic positioning and visual identity systems that capture the essence of luxury hospitality.",
    image: "/assets/images/branding.jpg",
  },
  {
    id: "02",
    title: "Web Experiences",
    desc: "Immersive digital experiences tailored for hospitality brands.",
    image: "/assets/images/web.jpg",
  },
  {
    id: "03",
    title: "Content & Social",
    desc: "Story-driven content that builds emotional connection.",
    image: "/assets/images/content.jpg",
  },
  {
    id: "04",
    title: "Performance Marketing",
    desc: "Data-driven campaigns that maximize ROI.",
    image: "/assets/images/performance.jpg",
  },
  {
    id: "05",
    title: "AI-Optimized Websites",
    desc: "Next-gen websites powered by AI insights.",
    image: "/assets/images/ai.jpg",
  },
];

export default function SolutionsSection() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug">
          An integrated ecosystem of web branding, content, and performance{" "}
          <span className="text-gray-400">
            built for hospitality.
          </span>
        </h2>
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT LIST (Accordion on mobile) */}
        <div className="space-y-4">
          {solutions.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={item.id}
                onClick={() => setActive(index)}
                className={`cursor-pointer p-6 rounded-[8px] border transition-all duration-300
                ${
                  isActive
                    ? "bg-[#1D66CF] border-[#1D66CF]"
                    : "border-transparent hover:border-[#1D66CF] hover:bg-[#1D66CF]"
                }`}
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[12px] leading-[16px] font-normal uppercase text-white/50">
                    {item.id}
                  </p>
                  <span className="text-white/30">—</span>
                </div>

                {/* Title */}
                <h3 className="text-[30px] leading-[36px] tracking-[-1.75px] font-medium text-white">
                  {item.title}
                </h3>

                {/* Accordion content (mobile only) */}
                <div
                  className={`overflow-hidden transition-all duration-500 lg:hidden ${
                    isActive ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[14px] leading-[22.75px] font-light text-white/70 mb-4">
                    {item.desc}
                  </p>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={500}
                    className="w-full h-[220px] object-cover rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT CARD (Desktop only) */}
        <div className="relative hidden lg:block">
          <div className="rounded-xl overflow-hidden shadow-lg">

            <Image
              src={solutions[active].image}
              alt={solutions[active].title}
              width={800}
              height={500}
              className="w-full h-[300px] md:h-[400px] object-cover"
              priority
            />

            <div className="p-6">
              <h3 className="text-[36px] leading-[40px] font-medium text-white mb-2">
                {solutions[active].title}
              </h3>

              <p className="text-[16px] leading-[24px] font-light text-white/70">
                {solutions[active].desc}
              </p>

              {/* Indicators */}
              <div className="flex gap-2 mt-4">
                {solutions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[4px] rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-[48px] bg-[#1D66CF]"
                        : "w-[32px] bg-gray-500/50"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}