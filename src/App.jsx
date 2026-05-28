import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#020817] text-white min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-28">

        {/* Top Badge */}
        <div className="bg-[#071426] border border-cyan-900 px-6 py-2 rounded-full text-cyan-400 text-sm mb-8 shadow-lg">
          #1 Ranked Academy For Tech Careers
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
          Transforming College Students Into
          <span className="text-cyan-400">
            {" "}Future Professionals
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-8 max-w-3xl text-lg leading-8">
          Master BCA, B.Tech, and Modern Programming
          with industry-led mentorship. Bridge the gap
          between academics and the high-performance
          tech industry.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-10 flex-wrap justify-center">

          <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold shadow-[0_0_30px_#22d3ee] hover:scale-105 transition duration-300">
            Explore Courses
          </button>

          <button className="bg-[#0f172a] border border-cyan-900 px-8 py-4 rounded-2xl hover:bg-[#111827] transition duration-300">
            Contact Us
          </button>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;