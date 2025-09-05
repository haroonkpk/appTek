"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contactForm"
      whileHover={{ scale: 1.01 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#10BCBC] outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#10BCBC] outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#10BCBC] outline-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition active:scale-90 ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] text-white"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status === "success" && (
          <p className="text-center text-green-600 font-medium mt-3">
            Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-600 font-medium mt-3">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
}
