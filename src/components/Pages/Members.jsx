const members = [
  { id: 1, name: "Mr. Atul Tripathi", role: "President Delhi Govt School Alumni Association", icon: "👑" },
  { id: 2, name: "Mr. Ramendra Mishra", role: "Faculty UPSC", icon: "📚" },
  { id: 3, name: "Dr. Vinod Kumar", role: "Deputy Director (ICHR)", icon: "🔬" },
  { id: 4, name: "Dr. Mohit Tiwari", role: "Doctor", icon: "⚕️" },
  { id: 5, name: "Anil Upadhyay", role: "Founder (SEF Foundation)", icon: "🌟" },
  { id: 6, name: "Mukesh Kumar", role: "Principal DOE", icon: "🏫" },
  { id: 7, name: "Suresh Kumar", role: "Principal DOE", icon: "🏫" },
  { id: 8, name: "Monika Vishwash", role: "Principal DOE", icon: "🏫" },
  { id: 9, name: "Nidhi", role: "DOE", icon: "📋" },
  { id: 10, name: "Parul Jain", role: "Journalist", icon: "📰" },
  { id: 11, name: "Hemant Baisla", role: "Advocate", icon: "⚖️" },
  { id: 12, name: "Vijay Ji", role: "Ret. Italian Trade Commission", icon: "🌍" },
  { id: 13, name: "Rakesh Khatri Ji", role: "Nest Man of India", icon: "🦅" },
  { id: 14, name: "Deepak", role: "CA", icon: "💰" },
  { id: 15, name: "Ratan Deep", role: "Shiva Ji College", icon: "🎓" },
  { id: 16, name: "Shubham Tevatia", role: "Delhi Police", icon: "🛡️" },
  { id: 17, name: "Divyanshu Malhotra", role: "DD News Media", icon: "📺" },
  { id: 18, name: "Arvind Tiwari", role: "Retd. DOE", icon: "🏛️" },
];

const avatarColors = [
  "bg-[#3b5323]", "bg-[#c8a951]", "bg-[#2d4018]", "bg-[#5a7a3a]",
  "bg-[#8b7340]", "bg-[#4a6830]", "bg-[#a09050]", "bg-[#3b5323]",
];

export default function Members() {
  return (
    <section id="members" className="py-20 bg-[#f5f0e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a951] text-sm font-bold tracking-widest uppercase">Our Community</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#3b5323] mt-2">Most Active Members</h2>
          <div className="w-20 h-1 bg-[#c8a951] rounded-full mx-auto mt-4"></div>
          <p className="text-[#5a5a4a] mt-4 max-w-xl mx-auto">
            Distinguished alumni who are actively shaping their fields and inspiring the next generation.
          </p>
        </div>

        {/* Member Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8e0cc] flex items-center gap-4"
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-2xl ${avatarColors[index % avatarColors.length]} flex-shrink-0 flex flex-col items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-xl">{member.icon}</span>
                <span className="text-white/70 text-xs font-bold">{member.id.toString().padStart(2, "0")}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[#3b5323] font-black text-sm leading-tight truncate group-hover:text-[#c8a951] transition-colors">{member.name}</h3>
                <p className="text-[#7a7a6a] text-xs mt-1 leading-tight">{member.role}</p>
              </div>

              {/* Arrow */}
              <div className="text-[#c8a951] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-[#3b5323] text-[#f5f0e1] px-8 py-4 rounded-full shadow-lg hover:bg-[#2d4018] transition-all duration-200 cursor-pointer hover:shadow-xl group">
            <span className="font-bold">Become a Member</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}