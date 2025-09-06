"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Trusted", value: 0, suffix: "" },
  { label: "24/7 Available", value: 0, suffix: "" },
  { label: "Professional Services", value: 0, suffix: "" },
];

export const StatsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-600 to-[#10BCBC] py-12 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-around items-center text-center gap-6 sm:gap-12 mb-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: true }}
          className="transition-transform transform cursor-default"
        >
          {/* Animated counter */}
          <h3 className="text-3xl sm:text-4xl text-white font-extrabold mb-2">
            <CountUp
              start={0}
              end={stat.value}
              duration={5}
              suffix={stat.suffix || ""}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h3>

          {/* Label */}
          <p className="text-gray-100 text-base sm:text-lg font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
