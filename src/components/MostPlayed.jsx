import React, { useState } from "react";
import { X } from "lucide-react";

export default function MostPlayed({ games }) {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section id="most-played" className="py-24 bg-[#f7f7f7] rounded-[90px] md:rounded-[130px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#ee626b] font-bold text-sm uppercase tracking-widest">
              TOP GAMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] mt-2">
              Most Played
            </h2>
          </div>
          <a
            href="#most-played"
            className="bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="group bg-white rounded-[25px] text-center pb-7 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-44 rounded-[25px] overflow-hidden mb-5">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs text-gray-400 font-medium">{game.category}</span>
              <h4 className="font-bold text-base text-[#1e1e1e] mt-1 mb-4 px-2 group-hover:text-[#0071f8] transition-colors">
                {game.title}
              </h4>
              <button
                onClick={() => setSelectedGame(game)}
                className="bg-[#ee626b] group-hover:bg-[#0071f8] text-white text-xs font-semibold uppercase px-5 py-2.5 rounded-full transition-colors -mb-10 shadow-md"
              >
                EXPLORE
              </button>
            </div>
          ))}
        </div>
      </div>


      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] max-w-md w-full overflow-hidden shadow-2xl animate-fadeIn">
            <div className="relative h-56">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#ee626b] hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-7">
              <span className="text-xs font-bold uppercase text-[#ee626b] tracking-wider">
                {selectedGame.category}
              </span>
              <div className="flex items-center justify-between mt-1 mb-3">
                <h3 className="text-2xl font-extrabold text-[#1e1e1e]">
                  {selectedGame.title}
                </h3>
                <span className="bg-[#0071f8] text-white text-xs font-bold px-3.5 py-1.5 rounded-full">
                  {selectedGame.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {selectedGame.description}
              </p>
              <button
                onClick={() => setSelectedGame(null)}
                className="w-full bg-[#ee626b] hover:bg-[#0071f8] text-white font-semibold text-sm py-3 rounded-full transition-colors"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
