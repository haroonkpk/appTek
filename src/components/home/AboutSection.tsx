"use client";

import {
  FaUsers,
  FaStar,
  FaHeadset,
  FaClock,
  FaHandshake,
  FaBullseye,
  FaUserTie,
  FaChartLine,
  FaMicrochip,
  FaCheckCircle,
} from "react-icons/fa";
import { ReactNode } from "react";
import { AboutUsCard, StatsBanner } from "../ui";
import { motion } from "motion/react";

// Core services + features merged in a single array
interface CardData {
  title: string;
  description: string;
  icon: ReactNode;
}

const AboutUsCards: CardData[] = [
  {
    title: "Trust & Reliability",
    description: "Strong client trust with transparent communication.",
    icon: <FaHandshake className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "Goal-Oriented",
    description: "Projects aligned with business objectives.",
    icon: <FaBullseye className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "Excellence",
    description: "Creating digital experiences that exceed expectations.",
    icon: <FaStar className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "Client-Centric",
    description: "Your success is our top priority.",
    icon: <FaUserTie className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing ensures reliable, bug-free apps.",
    icon: <FaCheckCircle className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "Cutting-Edge Tech",
    description: "Modern tools and frameworks for scalable apps.",
    icon: <FaMicrochip className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "Expert Team",
    description: "Skilled developers with years of experience.",
    icon: <FaUsers className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "On-Time Delivery",
    description: "Meeting deadlines without losing quality.",
    icon: <FaClock className="text-[#10BCBC] text-4xl" />,
  },
  {
    title: "24/7 Support",
    description: "Always here to keep you running smoothly.",
    icon: <FaHeadset className="text-[#10BCBC] text-4xl" />,
  },
];



const stats = [
  { label: "Projects Completed", value: "120+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Support Available", value: "24/7" },
  { label: "Years Experience", value: "3+" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent tracking-wide">
          About Us
        </h2>
        <div className="w-20 h-1 bg-[#10BCBC] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We are a passionate team delivering modern and reliable IT solutions —
          empowering your business to grow with the latest technology across
          Saudi Arabia.
        </p>
      </div>

      {/* Brief highlight */}
      <div className="bg-[#10BCBC]/10 rounded-2xl p-8 max-w-4xl mx-auto mb-20 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          With extensive experience in real-world projects, we deliver
          high-performance solutions by combining cutting-edge technologies with
          global best practices. Based in Saudi Arabia, we create innovative and
          tailored IT solutions that drive business growth and enhance user
          experience.
        </p>
      </div>

      {/* Cards merged (services + features) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
        {AboutUsCards.map((card, index) => (
          <AboutUsCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      {/* Stats banner */}
      <StatsBanner />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-10 text-center"
      >
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-3">
          Ready to Take the Next Step?
        </h3>

        {/* Description */}
        <p className="mb-8 text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Let’s discuss your project and bring your ideas to life.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-xl bg-[#10BCBC] text-white font-semibold shadow-md hover:bg-[#0A8E8E] transition-all duration-300"
          >
            Get Free Consultation
          </motion.button>

          {/* Secondary button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "tel:+923001234567")}
            className="px-7 py-3 rounded-xl border-2 border-[#10BCBC] text-[#10BCBC] font-semibold hover:bg-[#10BCBC] hover:text-white shadow-sm transition-all duration-300"
          >
            Call Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
