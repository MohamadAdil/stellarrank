"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutStackMotionSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const images = gsap.utils.toArray<HTMLElement>([
      ".img-1",
      ".img-2",
      ".img-3",
      ".img-4",
    ]);

    gsap.set(images, {
      x: 0,
      y: 0,
      rotate: 0,
      force3D: true,
      willChange: "transform",
    });

    const getX = (dir: number) =>
      (window.innerWidth * 0.5 - 100) * dir;

    const getY = (dir: number) =>
      (window.innerHeight * 0.5 - 100) * dir;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,

        // ✅ START EXACTLY WHEN SECTION TOUCHES TOP
        start: "top top",

        // ✅ END EXACTLY WHEN SECTION LEAVES
        end: "bottom top",

        // ✅ SMOOTH BUT NOT DELAYED
        scrub: 0.8,

        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(".img-1", {
      x: () => getX(-1),
      y: () => getY(1),
      rotate: -7,
      ease: "power1.out",
    }, 0)
      .to(".img-2", {
        x: () => getX(1),
        y: () => getY(1),
        rotate: 7,
        ease: "power1.out",
      }, 0)
      .to(".img-3", {
        x: () => getX(1),
        y: () => getY(-1),
        rotate: -5,
        ease: "power1.out",
      }, 0)
      .to(".img-4", {
        x: () => getX(-1),
        y: () => getY(-1),
        rotate: 7,
        ease: "power1.out",
      }, 0);

    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] bg-black text-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">

        {/* TEXT */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            A unified ecosystem of web, brand, content & performance
            built exclusively for hospitality
          </h2>

          <div className="mt-6">
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* IMAGES */}

        <div className="img-1 absolute w-44 md:w-72 will-change-transform">
          <Image src="/assets/images/abt-img-1.jpeg" alt="" width={300} height={300} className="shadow-2xl" />
        </div>

        <div className="img-2 absolute w-44 md:w-72 will-change-transform">
          <Image src="/assets/images/abt-img-2.jpeg" alt="" width={300} height={300} className="shadow-2xl" />
        </div>

        <div className="img-3 absolute w-44 md:w-72 will-change-transform">
          <Image src="/assets/images/abt-img-3.jpeg" alt="" width={300} height={300} className="shadow-2xl" />
        </div>

        <div className="img-4 absolute w-44 md:w-72 will-change-transform">
          <Image src="/assets/images/abt-img-4.avif" alt="" width={300} height={300} className="shadow-2xl" />
        </div>

      </div>
    </section>
  );
};

export default AboutStackMotionSection;