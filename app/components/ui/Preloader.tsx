"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Start with full cover
      gsap.set(".stripe", {
        scaleX: 1,
        transformOrigin: "left",
      });

      // Animate OUT (reveal content)
      tl.to(".stripe", {
        scaleX: 0,
        transformOrigin: "right",
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-10 flex pointer-events-none"
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="stripe flex-1 bg-black"
        />
      ))}
    </div>
  );
};

export default Preloader;