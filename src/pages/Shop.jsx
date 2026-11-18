import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function Shop({ games, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("SHOW ALL");
  const filterTabs = ["SHOW ALL", "ACTION", "RPG", "SHOOTER", "STRATEGY"];

  const filteredGames =
    selectedCategory === "SHOW ALL"
      ? games
      : games.filter((g) => g.category.toUpperCase() === selectedCategory);

  return (
    <div>
     
      <div className="bg-gradient-to-br from-[#0071f8] to-[#0055c4] pt-40 pb-24 rounded-b-[100px] text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
          Our Shop
        </h1>
        <p className="text-sm text-white/80 mt-3">
          <Link to="/" className="hover:underline">Home</Link> &gt; Our Shop
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === tab
                  ? "bg-[#ee626b] text-white shadow-md"
                  : "bg-[#eeeeee] text-[#1e1e1e] hover:text-[#ee626b]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group bg-[#eeeeee] rounded-[25px] overflow-hidden hover:shadow-xl transition-all"
            >
              <Link to={`/product/${game.id}`} className="block relative h-56 overflow-hidden rounded-[25px]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0071f8] text-white px-3.5 py-1.5 rounded-2xl text-right shadow-md">
                  {game.oldPrice && (
                    <span className="block text-xs line-through opacity-75">
                      ${game.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-base">${game.price}</span>
                </div>
              </Link>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-medium">{game.category}</span>
                  <Link to={`/product/${game.id}`}>
                    <h4 className="font-bold text-lg text-[#1e1e1e] group-hover:text-[#0071f8] transition-colors">
                      {game.title}
                    </h4>
                  </Link>
                </div>
                <button
                  onClick={() => onAddToCart(game)}
                  className="w-11 h-11 rounded-full bg-[#ee626b] group-hover:bg-[#0071f8] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
