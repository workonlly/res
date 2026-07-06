"use client";

import React from "react";
import { Leaf, MapPin, Navigation } from "lucide-react";

export default function Hero({ data }: { data?: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderTitle = (title: string) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")}{" "}
        <span className="text-[#ea580c] inline-block hover:scale-105 transition-transform duration-300">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Placeholder for high-quality North Indian Thali/Restaurant background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E1B15]/90 via-[#2E1B15]/70 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#ea580c]/30 backdrop-blur-md border border-[#ea580c]/50 text-white px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-lg uppercase tracking-wider">
            <Leaf size={16} className="text-green-400" /> {data?.badge || "100% Pure Vegetarian"}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-tight mb-6 drop-shadow-2xl tracking-tight">
            {data?.title ? renderTitle(data.title) : (
              <>Pure Veg Taste That <span className="text-[#ea580c] inline-block hover:scale-105 transition-transform duration-300">Feels Like Home</span></>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 font-medium max-w-2xl leading-relaxed drop-shadow-lg">
            {data?.description || "Authentic North Indian meals and comforting family dining, proudly serving Sambhal near Yashoda Chauraha."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection("visit-us")}
              className="w-full sm:w-auto bg-[#ea580c] text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Navigation size={20} /> {data?.primary_cta || "Get Directions"}
            </button>
            <button 
              onClick={() => scrollToSection("menu-highlights")}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-sm font-medium text-lg hover:bg-white hover:text-[#3e2723] transition-colors flex items-center justify-center gap-2"
            >
              {data?.secondary_cta || "View Menu Highlights"}
            </button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-gray-300 text-sm border-l-2 border-[#b87333] pl-4">
            <MapPin size={16} className="text-[#ea580c]" />
            {data?.address || "Bahjoi Road, Yashoda Chauraha, Opp. Yamaha Showroom, Sambhal"}
          </div>
        </div>
      </div>
    </section>
  );
}
