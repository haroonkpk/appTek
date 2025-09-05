"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "@/components/ui";

export default function InfoCard() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923001234567?text=Hello%2C%20I%20would%20like%20to%20discuss%20about%20your%20IT%20services.",
      "_blank"
    );
  };

  return (
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
  );
}
