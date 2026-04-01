import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "https://www.sahyogcare4u.org/blog/wp-content/uploads/2025/04/child-education-02.jpg",
    "https://udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg",
    
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmdvfGVufDB8fDB8fHww",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="ngo"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out ${
            current === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Olive + Lime Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b5323]/85 via-[#3b5323]/70 to-[#daeb84]/40"></div>

      {/* Soft dark layer */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl text-[#f5f0e1]">

          <p className="uppercase tracking-widest text-sm mb-2 opacity-80">
            Raise your helping hand for
          </p>

          <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-4">
            <span className="text-[#daeb84]">HELPLESS</span> <br />
            CHILDREN
          </h1>

          <p className="text-[#f5f0e1]/90 mb-6">
            Together we can bring change and build a better future.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#daeb84] text-[#3b5323] px-6 py-3 rounded-full font-bold hover:brightness-95 transition"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 shadow-2xl">

          {/* Card 1 */}
          <div className="bg-[#f5f0e1] p-6 text-center">
            <h3 className="font-bold text-lg mb-2 text-[#3b5323]">
              Become a Volunteer
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Join your hands with us & help the community.
            </p>
            <button className="bg-[#3b5323] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Register Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3b5323] text-[#f5f0e1] p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Give Donation</h3>
            <p className="text-sm opacity-80 mb-4">
              Help children get better education.
            </p>
            <button className="bg-[#daeb84] text-[#3b5323] px-4 py-2 rounded-full text-sm font-semibold">
              Donate Now
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#daeb84] p-6 text-center">
            <h3 className="font-bold text-lg mb-2 text-[#3b5323]">
              Give Scholarship
            </h3>
            <p className="text-sm text-[#3b5323]/80 mb-4">
              Support a child’s future with education.
            </p>
            <button className="bg-[#3b5323] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              current === i ? "bg-[#daeb84]" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}