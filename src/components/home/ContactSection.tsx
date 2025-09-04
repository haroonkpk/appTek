"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui";

export const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923001234567?text=Hello%20I%20want%20to%20contact%20you",
      "_blank"
    );
  };
  return (
    <section id="contact" className="py-20 px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent tracking-wide">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-[#10BCBC] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Let’s work together! Fill out the form or reach us directly.
        </p>
      </div>

      {/* Two Columns */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Form */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#10BCBC] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#10BCBC] outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#10BCBC] outline-none"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition active:scale-90">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Column: Info + Card */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#10BCBC] text-2xl" />
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#10BCBC] text-2xl" />
              <p className="text-gray-600">haroon@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#10BCBC] text-2xl" />
              <p className="text-gray-600">Mardan, Pakistan</p>
            </div>
          </div>

          {/* Call-to-Action Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-blue-600 to-[#10BCBC] p-8 rounded-2xl shadow-lg text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
            <p className="mb-6">
              Book a free consultation call with our experts today!
            </p>
            <Button
              variant="whatsapp"
              size="medium"
              rounded="lg"
              onClick={handleWhatsAppClick}
            >
              <span className="flex items-center gap-2">
                <FaWhatsapp size={20} />
                Contact Us
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
