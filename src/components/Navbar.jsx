import React from "react";
import Button from "./Button";

import {
  FaHome,
  FaBookOpen,
  FaChalkboardTeacher,
  FaStore,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#020817]/95 backdrop-blur-md border-b border-[#1e293b] px-5 md:px-10 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Left Section */}
      <div className="flex items-center gap-3 cursor-pointer">

        {/* Logo Container */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border border-[#223047] bg-[#0f172a] flex items-center justify-center shadow-[0_0_20px_rgba(93,230,255,0.15)]">

          {/* Add your logo later */}
          <img
            src="/logo.png"
            alt="Backbenchers Logo"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Website Name */}
        <div className="leading-none">

          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Backbenchers
          </h1>

          <h1 className="text-[#5de6ff] text-2xl md:text-3xl font-bold">
            Academy
          </h1>

        </div>

      </div>

      {/* Center Nav Links */}
      <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-white">

        {/* Home */}
        <li className="relative flex items-center gap-2 text-[#5de6ff] cursor-pointer">

          <FaHome size={14} />

          Home

          <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-[#5de6ff]"></span>

        </li>

        {/* Courses */}
        <li className="flex items-center gap-2 hover:text-[#5de6ff] transition duration-300 cursor-pointer">

          <FaBookOpen size={14} />

          Courses

        </li>

        {/* Faculty */}
        <li className="flex items-center gap-2 hover:text-[#5de6ff] transition duration-300 cursor-pointer">

          <FaChalkboardTeacher size={14} />

          Faculty

        </li>

        {/* Store */}
        <li className="flex items-center gap-2 hover:text-[#5de6ff] transition duration-300 cursor-pointer">

          <FaStore size={14} />

          Book Store

        </li>

        {/* About */}
        <li className="flex items-center gap-2 hover:text-[#5de6ff] transition duration-300 cursor-pointer">

          <FaInfoCircle size={14} />

          About

        </li>

        {/* Contact */}
        <li className="flex items-center gap-2 hover:text-[#5de6ff] transition duration-300 cursor-pointer">

          <FaEnvelope size={14} />

          Contact

        </li>

      </ul>

      {/* Right Button */}
      <div className="scale-75 md:scale-90">
        <Button text="Enroll Now" />
      </div>

    </nav>
  );
};

export default Navbar;