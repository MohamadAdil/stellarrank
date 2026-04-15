"use client";
import { useState } from "react";

const servicesData = {
  project: [
    {
      title: "Digital Ads",
      desc: "Maximize visibility and results through digital campaigns that focus on conversions.",
      price: "$2,800+",
      image: "https://cdn.prod.website-files.com/686f98b490e264b439df109f/68722aa261b8e8a2b3ca0d02_Casual%20Tablet%20Reader%20Engaging%20Digital%20Magazine%20with%20Vivid%20Red%20Design.jpeg",
      features: [
        "Campaign Setup",
        "Audience Targeting",
        "Budget Planning",
        "Performance Tracking",
      ],
    },
    {
      title: "Brand Design",
      desc: "We help define your brand’s identity to build lasting connections.",
      price: "$2500+",
    },
    {
      title: "Web Design",
      desc: "Custom websites that blend visuals with intuitive UX.",
      price: "$3,500+",
    },
    {
      title: "Content Consulting",
      desc: "Create compelling messaging that converts across platforms.",
      price: "$2,000+",
    },
  ],
  monthly: [
    {
      title: "Digital Ads",
      desc: "Maximize visibility and results through digital campaigns.",
      price: "$800",
      image: "https://cdn.prod.website-files.com/686f98b490e264b439df109f/68722aa261b8e8a2b3ca0d02_Casual%20Tablet%20Reader%20Engaging%20Digital%20Magazine%20with%20Vivid%20Red%20Design.jpeg",
      features: [
        "Campaign Setup",
        "Audience Targeting",
        "Budget Planning",
        "Performance Tracking",
      ],
    },
    {
      title: "Brand Design",
      desc: "We help define your brand’s identity.",
      price: "$500",
    },
    {
      title: "Web Design",
      desc: "Custom websites with UX focus.",
      price: "$1,500",
    },
    {
      title: "Content Consulting",
      desc: "Messaging that converts.",
      price: "$750",
    },
  ],
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("project");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#061224] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-10">
          <h2 className="text-4xl font-semibold mb-3">
            Services & Pricing
          </h2>
          <p className="text-neutral-400">
            From brand development to business strategy, our services are crafted
            to help you move forward with clarity and confidence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-10">
          {["project", "monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveIndex(0);
              }}
              className={`pb-2 border-b-2 capitalize transition ${
                activeTab === tab
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400"
              }`}
            >
              {tab === "project" ? "Project-Based" : "Monthly"}
            </button>
          ))}
        </div>

        {/* Services */}
        <div className="space-y-4">
          {servicesData[activeTab].map((item, index) => (
            <div
              key={index}
              className="border-t border-white/10 py-5 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Head */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h4 className="text-xl font-medium min-w-[180px]">
                  {item.title}
                </h4>

                <p className="text-neutral-400 flex-1">
                  {item.desc}
                </p>

                <span className="font-semibold">
                  {item.price}
                </span>
              </div>

              {/* Body */}
              {activeIndex === index && item.features && (
                <div className="flex flex-col md:flex-row gap-8 mt-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-[320px] rounded-xl object-cover"
                  />

                  <ul className="space-y-2">
                    {item.features.map((f, i) => (
                      <li key={i} className="text-neutral-300">
                        ✓ {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}