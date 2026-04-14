import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1a4332] text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold text-white mb-4">KeenKeeper</h2>
        <p className="max-w-2xl text-sm md:text-base mb-8 opacity-80">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-lg font-medium text-white">Social Links</span>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <nav className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
