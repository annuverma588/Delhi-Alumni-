export default function About() {
  return (
    <section id="about" className="py-20 bg-[#3b5323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a951] text-sm font-bold tracking-widest uppercase">Who We Are</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0e1] mt-2">About Our Community</h2>
          <div className="w-20 h-1 bg-[#c8a951] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop" alt="Delhi School" className="rounded-2xl col-span-2 w-full h-56 object-cover shadow-xl" />
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=250&fit=crop" alt="Education" className="rounded-2xl w-full h-44 object-cover shadow-xl" />
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=250&fit=crop" alt="Alumni Network" className="rounded-2xl w-full h-44 object-cover shadow-xl" />
            </div>
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-[#c8a951] text-[#3b5323] w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl font-black text-center">
              <span className="text-2xl">🏛️</span>
              <span className="text-xs mt-1 leading-tight">Delhi<br/>Govt Schools</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#d4c9a8] text-lg leading-relaxed mb-6">
              The <strong className="text-[#c8a951]">Delhi Government School Alumni Group</strong> is a strong and united community of former students who studied in Delhi Government Schools from <strong className="text-white">1960 to present.</strong>
            </p>
            <p className="text-[#b8ae90] text-base leading-relaxed mb-8">
              We come from humble backgrounds, yet through dedication, perseverance, and hard work, we have built successful identities across various fields.
            </p>

            {/* Together tagline box */}
            <div className="bg-[#f5f0e1]/10 border border-[#c8a951]/30 rounded-2xl p-6 mb-8">
              <h3 className="text-[#c8a951] font-black text-xl mb-2">Together – One Identity – One Pride</h3>
              <p className="text-[#d4c9a8] text-sm leading-relaxed">
                In the year 2025, this organization has done the work of making children aware by conducting career counseling, mentorship, as well as several sessions on mental health and cyber fraud in more than <strong className="text-white">300 schools.</strong>
              </p>
            </div>

            {/* Fields grid */}
            <div className="grid grid-cols-3 gap-3">
              {["Healthcare", "Education", "Law", "Business", "Administration", "Social Service"].map((field) => (
                <div key={field} className="bg-[#2d4018] border border-[#c8a951]/20 rounded-xl px-3 py-2.5 text-center">
                  <p className="text-[#f5f0e1] text-xs font-semibold">✓ {field}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}