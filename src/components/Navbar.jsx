const Navbar = () => {
  return (
    <nav className="w-full bg-[#020817] border-b border-cyan-900 px-6 md:px-16 py-5 flex items-center justify-between">

      {/* Logo */}
      <div className="leading-none">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Backbenchers
        </h1>

        <h1 className="text-cyan-400 text-3xl md:text-5xl font-bold mt-1">
          Academy
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 text-white font-medium">

        <li className="relative cursor-pointer text-cyan-400">
          Home

          <div className="absolute left-0 mt-1 h-[2px] w-full bg-cyan-400 rounded-full"></div>
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Courses
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Faculty
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Book Store
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          About
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Contact
        </li>

      </ul>

      {/* Enroll Button */}
      <button className="bg-cyan-400 text-black px-7 py-4 rounded-full font-semibold shadow-[0_0_25px_#22d3ee] hover:scale-105 transition duration-300">

        Enroll Now

      </button>

    </nav>
  );
};

export default Navbar;