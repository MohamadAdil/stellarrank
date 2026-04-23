"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const AboutStackMotionSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.2,
        },
      });

      tl.to(".img-1", {
        x: -400,
        y: 300,
        rotate: -10,
        ease: "none",
      }, 0)
        .to(".img-2", {
          x: 400,
          y: 300,
          rotate: 10,
          ease: "none",
        }, 0)
        .to(".img-3", {
          x: 400,
          y: -300,
          rotate: -8,
          ease: "none",
        }, 0)
        .to(".img-4", {
          x: -400,
          y: -300,
          rotate: 8,
          ease: "none",
        }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center bg-black text-white py-32 overflow-hidden"
    >
      <div className="container flex items-center justify-center relative">

        {/* TEXT */}
        <div className="relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            A unified ecosystem of web, brand, content & performance
            built exclusively for hospitality
          </h2>

          <div className="mt-6">
            <Button
              label="Get Started"
              className="hidden"
              href="#"
              size="lg"
              icon="/assets/icons/arrow-logo.svg"
            />
          </div>
        </div>

        {/* IMAGES */}
        {[
          { cls: "img-1", src: "/assets/images/abt-img-1.jpeg" },
          { cls: "img-2", src: "/assets/images/abt-img-2.jpeg" },
          { cls: "img-3", src: "/assets/images/abt-img-3.jpeg" },
          { cls: "img-4", src: "/assets/images/abt-img-4.avif" },
        ].map((img, i) => (
          <div
            key={i}
            className={`${img.cls} absolute w-72 h-72 md:w-96 md:h-96`}
          >
            <Image
              src={img.src}
              alt=""
              width={400}
              height={400}
              className="shadow-2xl will-change-transform"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutStackMotionSection;