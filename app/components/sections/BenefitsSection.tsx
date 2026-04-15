"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 Parallax Images
      gsap.utils.toArray(".parallax-img").forEach((img: any) => {
        gsap.to(img, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 🔥 Section fade up
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔥 Floating cards animation (bento-6)
      gsap.to(".card-float-1", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".card-float-2", {
        y: -30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold fade-up">
            Our Benefits
          </h2>
          <p className="mt-4 opacity-70 max-w-xl mx-auto fade-up">
            Where insight meets execution and strategy drives results — this is
            what sets us apart and defines how we deliver real value.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">

          {/* 1 */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-[#0b1c2c] relative group fade-up">
            <img
              src="https://cdn.prod.website-files.com/686f98b490e264b439df109f/6873e70f825fc4da4bcbd7b4_Vintage%20Compass%20on%20Map.avif"
              className="parallax-img absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="relative z-10 p-6 mt-auto">
              <h3 className="text-xl font-semibold">
                Strategy-First Approach
              </h3>
              <p className="opacity-70 text-sm">
                Every decision is rooted in clarity.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="col-span-2 rounded-2xl bg-[#0b1c2c] overflow-hidden relative fade-up">
            <img
              src="https://cdn.prod.website-files.com/686f98b490e264b439df109f/6873e745586830dc88c8bfba_Makeup%20Brush%20and%20Textures.avif"
              className="parallax-img absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-semibold">
                Quality Over Quantity
              </h3>
              <p className="opacity-70 mt-2">
                We focus on fewer projects to deliver better outcomes.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="rounded-2xl bg-[#0b1c2c] p-6 flex flex-col justify-between fade-up">
            <div className="text-4xl font-bold">24/7</div>
            <p className="opacity-70">Priority Support</p>
          </div>

          {/* 4 */}
          <div className="rounded-2xl bg-[#0b1c2c] p-6 fade-up">
            <h3 className="text-xl font-semibold">Tailored Solutions</h3>
            <p className="opacity-70 text-sm">
              Everything is shaped to fit your goals.
            </p>
          </div>

          {/* 5 */}
          <div className="col-span-2 rounded-2xl overflow-hidden relative fade-up">
            <img
              src="https://cdn.prod.website-files.com/686f98b490e264b439df109f/6874a814a93987293adcafdb_Casual%20Office%20or%20Cafe%CC%81%20Gathering.jpeg"
              className="parallax-img absolute inset-0 w-full h-full object-cover scale-105"
            />
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-semibold">
                Collaborative Process
              </h3>
              <p className="opacity-70 mt-2">
                We work with you, not just for you.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="rounded-2xl bg-[#0b1c2c] p-6 relative overflow-hidden fade-up">
            <h3 className="text-xl font-semibold mb-2">
              Creative Meets Practical
            </h3>
            <p className="opacity-70 text-sm mb-6">
              Smart design that actually works.
            </p>

            {/* floating cards */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <div className="w-16 h-20 bg-white/10 rounded-lg card-float-1" />
              <div className="w-16 h-20 bg-white/20 rounded-lg card-float-2" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}