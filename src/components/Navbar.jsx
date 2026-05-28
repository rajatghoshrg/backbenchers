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
      <nav className="w-full bg-[#020817] border-b border-[#1e293b] px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-50">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border border-[#223047]">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Text */}
          <div className="leading-none">

            <h1 className="text-white text-lg md:text-2xl font-bold">
              Backbenchers
            </h1>

            <h1 className="text-[#5de6ff] text-lg md:text-2xl font-bold">
              Academy
            </h1>

          </div>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">

          <li className="flex items-center gap-2 text-[#5de6ff] cursor-pointer">
            <FaHome />
            Home
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaBookOpen />
            Courses
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaChalkboardTeacher />
            Faculty
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaStore />
            Book Store
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaInfoCircle />
            About
          </li>

          <li className="flex items-center gap-2 hover:text-[#5de6ff] transition cursor-pointer">
            <FaEnvelope />
            Contact
          </li>

        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Desktop Button ONLY */}
          <div className="hidden lg:block scale-90">
            <Button text="Enroll Now" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
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
          <div className="lg:hidden bg-[#020817] border-b border-[#1e293b] px-6 py-5">

            <ul className="flex flex-col gap-5 text-white text-sm font-medium">

              <li className="flex items-center gap-3 text-[#5de6ff] cursor-pointer">
                <FaHome />
                Home
              </li>

              <li className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
                <FaBookOpen />
                Courses
              </li>

              <li className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
                <FaChalkboardTeacher />
                Faculty
              </li>

              <li className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
                <FaStore />
                Book Store
              </li>

              <li className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
                <FaInfoCircle />
                About
              </li>

              <li className="flex items-center gap-3 hover:text-[#5de6ff] transition cursor-pointer">
                <FaEnvelope />
                Contact
              </li>

              {/* Mobile Button */}
              <div className="pt-3">
                <Button text="Enroll Now" />
              </div>

            </ul>

          </div>
        )
      }

    </>
  );
};

export default Navbar;