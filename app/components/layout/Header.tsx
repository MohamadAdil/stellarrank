"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
} from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-black/80 backdrop-blur-md shadow-md"
        : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/icons/logo-stellarrank.svg"
            alt="StellarRank"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-8">

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-500 transition">
              About
            </Link>

            <Link href="/works" className="hover:text-blue-500 transition">
              Works
            </Link>

            <Link href="/services" className="hover:text-blue-500 transition">
              Services
            </Link>
          </nav>

          {/* CTA + Toggle */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <a
              href="#"
              className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
            >
              Get Started
              <Image
                src="/assets/icons/arrow-logo.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            About
          </Link>

          <Link href="/works" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            Works
          </Link>

          <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            Services
          </Link>

          {/* Mobile CTA */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium"
          >
            Get Started
            <Image
              src="/assets/icons/arrow-logo.svg"
              alt="arrow"
              width={16}
              height={16}
            />
          </a>
        </div>
      )}
    </header>
  );
}