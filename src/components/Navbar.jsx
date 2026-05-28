import React, { useState } from "react";
import Button from "./Button";

import {
  FaHome,
  FaBookOpen,
  FaChalkboardTeacher,
  FaStore,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      {/* Navbar */}
      <nav className="w-full bg-[#020817]/95 backdrop-blur-md border-b border-[#1e293b] px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between sticky top-0 z-50">

        {/* Left Section */}
        <div className="flex items-center gap-3 cursor-pointer">

          {/* Logo */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl overflow-hidden border border-[#223047] bg-[#0f172a] flex items-center justify-center shadow-[0_0_20px_rgba(93,230,255,0.15)]">

            <img
              src="/logo.png"
              alt="Backbenchers Logo"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Website Name */}
          <div className="leading-none">

            <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Backbenchers
            </h1>

            <h1 className="text-[#5de6ff] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Academy
            </h1>

          </div>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-white">

          <li className="flex items-center gap-2 text-[#5de6ff] cursor-pointer">
            <FaHome size={14} />
            Home
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaBookOpen size={14} />
            Courses
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaChalkboardTeacher size={14} />
            Faculty
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaStore size={14} />
            Book Store
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaInfoCircle size={14} />
            About
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaEnvelope size={14} />
            Contact
          </li>

        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Desktop Button */}
          <div className="hidden md:block scale-90">
            <Button text="Enroll Now" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {
              menuOpen
                ? <FaTimes />
                : <FaBars />
            }

          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="lg:hidden bg-[#020817] border-b border-[#1e293b] px-6 py-6 space-y-5 text-white text-sm font-medium">

            <div className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
              <FaHome />
              Home
            </div>

            <div className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
              <FaBookOpen />
              Courses
            </div>

            <div className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
              <FaChalkboardTeacher />
              Faculty
            </div>

            <div className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
              <FaStore />
              Book Store
            </div>

            <div className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
              <FaInfoCircle />
              About
            </div>

            <div className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
              <FaEnvelope />
              Contact
            </div>

            {/* Mobile Button */}
            <div className="pt-3">
              <Button text="Enroll Now" />
            </div>

          </div>
        )
      }

    </>
  );
};

export default Navbar;