"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const AboutStackMotionSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      });

      const getBounds = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        return {
          width: rect?.width || window.innerWidth,
          height: rect?.height || window.innerHeight,
        };
      };

      const getX = (dir: number) => {
        const { width } = getBounds();
        return (width * 0.4) * dir; // ✅ limited inside container
      };

      const getY = (dir: number) => {
        const { height } = getBounds();
        return (height * 0.4) * dir;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".img-1", {
        x: () => getX(-1),
        y: () => getY(1),
        rotate: -8,
      }, 0)
        .to(".img-2", {
          x: () => getX(1),
          y: () => getY(1),
          rotate: 8,
        }, 0)
        .to(".img-3", {
          x: () => getX(1),
          y: () => getY(-1),
          rotate: -6,
        }, 0)
        .to(".img-4", {
          x: () => getX(-1),
          y: () => getY(-1),
          rotate: 6,
        }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* ✅ CONTAINER */}
      <div
        ref={containerRef}
        className="container h-screen flex items-center justify-center relative"
      >

        {/* TEXT */}
        <div className="relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            A unified ecosystem of web, brand, content & performance
            built exclusively for hospitality
          </h2>

          <div className="mt-6">
            <Button label="Get Started"
              className="hidden"
              href="#"
              size="lg"
              icon="/assets/icons/arrow-logo.svg" />
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
            className={`${img.cls} absolute w-72 h-72 md:w-92 md:h-92 aspect-square`}
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