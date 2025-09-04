"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#0A7C7C] text-white pt-16 pb-8 px-6 lg:px-20 mt-20 rounded-t-2xl">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AppTeck</h2>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Crafting scalable and modern IT solutions for businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
            <li>📞 +92 300 1234567</li>
            <li>✉️ info@appteck.com</li>
            <li>📍 Mardan, Pakistan</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-[#0A7C7C] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-[#0A7C7C] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-[#0A7C7C] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-200 text-sm sm:text-base">
        <p>© {new Date().getFullYear()} AppTeck. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
