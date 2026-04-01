const missions = [
  {
    number: "01",
    title: "Celebrating Our Identity with Pride",
    description: "To change the negative perception about government schools. To spread the message that students from these schools can achieve excellence and bring recognition at national and international levels.",
    icon: "🏆",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop",
  },
  {
    number: "02",
    title: "Collaboration and Networking",
    description: "To support one another across fields such as education, healthcare, administration, law, business, and more. To share opportunities, guidance, and resources for collective growth.",
    icon: "🤝",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
  },
  {
    number: "03",
    title: "Inspiration and Mentorship",
    description: "To motivate and support those who may have fallen behind due to circumstances. To guide the younger generation by sharing knowledge, experiences, and success stories.",
    icon: "💡",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
  },
  {
    number: "04",
    title: "Legacy and Recognition",
    description: "To carry forward the proud legacy of Delhi Government Schools. To highlight and celebrate the achievements of our alumni.",
    icon: "🎖️",
    img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-[#f5f0e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a951] text-sm font-bold tracking-widest uppercase">What We Stand For</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#3b5323] mt-2">Our Mission</h2>
          <div className="w-20 h-1 bg-[#c8a951] rounded-full mx-auto mt-4"></div>
          <p className="text-[#5a5a4a] mt-4 max-w-xl mx-auto text-base">
            Four pillars that drive our community forward and shape the future of Delhi Government School alumni.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m) => (
            <div
              key={m.number}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#e8e0cc]"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#3b5323]/50"></div>
                <div className="absolute top-4 left-4 bg-[#c8a951] text-[#3b5323] w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                  {m.number}
                </div>
                <div className="absolute bottom-4 right-4 text-3xl">{m.icon}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[#3b5323] font-black text-base leading-tight mb-3">{m.title}</h3>
                <p className="text-[#6a6a5a] text-sm leading-relaxed">{m.description}</p>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-[#3b5323] to-[#c8a951] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}