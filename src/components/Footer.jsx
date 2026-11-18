import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0071f8] text-white text-center py-12 mt-16 rounded-t-[90px] md:rounded-t-[130px]">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-sm text-white/90">
          Copyright © {new Date().getFullYear()} LUGX Gaming Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}