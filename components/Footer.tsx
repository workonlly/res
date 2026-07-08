"use client";

import React from "react";
import { UtensilsCrossed, MapPin, Phone, Clock } from "lucide-react";

export default function Footer({ data }: { data?: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1f1311] text-gray-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        
        {/* Brand Col */}
        <div className="md:col-span-2">
          <div className="font-serif text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <img src="logo.png" alt="" className="w-10 h-10" />
            Gupta Bhojnalaya
          </div>
          <p className="mb-6 max-w-sm leading-relaxed">
            {data?.description || "Sambhal's trusted destination for pure vegetarian North Indian cuisine. Family-friendly dining with uncompromising taste and hygiene."}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Menu Highlights", "Gallery", "Visit Us"].map((link) => (
              <li key={link}>
                <button onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))} className="hover:text-[#ea580c] transition-colors">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#ea580c] mt-0.5 shrink-0" />
              <span>{data?.address || "Bahjoi Road, Yashoda Chauraha, Opp. Yamaha Showroom, Sambhal, UP 244302"}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#ea580c] shrink-0" />
              <span>{data?.phone || "+91 9837091490"}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-[#ea580c] shrink-0" />
              <span>{data?.hours || "Daily: 11:00 AM - 12:00 AM"}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Gupta Bhojnalaya, Sambhal. All rights reserved.</p>
      </div>
    </footer>
  );
}
