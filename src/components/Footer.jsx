import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020817] text-white pt-20 pb-8 px-6 md:px-20 border-t border-cyan-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            Backbenchers
            <span className="text-cyan-400 block">Academy</span>
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            Empowering the next generation of
            high-performance tech leaders through
            immersive education.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-cyan-500 transition">
              🌐
            </div>

            <div className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-cyan-500 transition">
              💻
            </div>

            <div className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-cyan-500 transition">
              👨‍🎓
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Courses</li>
            <li className="hover:text-cyan-400 cursor-pointer">Faculty</li>
            <li className="hover:text-cyan-400 cursor-pointer">Book Store</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Support</h2>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-cyan-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-cyan-400 cursor-pointer">FAQ</li>
            <li className="hover:text-cyan-400 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Newsletter</h2>

          <p className="text-gray-400 mb-6">
            Get the latest updates on tech trends
            and course launches.
          </p>

          <div className="flex items-center bg-[#0f172a] rounded-xl overflow-hidden border border-cyan-900">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent px-4 py-3 w-full outline-none"
            />

            <button className="bg-cyan-400 text-black px-5 py-3 hover:bg-cyan-300 transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cyan-900 mt-14 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p>© 2024 Backbenchers Academy. All rights reserved.</p>

        <p className="mt-2 md:mt-0">
          Designed for High Performance Learning
        </p>
      </div>
    </footer>
  );
};

export default Footer;