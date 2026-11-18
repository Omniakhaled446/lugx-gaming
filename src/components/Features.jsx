import React from "react";
import { CloudDownload, UserCheck, RotateCcw, Layers } from "lucide-react";

const features = [
  { title: "FREE STORAGE", icon: CloudDownload },
  { title: "USER MORE", icon: UserCheck },
  { title: "REPLY READY", icon: RotateCcw },
  { title: "EASY LAYOUT", icon: Layers },
];

export default function Features() {
  return (
    <section className="-mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.title}
              className="group bg-white rounded-[25px] p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#0071f8] group-hover:bg-[#ee626b] text-white flex items-center justify-center transition-colors duration-300">
                <IconComponent className="w-9 h-9" />
              </div>
              <h4 className="font-bold text-base tracking-wide text-[#1e1e1e]">
                {item.title}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}