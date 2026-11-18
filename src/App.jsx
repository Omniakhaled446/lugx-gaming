import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { X, Trash2 } from "lucide-react";
import { trendingGames, mostPlayedGames, categories } from "./data/gamesData";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

// مكون صغير يرجع الصفحة للأعلى تلقائياً عند الانتقال بين الصفحات
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (game) => {
    const numericPrice = typeof game.price === "number" ? game.price : 25;
    setCart((prev) => [
      ...prev,
      { ...game, price: numericPrice, cartId: Date.now() + Math.random() },
    ]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-white text-[#1e1e1e]">
        {/* الهيدر الثابت في كل الصفحات */}
        <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

        {/* محتوى الصفحات المتغيرة */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  games={trendingGames}
                  mostPlayed={mostPlayedGames}
                  categories={categories}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  games={trendingGames}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetails
                  games={[...trendingGames, ...mostPlayedGames]}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* الفوتر الثابت في كل الصفحات */}
        <Footer />

        {/* سلة المشتريات الجانبية (Cart Drawer) */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
            <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="text-xl font-extrabold text-[#1e1e1e]">
                    Shopping Cart ({cart.length})
                  </h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center mt-20 text-sm">
                    Your cart is empty. Add some games!
                  </p>
                ) : (
                  <div className="mt-5 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.cartId}
                        className="flex items-center justify-between bg-[#f7f7f7] p-3 rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-14 h-14 rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-[#1e1e1e]">
                              {item.title}
                            </h4>
                            <span className="text-xs font-bold text-[#0071f8]">
                              ${item.price}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(item.cartId)}
                          className="text-gray-400 hover:text-[#ee626b] p-2 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-extrabold text-lg mb-4">
                    <span>Total:</span>
                    <span className="text-[#0071f8]">${totalPrice}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert("Order placed successfully!");
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                    className="w-full bg-[#ee626b] hover:bg-[#0071f8] text-white font-bold text-sm py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    CHECKOUT NOW
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}