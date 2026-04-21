"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".parallax-img").forEach((img: any) => {
        gsap.to(img, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.from(".fade-up", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".float-1", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      gsap.to(".float-2", {
        y: -25,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
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
      <div className="max-w-7xl mx-auto px-6">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">

          {/* LEFT TALL IMAGE */}
          <div className="overflow-hidden relative">
            <Image
              src="/assets/images/benefit-1.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/80" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-black">
              <h3 className="font-semibold text-lg">Designed Around You</h3>
              <p className="text-sm text-black/60">
                Every decision is rooted in clarity, not guesswork.
              </p>
            </div>
          </div>

          {/* BLUE CARD */}
          <div className=" p-8 flex flex-col justify-between bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <div>
              <h3 className="text-2xl font-semibold leading-snug">
                Quality Over <br /> Quantity, Always
              </h3>
              <p className="mt-2 text-white/80 text-sm">
                We focus on fewer projects to deliver better outcomes.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <p className="text-xs text-white/70">Priority Support</p>
              </div>

              <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                Support Ticket
              </div>
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="bg-[#f2f2f2] p-6 text-black">
            <h3 className="font-semibold">Tailored Solutions</h3>
            <p className="text-sm text-black/60 mt-2">
              No one-size-fits-all — everything is shaped to fit your goals.
            </p>
          </div>

          {/* BOTTOM LEFT IMAGE */}
          <div className="overflow-hidden relative">
            <Image
              src="/assets/images/benefit-3.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-2xl font-semibold">Collaborative Process</h3>
              <p className="text-sm text-white/70 mt-2">
                We work with you, not just for you.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className=" bg-[#f2f2f2] p-6 text-black relative overflow-hidden">
            <h3 className="font-semibold mb-2">Creative Meets Practical</h3>
            <p className="text-sm text-black/60 mb-6">
              Smart design that actually works in the real world.
            </p>

            <div className="absolute bottom-4 right-4 flex gap-3">
              <div className="w-20 h-24 bg-black/10 rounded-lg" />
              <div className="w-20 h-24 bg-black/20 rounded-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}