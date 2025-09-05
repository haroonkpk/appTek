"use client";

import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";

export const ContactSection = () => {
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
        <ContactForm />

        {/* Right Column: Info + Card */}
        <InfoCard />
      </div>
    </section>
  );
};
