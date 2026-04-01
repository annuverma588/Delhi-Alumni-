const fields = [
  { icon: "🏥", name: "Healthcare" },
  { icon: "🎓", name: "Education" },
  { icon: "⚖️", name: "Law" },
  { icon: "💼", name: "Business" },
  { icon: "📋", name: "Administration" },
  { icon: "❤️", name: "Social Service" },
  { icon: "🏛️", name: "Government" },
  { icon: "🔬", name: "Many More Sectors" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1560785496-3c9d4ecc3f5e?w=500&h=350&fit=crop",
];

export default function OurPride() {
  return (
    <section id="our-pride" className="py-20 bg-[#2d4018] relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#c8a951]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f5f0e1]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a951] text-sm font-bold tracking-widest uppercase">Our Strength</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0e1] mt-2">Our Pride</h2>
          <div className="w-20 h-1 bg-[#c8a951] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text */}
          <div>
            <p className="text-[#d4c9a8] text-lg leading-relaxed mb-6">
              Our community includes professionals from diverse fields. We take immense pride in the fact that several <strong className="text-white">distinguished personalities</strong> — including leaders in government, judiciary, and public service — have emerged from Delhi Government Schools, rising from humble beginnings to achieve remarkable success.
            </p>
            <p className="text-[#b8ae90] text-base leading-relaxed mb-8">
              Today, our alumni are making a mark not only across Delhi but throughout India, proudly carrying forward the name of <strong className="text-[#c8a951]">Delhi Government Schools.</strong>
            </p>

            {/* Fields Grid */}
            <div className="grid grid-cols-4 gap-3">
              {fields.map((f) => (
                <div
                  key={f.name}
                  className="bg-[#3b5323]/60 border border-[#c8a951]/20 rounded-2xl p-3 text-center hover:bg-[#3b5323] hover:border-[#c8a951]/50 transition-all duration-200 cursor-default group"
                >
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <p className="text-[#f5f0e1] text-xs font-semibold leading-tight group-hover:text-[#c8a951] transition-colors">{f.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote Card */}
          <div className="relative">
            <div className="bg-[#c8a951] rounded-3xl p-8 shadow-2xl">
              <div className="text-6xl text-[#3b5323]/30 font-serif leading-none mb-4">"</div>
              <p className="text-[#3b5323] text-xl font-bold leading-relaxed mb-6">
                Rising from humble beginnings, our alumni have reached the highest levels of government, judiciary, healthcare, business, and public service.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#3b5323] flex items-center justify-center text-[#c8a951] font-black">DG</div>
                <div>
                  <p className="text-[#3b5323] font-black text-sm">Delhi Alumni Group</p>
                  <p className="text-[#3b5323]/60 text-xs">Since 1960</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#3b5323] rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-3xl">🏅</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h3 className="text-[#c8a951] font-black text-xl text-center mb-8">Community Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}