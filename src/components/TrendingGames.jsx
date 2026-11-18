import React from "react";
import { ShoppingBag } from "lucide-react";

export default function TrendingGames({ games, onAddToCart }) {
  return (
    <section id="trending" className="py-24">
      <div className="max-w-7xl mx-auto px-5">
      
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#ee626b] font-bold text-sm uppercase tracking-widest">
              TRENDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] mt-2">
              Trending Games
            </h2>
          </div>
          <a
            href="#trending"
            className="bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors"
          >
            VIEW ALL
          </a>
        </div>

       
        {games.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No games match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {games.map((game) => (
              <div
                key={game.id}
                className="group bg-[#eeeeee] rounded-[25px] overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden rounded-[25px]">
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
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-medium">
                      {game.category}
                    </span>
                    <h4 className="font-bold text-lg text-[#1e1e1e] group-hover:text-[#0071f8] transition-colors">
                      {game.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => onAddToCart(game)}
                    title="Add to Cart"
                    className="w-11 h-11 rounded-full bg-[#ee626b] group-hover:bg-[#0071f8] text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
