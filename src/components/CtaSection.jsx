import React, { useState } from "react";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Center Background Image (Desktop) */}
        <div className="hidden lg:block w-[460px] h-[460px] mx-auto rounded-[28px] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
            alt="Gaming Promo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two Floating Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:-mt-80 relative z-10 items-end">
          {/* Shop Card */}
          <div className="bg-[#f7f7f7] p-10 sm:p-14 rounded-[28px] shadow-lg max-w-lg">
            <span className="text-[#ee626b] font-bold text-sm uppercase tracking-widest">
              OUR SHOP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] mt-3 mb-5 leading-tight">
              Go Pre-Order Buy & Get Best{" "}
              <span className="text-[#0071f8]">Prices</span> For You!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Get instant access to upcoming AAA titles and exclusive bundle discounts every week.
            </p>
            <a
              href="#trending"
              className="inline-block bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-colors"
            >
              SHOP NOW
            </a>
          </div>

          {/* Newsletter Card */}
          <div className="bg-[#f7f7f7] p-10 sm:p-14 rounded-[28px] shadow-lg max-w-lg lg:ml-auto">
            <span className="text-[#ee626b] font-bold text-sm uppercase tracking-widest">
              NEWSLETTER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e] mt-3 mb-6 leading-tight">
              Get Up To $100 Off Just Buy{" "}
              <span className="text-[#0071f8]">Subscribe</span> Newsletter!
            </h2>

            {subscribed ? (
              <div className="bg-green-100 text-green-800 text-sm font-semibold px-5 py-4 rounded-2xl">
                Subscribed successfully! Check your inbox for your discount code.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center bg-white rounded-full p-1.5 shadow-sm"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email..."
                  className="w-full px-5 py-2.5 text-sm text-gray-700 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}