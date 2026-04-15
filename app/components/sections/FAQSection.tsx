"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Do you work with specific contractors or builders?",
    a: "Yes, we have a trusted network of professionals, but we're also happy to collaborate with your preferred team.",
  },
  {
    q: "Is there a minimum project size or budget?",
    a: "We work on projects of all sizes, though we typically recommend a minimum budget to ensure quality results.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply reach out through our contact form—we'll schedule a consultation to discuss your needs and next steps.",
  },
  {
    q: "Do you offer both interior and exterior design services?",
    a: "Yes, we provide a full range of services—from interior styling to garden and landscape design.",
  },
  {
    q: "How involved will I be in the design process?",
    a: "We collaborate closely with you at every step to ensure the final result reflects your vision and needs.",
  },
  {
    q: "What’s the typical project timeline?",
    a: "Timelines vary based on project size, but most projects take between 4–12 weeks from start to finish.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            All the Details, Explained
          </h2>
          <p className="text-gray-500 max-w-xl">
            Find quick answers to the most common questions about our services and process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-lg font-medium">
                    {item.q}
                  </span>

                  <span className="ml-4">
                    {isOpen ? (
                      <FiMinus size={20} />
                    ) : (
                      <FiPlus size={20} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}