import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function ProductDetails({ games, onAddToCart }) {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const game = games.find((g) => String(g.id) === id) || games[0];
  const numericPrice = typeof game.price === "number" ? game.price : 25;

  return (
    <div>
   
      <div className="bg-gradient-to-br from-[#0071f8] to-[#0055c4] pt-40 pb-24 rounded-b-[100px] text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
          {game.title}
        </h1>
        <p className="text-sm text-white/80 mt-3">
          <Link to="/" className="hover:underline">Home</Link> &gt;{" "}
          <Link to="/shop" className="hover:underline">Shop</Link> &gt; {game.title}
        </p>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center pb-16 border-b border-gray-200">
          <div className="lg:col-span-6">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-[430px] object-cover rounded-[28px] shadow-xl"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#1e1e1e]">{game.title}</h2>
            <div className="flex items-center gap-3">
              {game.oldPrice && (
                <span className="text-lg text-gray-400 line-through font-semibold">
                  ${game.oldPrice}
                </span>
              )}
              <span className="text-3xl font-extrabold text-[#0071f8]">
                {typeof game.price === "number" ? `$${game.price}` : game.price}
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {game.description ||
                "LUGX Gaming brings you the ultimate digital edition with full multiplayer access, high-definition textures, and instant cloud save support."}
            </p>

            {/* Add to Cart Controls */}
            <div className="flex items-center gap-4 pt-2">
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-20 h-12 rounded-full border border-gray-300 text-center font-bold text-sm focus:outline-none focus:border-[#0071f8]"
              />
              <button
                onClick={() => onAddToCart({ ...game, price: numericPrice })}
                className="flex items-center gap-2.5 bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                ADD TO CART
              </button>
            </div>

            <ul className="pt-6 space-y-2.5 text-sm text-gray-500">
              <li>
                <span className="text-gray-400 w-28 inline-block">Game ID:</span>
                <span className="text-[#0071f8] font-medium">LUGX-{game.id}</span>
              </li>
              <li>
                <span className="text-gray-400 w-28 inline-block">Genre:</span>
                <span className="text-[#0071f8] font-medium">{game.category}</span>
              </li>
              <li>
                <span className="text-gray-400 w-28 inline-block">Multi-tags:</span>
                <span className="text-[#0071f8] font-medium">War, Battle, Royal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
