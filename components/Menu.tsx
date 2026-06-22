"use client";

import React, { useState, useEffect } from "react";
import { UtensilsCrossed, Pizza } from "lucide-react";

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState<"indian" | "snacks">("indian");
  const [menuData, setMenuData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${url}/api/menu`, { cache: 'no-store' });
        const data = await res.json();
        setMenuData(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  const indianTypes = ['Main Course Veg', 'Bahar-e-Paneer', 'Mushroom', 'Gravy Chaap', 'Thela Biryani', 'Rice & Combos', 'Tandoori Breads', 'Thali Special', 'Salad / Raita / Papad'];

  const grouped = menuData.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = {
        titleEn: item.type,
        titleHi: item.type,
        items: []
      };
    }
    
    let priceStr = '';
    if (item.half_price !== null && item.full_price !== null) {
      priceStr = `${item.half_price}/${item.full_price}`;
    } else if (item.half_price !== null) {
      priceStr = `${item.half_price}`;
    } else if (item.full_price !== null) {
      priceStr = `${item.full_price}`;
    }
    
    acc[item.type].items.push({
      nameEn: item.item_en,
      nameHi: item.item_hn,
      price: priceStr
    });
    return acc;
  }, {});

  const indianMenuData: any[] = [];
  const snacksMenuData: any[] = [];

  const titleHiMap: Record<string, string> = {
    'Main Course Veg': 'खाना खज़ाना',
    'Bahar-e-Paneer': 'बहार-ए-पनीर',
    'Mushroom': 'मशरूम',
    'Gravy Chaap': 'ग्रेवी चाप',
    'Thela Biryani': 'ठेला बिरयानी',
    'Rice & Combos': 'चावल और कॉम्बो',
    'Tandoori Breads': 'तन्दूरी रोटी',
    'Thali Special': 'थाली स्पेशल',
    'Salad / Raita / Papad': 'सलाद / रायता / पापड़',
    'Desserts': 'मिठाइयां',
    'South Indian': 'साउथ इंडियन',
    'Chinese Starters / Noodles': 'चाइनीज / नूडल्स',
    'Tandoori Snacks / Rolls': 'तन्दूरी स्नैक्स / रोल्स',
    'Pizza & Pasta': 'पिज़्ज़ा और पास्ता',
    'Quick Bites & Burgers': 'क्विक बाइट्स',
    'Momos & Chaat': 'मोमोस और चाट',
    'Soups & Sizzlers': 'सूप',
    'Shakes, Drinks & Mocktails': 'ड्रिंक्स',
    'Tandoori Parathas / Kulcha': 'तन्दूरी पराठे / कुल्चा'
  };

  Object.values(grouped).forEach((cat: any) => {
    cat.titleHi = titleHiMap[cat.titleEn] || cat.titleEn;
    if (indianTypes.includes(cat.titleEn)) {
      indianMenuData.push(cat);
    } else {
      snacksMenuData.push(cat);
    }
  });

  return (
    <div className="bg-[#fffdf9] font-sans text-[#3e2723] pb-20 pt-10">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-10 border-b border-gray-200 pb-1">
          <button 
            onClick={() => setActiveTab("indian")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-lg transition-colors border-b-4 ${activeTab === "indian" ? "border-[#ea580c] text-[#ea580c]" : "border-transparent text-gray-500 hover:text-[#ea580c]"}`}
          >
            <UtensilsCrossed size={20} />
            Main Course & Thali
          </button>
          <button 
            onClick={() => setActiveTab("snacks")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-lg transition-colors border-b-4 ${activeTab === "snacks" ? "border-[#ea580c] text-[#ea580c]" : "border-transparent text-gray-500 hover:text-[#ea580c]"}`}
          >
            <Pizza size={20} />
            Snacks, Chinese & South Indian
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">Loading amazing dishes...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {activeTab === "indian" 
              ? indianMenuData.map((category, idx) => <MenuCategory key={idx} category={category} />)
              : snacksMenuData.map((category, idx) => <MenuCategory key={idx} category={category} />)
            }
          </div>
        )}

        <div className="mt-16 text-center text-sm font-medium text-gray-500 bg-gray-100 py-4 rounded-md">
          <p>5% GST EXTRA • All prices are in INR (₹)</p>
          <p>Format: Half Price / Full Price (Where applicable)</p>
        </div>
      </main>
    </div>
  );
}

// --- Reusable Component for a Menu Category ---
const MenuCategory = ({ category }: { category: any }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex flex-col mb-4 pb-2 border-b-2 border-[#ea580c]/20">
      <h2 className="text-2xl font-serif font-bold text-[#ea580c]">{category.titleEn}</h2>
      <h3 className="text-xl font-bold text-gray-700">{category.titleHi}</h3>
    </div>
    <ul className="space-y-3">
      {category.items.map((item: any, idx: number) => {
        const hasHalfFull = item.price && item.price.includes('/');
        const [halfPrice, fullPrice] = hasHalfFull ? item.price.split('/') : [null, item.price];
        
        return (
          <li key={idx} className="flex justify-between items-start border-b border-gray-50 pb-2 last:border-0 last:pb-0">
            <div className="flex flex-col flex-1 pr-4">
              <span className="font-semibold text-gray-800 text-[15px]">{item.nameEn}</span>
              <span className="text-gray-600 text-sm">{item.nameHi}</span>
            </div>
            <div className="flex flex-col items-end min-w-[80px] shrink-0">
              {hasHalfFull ? (
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Half</span>
                    <span className="font-bold text-[#204a44] leading-none">₹{halfPrice?.trim()}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-[#ea580c] uppercase font-bold tracking-widest leading-none mb-1">Full</span>
                    <span className="font-bold text-[#ea580c] leading-none">₹{fullPrice?.trim()}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-end justify-center h-full pt-1">
                  <span className="font-bold text-[#ea580c] text-base">
                    {fullPrice && fullPrice.toUpperCase() === 'MRP' ? 'MRP' : (fullPrice ? `₹${fullPrice.trim()}` : '')}
                  </span>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);