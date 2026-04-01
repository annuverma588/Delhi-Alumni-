import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "About", "Mission", "Our Pride", "Members", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-gradient-to-r from-[#3b5323]/80 via-[#6b8e23]/60 to-white/30 shadow-xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8a951] to-[#e6d28f] flex items-center justify-center shadow-lg">
              <span className="text-[#3b5323] font-black text-xl">DG</span>
            </div>
            <div>
              <p className={`${scrolled ? "text-white" : "text-black"} font-black text-lg leading-tight transition`}>
                Delhi Alumni
              </p>
              <p className={`${scrolled ? "text-[#f5f0e1]" : "text-gray-700"} text-xs tracking-widest uppercase transition`}>
                Pride is Our Identity
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md relative group ${
                  scrolled
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
                }`}
              >
                {link}

                {/* underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-0.5 transition-all duration-300 ${
                    scrolled ? "bg-white" : "bg-black"
                  }`}
                ></span>
              </a>
            ))}

            {/* Button */}
            <a
              href="#contact"
              className={`ml-4 px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-md ${
                scrolled
                  ? "bg-white/80 text-[#3b5323] hover:bg-white"
                  : "bg-[#3b5323] text-white hover:bg-[#2d4018]"
              }`}
            >
              Join Us
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className={`${scrolled ? "text-white" : "text-black"} md:hidden`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-7 h-7 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-lg px-4 pb-4 flex flex-col gap-2 border-t border-white/20">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className={`py-3 px-3 rounded-lg transition-all border-b ${
                scrolled
                  ? "text-white hover:bg-white/10 border-white/10"
                  : "text-black hover:bg-black/10 border-gray-200"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            className={`mt-3 px-5 py-3 rounded-full font-bold text-center transition ${
              scrolled
                ? "bg-white text-[#3b5323]"
                : "bg-[#3b5323] text-white"
            }`}
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}