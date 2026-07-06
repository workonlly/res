import React from "react";
import { Star, Users, Video } from "lucide-react";

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#3e2723] mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-[#ea580c] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the finest dining, celebrate your special moments in our party hall, and become a part of our growing family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Party Hall Video Section */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative h-[300px] sm:h-[400px] w-full bg-black group">
              <video 
                src="/video.mp4" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <Video size={18} className="text-[#ea580c]" />
                <span className="font-medium text-sm text-gray-900">Party Hall Available</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold text-[#3e2723] mb-3 flex items-center gap-2">
                <Users className="text-[#ea580c]" size={24} />
                Host Your Events
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Make your celebrations unforgettable with our spacious and beautifully decorated party hall. Perfect for birthdays, anniversaries, corporate events, and family gatherings. We provide exceptional service and customized catering to suit your needs.
              </p>
             
            </div>
          </div>

          {/* Owner & Social Section */}
          <div className="flex flex-col gap-8">
            
            {/* Owner Section */}
            <div className="bg-[#3e2723] rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row text-white flex-1 relative group">
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                <img 
                  src="/owner.jpeg" 
                  alt="Owner of Swad Gupta Bhojnalaya" 
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:hidden"></div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center relative z-10">
                <Star className="text-[#ea580c] mb-4" size={32} />
                <h3 className="text-2xl font-serif font-bold mb-2">A Word from the Owner</h3>
                <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">
                  "Our journey began with a simple passion: to serve authentic, delicious food that feels like home. We put our heart into every dish to ensure your dining experience is nothing short of extraordinary."
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-[2px] bg-[#ea580c]"></div>
                  <p className="font-medium text-[#ea580c] uppercase tracking-wider text-sm">Our Heritage</p>
                </div>
              </div>
            </div>

            {/* Instagram Section */}
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-1 shadow-lg h-auto flex-shrink-0 group hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-white rounded-xl p-8 h-full flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    Join Our Community
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Follow us on Instagram for daily updates, special offers, and mouth-watering food reels!
                  </p>
                </div>
                <a 
                  href="https://www.instagram.com/swadguptabhojnalya/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full sm:w-auto px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-md whitespace-nowrap shrink-0"
                >
                  <InstagramIcon size={20} />
                  Follow Us
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
