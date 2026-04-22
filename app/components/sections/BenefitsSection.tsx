"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // CARD ANIMATION (main)
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // SMALL FLOATING EFFECT (images)
      gsap.to(".float-slow", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-fast", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-[#1f1f1f] text-white relative"
    >
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold fade-up">
            Our Benefits
          </h2>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto fade-up">
            Where insight meets execution and strategy drives results — this is
            what sets us apart and defines how we deliver real value for every
            client.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          {/* A */}
          <div className="md:col-span-2 p-8 bg-[linear-gradient(199.15deg,#FAFAFA_0%,#F4F4F4_100%)] fade-up card">
            <div className="relative w-full mx-auto mb-4 flex items-center justify-center ">
              <Image src="/assets/images/benefit-1.jpg" alt="" width={220} height={178} className="h-auto object-contain" />
            </div>

            <h3 className="font-inter font-medium text-[21.9px] leading-[28.8px] mb-3 text-black">
              Designed Around You
            </h3>
            <p className="text-[14.3px] text-black mb-0">
              Every decision is rooted in clarity, not guesswork.
            </p>
          </div>
          {/* B */}
          <div className="md:col-span-2 flex flex-col gap-2 relative overflow-hidden fade-up card">

            {/* Blue Card */}
            <div className="relative z-10 overflow-hidden  p-8 bg-[#1D66CF] text-white flex flex-col gap-[60px] fade-up">
              {/* Radial Glow */}
              <div className="absolute w-[400px] h-[400px] top-[100px] -left-[120px] bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>
              <h3 className="text-[29px] leading-[38px]">
                Quality Over <br /> Quantity, Always
              </h3>

              <p className="text-right text-[14px]">
                We focus on fewer projects to deliver better outcomes.
              </p>
            </div>

            {/* Black Card */}
            <div className="p-8 flex justify-between items-center bg-[linear-gradient(152.74deg,#000,#383838)] text-white flex-1 fade-up">

              <div>
                <div className="text-[40px]">24/7</div>
                <p className="text-[14px]">Priority Support</p>
              </div>

              <div className="bg-white px-4 py-3 rounded-xl flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FF5100] rounded-full flex items-center justify-center">
                  <FiMessageCircle className="text-white text-sm" />
                </div>

                <div>
                  <span className="text-black text-sm">Stellar</span>
                  <p className="text-xs text-gray-500">Support Ticket</p>
                </div>
              </div>

            </div>

          </div>
          {/* C */}
          <div className="md:col-span-2 relative p-8 bg-[linear-gradient(199.15deg,#FAFAFA_0%,#F4F4F4_100%)] overflow-hidden fade-up card">
            <div className="absolute inset-0">
              <Image src="/assets/images/benefit-2.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-white/30 border-[30px] border-white/20"></div>

            <div className="relative z-10">
              <h3 className="text-[21.9px] text-black">Tailored Solutions</h3>
              <p className="text-[14px] mt-2 text-black">
                No one-size-fits-all — everything is shaped to fit your goals.
              </p>
            </div>
          </div>
          {/* D (full half width) */}
          <div className="md:col-span-3 relative p-8 overflow-hidden flex  items-end min-h-[320px] fade-up card">
            <div className="absolute inset-0">
              <Image src="/assets/images/benefit-3.jpg" alt="" fill className="object-cover grayscale" />
            </div>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white flex justify-between items-end gap-2 w-full">
              <h3 className="text-[22px]">
                Collaborative <br /> Process
              </h3>
              <p className="text-[14px] mt-2">
                We work with you, not just for you.
              </p>
            </div>
          </div>
          {/* E (full half width) */}
          <div className="md:col-span-3 p-8 flex justify-between items-center bg-[linear-gradient(199.15deg,#FAFAFA_0%,#F4F4F4_100%)] min-h-[320px] fade-up card">

            <div className="flex gap-2 justify-between flex-col h-full">
              <div className="flex gap-2 mb-3">
                <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
                <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
                <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
              </div>

              <div>
                <h3 className="text-[21.9px] text-black">
                  Creative Meets <br /> Practical
                </h3>

                <p className="text-[14px] mt-2 text-black">
                  Smart design that actually works in the real world.
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-[270px] h-[200px]">
              <div className="absolute w-[173px] h-[150px] -rotate-6 border-6 border-white right-0 top-4 z-1">
                <Image src="/assets/images/benefit-4.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="absolute w-[173px] h-[150px] rotate-6 border-6 border-white left-0 top-4 z-0">
                <Image src="/assets/images/benefit-5.jpg" alt="" fill className="object-cover" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section >
  );
}