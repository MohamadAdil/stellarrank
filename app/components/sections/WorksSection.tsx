"use client";

import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "Build",
    subtitle: "Web Experiences That Deliver",
    year: "01",
    type: "Brand Design",
    desc: "Best in class websites powered by Next.js, headless CMS.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b3ff94ee9c70a016e7fb_Laptop%20on%20Sandy%20Beach.jpeg",
  },
  {
    title: "Book",
    subtitle: "Brand Identity & Creative Direction",
    year: "02",
    type: "Content Consulting",
    desc: "Visual identities that capture the essence of brands.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b52cd72a8f64c015ce9d_Dynamic%20Fashion%20Portrait.jpeg",
  },
  {
    title: "Grow",
    subtitle: "Performance Marketing That Delivers",
    year: "03",
    type: "Digital Ads",
    desc: "Data-driven campaigns optimised for results.",
    img: "https://cdn.prod.website-files.com/686f98b490e264b439df10c2/6874b5dba4ecd9797b79c542_Modern%20Black%20Chair.jpeg",
  },
];

export default function WorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".card-wrapper");
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      wrappers.forEach((wrapper, i) => {
        const card = cards[i];

        gsap.set(card, {
          zIndex: i + 1,
        });

        ScrollTrigger.create({
          trigger: wrapper,
          start: "top top",
          end: i === wrappers.length - 1 ? "bottom top" : "+=100%",
          scrub: true,
          pin: wrapper,
          pinSpacing: false,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F8F7F4] py-20">

      {/* HEADER */}
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* LEFT HEADING */}
          <h2 className="flex-1 text-[clamp(2.5rem,6vw,5rem)] text-[#1a1a1a] leading-tight font-light">
            What we build
            <br />
            doesn&apos;t stop
            <br />
            <span className="italic text-neutral-400">at launch...</span>
          </h2>

          {/* RIGHT TEXT */}
          <div className="flex-1 space-y-4">
            <p className="text-[20px] leading-[32.5px] text-[#1A1A1A99] font-light">
              We create digital ecosystems that grow with you—where design,
              technology, and marketing work as one unified force.
            </p>

            <p className="text-[20px] leading-[32.5px] text-[#1A1A1A99] font-light">
              Every touchpoint optimized. Every guest journey intentional.
              Every booking a result of strategic thinking, not just traffic.
            </p>
          </div>

        </div>
      </div>

      {/* STACK AREA */}
      <div className="cards">
        {works.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <div key={i} className="card-wrapper">
              <div className="work-card">

                <div className="container px-6 h-full flex items-center">
                  <div
                    className={`w-full flex flex-col md:flex-row gap-6 ${!isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* IMAGE */}
                    <div className="relative flex-1 max-w-[668px] h-auto aspect-[668/800] overflow-hidden">
                      <img
                        src={item.img}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt=""
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <span className="absolute bottom-5 left-6 text-white/70 text-xl">
                        {item.year}
                      </span>
                    </div>

                    {/* TEXT */}
                    <div className="flex-1 flex flex-col justify-center py-10">

                      {/* TYPE */}
                      <p className="uppercase text-[12px] tracking-[3.6px] text-[#1A1A1A66] mb-8 border-t border-[#1A1A1A1A] pt-3 w-fit">
                        {item.type}
                      </p>

                      {/* TITLE */}
                      <h3 className="text-[88px] leading-[83.6px] tracking-[-2.2px] text-[#1A1A1A] mb-5 font-light">
                        {item.title}
                      </h3>

                      {/* SUBTITLE */}
                      <p className="text-[30px] leading-[37.5px] text-[#1A1A1A99] mb-8 font-light">
                        {item.subtitle}
                      </p>

                      {/* DESC */}
                      <p className="text-[24px] leading-[39px] text-[#1A1A1A] mb-5 font-light max-w-md">
                        {item.desc}
                      </p>

                      {/* LINK */}
                      <a className="text-[14px] tracking-[2.1px] uppercase text-[#1D66CF] font-medium inline-flex items-center gap-2">
                        Learn more <FiArrowRight />
                      </a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* STRUCTURE FIX */}
      <style jsx>{`
        .cards {
          position: relative;
          padding-bottom: 100dvh; 
        }

        .card-wrapper {
          position: relative;
          height: 100dvh;
        }

        .work-card {
          position: absolute;
          inset: 0;
          background: #F8F7F4;
        }
      `}</style>
    </section>
  );
}