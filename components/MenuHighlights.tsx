"use client";

import React, { useState } from "react";
import { Leaf, ChevronRight, ChevronDown } from "lucide-react";
import FullMenu from "./Menu";

export default function MenuHighlights() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id="menu-highlights" className="py-20 bg-[#f9f5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3e2723] mb-4">Menu Highlights</h2>
          <p className="text-gray-600 text-lg">A taste of our most loved pure vegetarian dishes, prepared fresh with traditional spices.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Cards */}
          {[
            { name: "Special Deluxe Thali", desc: "A complete meal with Dal Makhani, Shahi Paneer, Mix Veg, Rice, Roti, Raita, and sweet.", img: "/dfd.png" },
            { name: "Kadai Paneer", desc: "Fresh paneer tossed with bell peppers and tomatoes in a rich, aromatic spiced gravy.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuzQ4eHwBdwPwmNujZfEiHU0M9HW7ISBlNjf2BS0Fu94L6JqqawpXF-o&s=10" },
            { name: "Dal Tadka", desc: "Comforting yellow lentils tempered with ghee, cumin, garlic, and dry red chilies.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eujOiLquVSATMMpKp6aH_YZeTyS_vvvlPdH8gXGn8rlLYibJvHB0i28&s=10" },
          ].map((dish, idx) => (
            <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-green-600">
                  <Leaf size={16} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#3e2723] mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showFullMenu ? (
            <button
              onClick={() => setShowFullMenu(true)}
              className="text-[#ea580c] font-medium flex items-center justify-center gap-2 cursor-pointer hover:underline mx-auto"
            >
              Click here to explore the full menu <ChevronDown size={18} />
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowFullMenu(false)}
                className="text-[#ea580c] font-medium flex items-center justify-center gap-2 cursor-pointer hover:underline mx-auto mb-8"
              >
                Hide full menu <ChevronRight size={18} className="rotate-[-90deg]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {showFullMenu && (
        <div className="mt-8 border-t border-[#ea580c]/20">
          <FullMenu />
        </div>
      )}
    </section>
  );
}
