"use client";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "James Smith",
    role: "Marketing Director, Growthify",
    image:
      "https://cdn.prod.website-files.com/686f98b490e264b439df109f/6872172c8a440e377b0d8ab9_Portrait%20of%20a%20Young%20Woman%20in%20Stylish%20Outfit.avif",
    logo:
      "https://cdn.prod.website-files.com/686f98b490e264b439df109f/687212d1169399105dfa3e88_Logoipsum-2.png",
    quote:
      "Avexa Studio completely transformed our brand — their strategy and design work exceeded expectations.",
    desc:
      "We redefined NovaTech’s identity and launched a new website that elevated their online presence.",
  },
  {
    name: "Liam Foster",
    role: "Founder, UrbanGlow",
    image:
      "https://cdn.prod.website-files.com/686f98b490e264b439df109f/6872172cb6f2159f3ae1f520_Young%20Man%20in%20Neutral%20Setting.avif",
    logo:
      "https://cdn.prod.website-files.com/686f98b490e264b439df109f/687212d1169399105dfa3e88_Logoipsum-2.png",
    quote:
      "Working with Avexa felt like having an in-house team. The results spoke for themselves.",
    desc:
      "Focused on scaling business through targeted campaigns and refined messaging.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Client Stories
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from businesses we’ve partnered with to create lasting success.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 shadow-lg"
              >
                
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <img src={item.logo} alt="logo" className="w-24 mb-4" />
                  <p className="text-lg font-medium mb-4">
                    “{item.quote}”
                  </p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-black hover:text-white transition"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-black hover:text-white transition"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                current === i ? "bg-black scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}