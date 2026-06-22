"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Gallery({ data }: { data?: any }) {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: false })
  ]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, images]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${url}/api/gallery`, { cache: 'no-store' });
        const fetchedData = await res.json();
        setImages(fetchedData);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-[#fffdf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3e2723] mb-4">
            {data?.title || "Our Atmosphere & Food"}
          </h2>
          <p className="text-gray-600">
            {data?.subtitle || "A glimpse into the Gupta Bhojnalaya experience."}
          </p>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading gallery...</div>
      ) : images.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No images to display.</div>
      ) : (
        <div className="embla w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex">
            {[...images, ...images, ...images, ...images].map((img, idx) => (
              <div 
                className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0 pl-4" 
                key={`${img.id}-${idx}`}
              >
                <div className="h-[250px] md:h-[300px] rounded-sm overflow-hidden shadow-sm relative group">
                  <img 
                    src={img.imageurl} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                    alt="Gallery Image" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
