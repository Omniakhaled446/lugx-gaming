import React from "react";

export default function Categories({ categories }) {
  return (
    <section id="categories" className="py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="text-[#ee626b] font-bold text-sm uppercase tracking-widest">
            CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] mt-2">
            Top Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-[#0071f8] rounded-[25px] overflow-hidden text-center cursor-pointer shadow-md hover:-translate-y-1.5 transition-all duration-300"
            >
              <h4 className="text-white font-bold text-lg py-5">{cat.name}</h4>
              <div className="h-48 rounded-t-[25px] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}