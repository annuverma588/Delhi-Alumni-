export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#3b5323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a951] text-sm font-bold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#f5f0e1] mt-2">Join Our Community</h2>
          <div className="w-20 h-1 bg-[#c8a951] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-[#d4c9a8] text-lg leading-relaxed mb-8">
              Are you a former student of Delhi Government Schools? Join our growing community and be a part of something greater. Together, we celebrate our shared identity and build a stronger future.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: "📍", title: "Location", value: "Delhi, India" },
                { icon: "🌐", title: "Community", value: "Delhi Government School Alumni Group" },
                { icon: "📅", title: "Founded", value: "Alumni from 1960 to Present" },
                { icon: "🏫", title: "Outreach", value: "300+ Schools in 2025" },
              ].map((info) => (
                <div key={info.title} className="flex items-center gap-4 bg-[#2d4018] rounded-2xl px-5 py-4 border border-[#c8a951]/15">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-[#c8a951] text-xs font-bold uppercase tracking-wide">{info.title}</p>
                    <p className="text-[#f5f0e1] text-sm font-semibold mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#f5f0e1] rounded-3xl p-8 shadow-2xl">
            <h3 className="text-[#3b5323] font-black text-xl mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#3b5323] text-sm font-semibold block mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="Rahul"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e8e0cc] focus:border-[#3b5323] focus:outline-none text-[#3b3b2a] bg-white transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-[#3b5323] text-sm font-semibold block mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e8e0cc] focus:border-[#3b5323] focus:outline-none text-[#3b3b2a] bg-white transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#3b5323] text-sm font-semibold block mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e8e0cc] focus:border-[#3b5323] focus:outline-none text-[#3b3b2a] bg-white transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-[#3b5323] text-sm font-semibold block mb-1.5">School Name & Year</label>
                <input
                  type="text"
                  placeholder="e.g. Govt. Boys Senior Secondary School, 2005"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e8e0cc] focus:border-[#3b5323] focus:outline-none text-[#3b3b2a] bg-white transition-colors text-sm"
                />
              </div>

              <div>
                <label className="text-[#3b5323] text-sm font-semibold block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself and how you'd like to contribute..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e8e0cc] focus:border-[#3b5323] focus:outline-none text-[#3b3b2a] bg-white transition-colors text-sm resize-none"
                />
              </div>

              <button className="w-full bg-[#3b5323] text-[#f5f0e1] py-4 rounded-xl font-bold text-base hover:bg-[#2d4018] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Join the Alumni Community 🎓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}