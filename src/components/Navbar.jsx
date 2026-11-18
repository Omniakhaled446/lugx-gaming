import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gamepad2, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Shop", path: "/shop" },
    { name: "Product Details", path: "/product/1" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0071f8] py-3.5 shadow-xl rounded-b-[28px]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
       
        <Link
          to="/"
          className="flex items-center gap-2.5 text-white font-extrabold text-2xl tracking-wider"
        >
          <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <span>LUGX</span>
        </Link>

    
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ee626b] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-block bg-[#ee626b] hover:bg-[#d9535c] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition shadow-md"
          >
            SIGN IN
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenu ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

     
      {mobileMenu && (
        <div className="lg:hidden bg-white mx-5 mt-3 rounded-3xl shadow-2xl p-4 flex flex-col gap-2 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenu(false)}
              className="py-2.5 text-sm font-semibold text-[#1e1e1e] hover:text-[#ee626b] border-b border-gray-100 last:border-none"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
