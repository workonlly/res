"use client";

import React, { useState } from "react";
import { Star, Heart, MapPin, Clock, ThumbsUp, CheckCircle, MessageSquare } from "lucide-react";

export default function Reviews({ data }: { data?: any }) {
  // State to handle the "Helpful" button click interaction
  const [helpfulClicks, setHelpfulClicks] = useState<Record<number, boolean>>({});

  const handleHelpful = (id: number) => {
    setHelpfulClicks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const reviewsData = [
    {
      id: 1,
      name: "Amit Varshney",
      initials: "AV",
      avatarColor: "bg-blue-600",
      rating: 5,
      date: "2 weeks ago",
      source: "Google",
      text: "Best pure veg restaurant in Sambhal. We ordered the Deluxe Thali and Paneer Butter Masala. The taste was very authentic and the portion size is totally worth the price. Highly recommend for family dinners.",
      helpful: 12
    },
    {
      id: 2,
      name: "Sneha Agarwal",
      initials: "SA",
      avatarColor: "bg-emerald-600",
      rating: 4,
      date: "1 month ago",
      source: "Justdial",
      text: "The food is really good, especially their Tandoori Chaap and Dal Makhani. Ambience is clean and family-friendly. It gets a bit crowded on weekends so service was slightly slow, but overall a great experience near Yashoda Chauraha.",
      helpful: 8
    },
    {
      id: 3,
      name: "Ravi Pratap Singh",
      initials: "RS",
      avatarColor: "bg-purple-600",
      rating: 5,
      date: "3 months ago",
      source: "Google",
      text: "Consistently good food. I have been visiting Gupta Bhojnalaya for over a year now. The hygiene is maintained very well and the staff is very polite. Must try their Special Thali if you are very hungry!",
      helpful: 24
    }
  ];

  const trustFeatures = data?.features_json || [
    { title: "Loved by Sambhal", sub: "Serving authentic taste daily" },
    { title: "Easy to Reach", sub: "Near Yashoda Chauraha" },
    { title: "Always Fresh", sub: "Open 11:00 AM - 12:00 AM" }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#2E1B15] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {data?.title || "Trusted by Sambhal"}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-white">4.1</span>
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => <Star key={i} fill="#ea580c" className="text-[#ea580c]" size={24} />)}
              <div className="relative">
                <Star className="text-[#ea580c]" size={24} />
                <div className="absolute inset-0 overflow-hidden w-[20%]">
                  <Star fill="#ea580c" className="text-[#ea580c]" size={24} />
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 font-medium">
            {data?.subtitle || "Based on 450+ verified reviews from local patrons"}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-[#3e2723] p-8 rounded-lg border border-white/10 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              
              <div>
                {/* User Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.avatarColor}`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white leading-tight">{review.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <CheckCircle size={12} className="text-green-400" />
                        <span>Verified • {review.source}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Star Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < review.rating ? "#ea580c" : "transparent"} className={i < review.rating ? "text-[#ea580c]" : "text-gray-600"} size={16} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-200 leading-relaxed text-sm italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Interaction Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-sm text-gray-400">
                <button 
                  onClick={() => handleHelpful(review.id)}
                  className={`flex items-center gap-1.5 transition-colors ${helpfulClicks[review.id] ? "text-[#ea580c]" : "hover:text-white"}`}
                >
                  <ThumbsUp size={16} className={helpfulClicks[review.id] ? "fill-[#ea580c]" : ""} />
                  <span>Helpful ({helpfulClicks[review.id] ? review.helpful + 1 : review.helpful})</span>
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Trust Strip */}
        <div className="mt-20 bg-gradient-to-r from-[#ea580c] to-[#c24100] py-8 px-6 md:px-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
           <div className="flex items-center gap-4">
             <div className="bg-white/20 p-3 rounded-full">
               <Heart size={28} className="text-white fill-white" />
             </div>
             <div>
               <span className="block font-bold text-xl text-white">{trustFeatures[0]?.title}</span>
               <span className="text-orange-100 text-sm">{trustFeatures[0]?.sub}</span>
             </div>
           </div>
           
           <div className="hidden md:block w-px h-12 bg-white/30"></div>
           
           <div className="flex items-center gap-4">
             <div className="bg-white/20 p-3 rounded-full">
               <MapPin size={28} className="text-white" />
             </div>
             <div>
               <span className="block font-bold text-xl text-white">{trustFeatures[1]?.title}</span>
               <span className="text-orange-100 text-sm">{trustFeatures[1]?.sub}</span>
             </div>
           </div>
           
           <div className="hidden md:block w-px h-12 bg-white/30"></div>
           
           <div className="flex items-center gap-4">
             <div className="bg-white/20 p-3 rounded-full">
               <Clock size={28} className="text-white" />
             </div>
             <div>
               <span className="block font-bold text-xl text-white">{trustFeatures[2]?.title}</span>
               <span className="text-orange-100 text-sm">{trustFeatures[2]?.sub}</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}