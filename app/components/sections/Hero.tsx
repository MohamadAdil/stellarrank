"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state (no flicker)
      gsap.set([".hero-title", ".hero-text", ".hero-btn"], {
        opacity: 0,
        y: 20, // smaller offset = no jump
        force3D: true,
      });

      const tl = gsap.timeline({ delay: 1.2 });

      tl.fromTo(
        ".hero-title",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".hero-text",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-btn",
          { y: 20, opacity: 0 }, // ✅ removed scale
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container">
        <div className="relative z-10 max-w-4xl px-6 text-start">

          <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight will-change-transform">
            Where Hospitality Meets Intelligent Growth.
          </h1>

          <p className="hero-text mt-4 text-lg md:text-xl text-gray-300 will-change-transform">
            An AI-driven development and marketing agency for hospitality, travel & leisure.
          </p>

          <div className="hero-btn mt-8 flex justify-start will-change-transform">
            <Button
              label="Get Started"
              className="hidden md:flex"
              size="lg"
              href="#"
              icon="/assets/icons/arrow-logo.svg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;