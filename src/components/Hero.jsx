import React from "react";

export default function Hero({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const el = document.getElementById("trending");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#0071f8] via-[#0066e0] to-[#0055c4] pt-36 pb-48 rounded-b-[110px] md:rounded-b-[150px] text-white"
    >
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
 
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-[2px] text-white/90">
            WELCOME TO LUGX
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.15] relative">
            BEST GAMING SITE EVER!
          </h1>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
            LUGX Gaming is a modern online game store experience. Discover top-rated action, adventure, and strategy titles with exclusive discounts and instant digital access.
          </p>

         
          <form
            onSubmit={handleSearch}
            className="relative max-w-md flex items-center bg-white rounded-full p-1.5 shadow-xl mt-4"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type something..."
              className="w-full px-5 py-2.5 text-sm text-gray-700 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
            >
              SEARCH NOW
            </button>
          </form>
        </div>

      
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] rounded-[28px] overflow-visible shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
              alt="Featured Game"
              className="w-full h-[420px] object-cover rounded-[28px]"
            />
            <span className="absolute top-5 right-5 bg-[#0071f8] text-white font-extrabold text-xl px-5 py-2 rounded-full shadow-lg">
              $22
            </span>
            <span className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#ee626b] text-white font-extrabold text-2xl rounded-full flex items-center justify-center shadow-xl">
              -40%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
