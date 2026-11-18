import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0071f8] to-[#0055c4] pt-40 pb-24 rounded-b-[100px] text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
          Contact Us
        </h1>
        <p className="text-sm text-white/80 mt-3">
          <Link to="/" className="hover:underline">Home</Link> &gt; Contact Us
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-12 gap-12">
        {/* Left Info Card */}
        <div className="lg:col-span-6 bg-[#f7f7f7] p-10 sm:p-12 rounded-[28px] space-y-6">
          <span className="text-[#ee626b] font-bold text-sm uppercase tracking-widest">
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e1e]">
            Say Hello!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Have a question about an order, game keys, or partnership opportunities? Reach out to our support team anytime and we will respond within 24 hours.
          </p>

          <div className="space-y-4 pt-4 text-sm">
            <div>
              <span className="block font-bold text-[#1e1e1e]">Address</span>
              <span className="text-gray-500">Sunny Isles Beach, FL 33160, United States</span>
            </div>
            <div>
              <span className="block font-bold text-[#1e1e1e]">Phone</span>
              <span className="text-gray-500">+123 456 7890</span>
            </div>
            <div>
              <span className="block font-bold text-[#1e1e1e]">Email</span>
              <span className="text-gray-500">lugx@contact.com</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-6">
          {sent ? (
            <div className="bg-green-100 text-green-800 p-8 rounded-[28px] font-semibold text-center">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  placeholder="Your Name..."
                  className="w-full bg-[#f7f7f7] border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-[#0071f8]"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Surname..."
                  className="w-full bg-[#f7f7f7] border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-[#0071f8]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  required
                  placeholder="Your E-mail..."
                  className="w-full bg-[#f7f7f7] border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-[#0071f8]"
                />
                <input
                  type="text"
                  placeholder="Subject..."
                  className="w-full bg-[#f7f7f7] border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-[#0071f8]"
                />
              </div>

              <textarea
                rows="5"
                required
                placeholder="Your Message"
                className="w-full bg-[#f7f7f7] border border-gray-200 rounded-[25px] p-6 text-sm focus:outline-none focus:border-[#0071f8]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#ee626b] hover:bg-[#0071f8] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors cursor-pointer"
              >
                SEND MESSAGE NOW
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}