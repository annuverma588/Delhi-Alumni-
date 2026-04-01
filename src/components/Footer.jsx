export default function Footer() {
  return (
    <footer className="bg-[#1e2d10] text-[#d4c9a8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-[#3b5323]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#c8a951] flex items-center justify-center shadow-md">
                <span className="text-[#3b5323] font-black text-xl">DG</span>
              </div>
              <div>
                <p className="text-[#f5f0e1] font-black text-lg leading-tight">Delhi Alumni Group</p>
                <p className="text-[#c8a951] text-xs tracking-widest uppercase">Pride is Our Identity</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              A strong and united community of former students who studied in Delhi Government Schools from 1960 to present. Together – One Identity – One Pride.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["📘", "📷", "🐦", "▶️"].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full bg-[#3b5323] flex items-center justify-center hover:bg-[#c8a951] transition-colors duration-200 text-base"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c8a951] font-black text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Our Mission", "Our Pride", "Members", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-[#c8a951] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a951]/40 group-hover:bg-[#c8a951] transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Mission */}
          <div>
            <h4 className="text-[#c8a951] font-black text-sm uppercase tracking-widest mb-4">Our Pillars</h4>
            <ul className="space-y-2.5">
              {[
                "Celebrating Our Identity",
                "Collaboration & Networking",
                "Inspiration & Mentorship",
                "Legacy & Recognition",
              ].map((item) => (
                <li key={item} className="text-sm flex items-start gap-2">
                  <span className="text-[#c8a951] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7a7a6a]">
            © 2025 Delhi Government School Alumni Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#7a7a6a]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Together – One Identity – One Pride
          </div>
        </div>
      </div>
    </footer>
  );
}