"use client";

import { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    // connect API here
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT FORM */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-neutral-400 mb-10">
            Reach out today and let’s start building something remarkable.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm mb-2 text-neutral-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-neutral-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2 text-neutral-300">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-neutral-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 text-neutral-300">
                Message*
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-transparent border border-neutral-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE + INFO */}
        <div className="relative rounded-3xl overflow-hidden">
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Image */}
          <img
            src="https://cdn.prod.website-files.com/686f98b490e264b439df109f/6874dde7514bce745cecdd1f_e0ffbc0a0011e6e70d669c50543a0625_Futuristic%20Explorer.avif"
            alt="Contact"
            className="w-full h-full object-cover scale-110"
          />

          {/* Contact Info */}
          <div className="absolute z-20 bottom-6 left-6 space-y-3">
            
            <a
              href="tel:2062744822"
              className="flex items-center gap-3 text-lg font-medium hover:opacity-80"
            >
              <FiPhone />
              206-274-4822
            </a>

            <a
              href="mailto:hello@avexa.io"
              className="flex items-center gap-3 text-xl font-semibold hover:opacity-80"
            >
              <FiMail />
              hello@avexa.io
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}