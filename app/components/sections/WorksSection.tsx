"use client";

import { useEffect, useRef } from "react";
import WorkCard from "../ui/WorkCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "Arcworks Collective",
    year: "2025",
    type: "Brand Design",
    desc: "Brand positioning and website redesign for a creative co-working space blending art, tech, and community.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b3ff94ee9c70a016e7fb_Laptop%20on%20Sandy%20Beach.jpeg",
  },
  {
    title: "Studio Nive",
    year: "2024",
    type: "Content Consulting",
    desc: "Creative direction and brand identity for a fashion-focused design studio entering the global market.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b52cd72a8f64c015ce9d_Dynamic%20Fashion%20Portrait.jpeg",
  },
  {
    title: "Fieldtone Projects",
    year: "2025",
    type: "Brand Design",
    desc: "Naming, strategy, and identity for a boutique architecture firm emphasizing simplicity, landscape, and form.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b5dba4ecd9797b79c542_Modern%20Black%20Chair.jpeg",
  },
  {
    title: "Morrow & Reed",
    year: "2022",
    type: "Digital Ads",
    desc: "Web presence and client pitch materials for a forward-thinking business consulting group focused on leadership and growth.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b68660dd7413c3d4bb0c_Modern%20Office%20Space.jpeg",
  },
];

export default function WorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ TYPE FIX HERE
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;

        // PIN
        if (!isLast) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
          });
        }

        // SCALE previous
        if (!isLast) {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1] as HTMLElement, // extra safety
              start: "top center",
              end: "top top",
              scrub: true,
            },
          });
        }

        // ENTRY
        gsap.fromTo(
          card,
          { y: 120 },
          {
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#000] py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-[10vh]">
        {works.map((item, i) => (
          <WorkCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}