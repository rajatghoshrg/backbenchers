import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020817] border-t border-[#1e293b] px-6 md:px-12 py-10 text-white">

      {/* Top Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>

          {/* Logo Section */}
          <div className="flex items-center gap-3">

            {/* Logo Container */}
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#223047] bg-[#0f172a] flex items-center justify-center shadow-[0_0_20px_rgba(93,230,255,0.15)]">

              {/* Add your logo later */}
              <img
                src="/logo.png"
                alt="Backbenchers Logo"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Name */}
            <div className="leading-none">

              <h1 className="text-white text-2xl font-bold">
                Backbenchers
              </h1>

              <h1 className="text-[#5de6ff] text-2xl font-bold">
                Academy
              </h1>

            </div>

          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-6 mt-5 max-w-[280px]">
            Empowering students with modern tech education,
            mentorship, and industry-ready skills.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">

            <div className="w-9 h-9 rounded-full bg-[#0f172a] border border-[#223047] flex items-center justify-center hover:border-[#5de6ff] hover:text-[#5de6ff] transition cursor-pointer">
              <FaFacebookF size={14} />
            </div>

            <div className="w-9 h-9 rounded-full bg-[#0f172a] border border-[#223047] flex items-center justify-center hover:border-[#5de6ff] hover:text-[#5de6ff] transition cursor-pointer">
              <FaInstagram size={14} />
            </div>

            <div className="w-9 h-9 rounded-full bg-[#0f172a] border border-[#223047] flex items-center justify-center hover:border-[#5de6ff] hover:text-[#5de6ff] transition cursor-pointer">
              <FaLinkedinIn size={14} />
            </div>

            <div className="w-9 h-9 rounded-full bg-[#0f172a] border border-[#223047] flex items-center justify-center hover:border-[#5de6ff] hover:text-[#5de6ff] transition cursor-pointer">
              <FaGithub size={14} />
            </div>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-lg font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Courses
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Faculty
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Book Store
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              About
            </li>

          </ul>

        </div>

        {/* Support */}
        <div>

          <h2 className="text-lg font-semibold mb-4">
            Support
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Help Center
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Popular Courses */}
        <div>

          <h2 className="text-lg font-semibold mb-4">
            Popular Courses
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Full Stack Development
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Data Science
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Artificial Intelligence
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              Cyber Security
            </li>

            <li className="hover:text-[#5de6ff] transition cursor-pointer">
              UI/UX Design
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#1e293b] mt-8 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">

        <p>
          © 2026 Backbenchers Academy. All rights reserved.
        </p>

        <p className="mt-2 md:mt-0">
          Designed for modern learners 🚀
        </p>

      </div>

    </footer>
  );
};

export default Footer;