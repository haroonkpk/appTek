"use client";
import { motion } from "framer-motion";
import {
  FaStar,
  FaUsers,
  FaRocket,
  FaHeadset,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaStar />,
    title: "Trusted Expertise",
    description: "Delivering quality with years of experience.",
  },
  {
    icon: <FaUsers />,
    title: "Client First Approach",
    description: "We prioritize client needs above all else.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Always available to assist you anytime.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Solutions",
    description: "Robust security for peace of mind.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Results",
    description: "Timely project completion every time.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 lg:px-20 relative text-center">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>

      <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent tracking-wide">
        Why Choose Us
      </h2>
      <div className="w-30 h-1 bg-[#10BCBC] mx-auto mb-6 rounded-full"></div>

      {/* Short intro */}
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
        We provide exceptional services tailored to your needs with a focus on
        quality, speed, and client satisfaction.
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex gap-3 p-6 bg-white/80 text-start rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="text-4xl text-[#10BCBC] mb-3">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Highlight card */}
      <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-t md:bg-gradient-to-r from-blue-600 to-[#10BCBC] rounded-2xl shadow-xl p-10 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">
          Ready to Take the Next Step?
        </h3>
        <p className="mb-6 text-gray-100">
          Let’s discuss your project and bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView();
            }}
            className="px-6 py-3 bg-white text-[#10BCBC] font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Get Free Consultation
          </button>
          <button
            onClick={() => (window.location.href = "tel:+923001234567")}
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#10BCBC] transition active:scale-90"
          >
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};
