"use client";

import { useState, useEffect, useCallback } from "react";
import { User, Users, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    avatar: <User size={20} strokeWidth={1.5} className="text-white" />,
    name: "Ramesh Shetty",
    role: "Regular Guest · Mangaluru",
    text: "The Udupi Thali here is the best I have had outside of Udupi itself. Everything is fresh, authentic and served with such warmth.",
  },
  {
    avatar: <User size={20} strokeWidth={1.5} className="text-white" />,
    name: "Priya Nair",
    role: "Food Enthusiast · Udupi",
    text: "Spotlessly clean restaurant, very fresh food — you can actually taste the difference when there are no artificial flavours.",
  },
  {
    avatar: <Users size={20} strokeWidth={1.5} className="text-white" />,
    name: "Suresh & Family",
    role: "Family Guest · Mangaluru",
    text: "My whole family loves coming here. The kids enjoy the dosas and we trust the hygiene completely. The green ambiance is so relaxing.",
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextReview, 2000); // changes every 2 seconds matching the requirement
    return () => clearInterval(interval);
  }, [nextReview]);

  return (
    <div className="relative max-w-[900px] mx-auto group">
      {/* Cards container */}
      <div className="relative overflow-hidden w-full min-h-[350px] md:min-h-[300px] flex items-center justify-center perspective-[1000px]">
        {reviews.map((review, i) => {
          // Calculate positions
          let transform = "translateX(100%) scale(0.9) rotateY(10deg)";
          let opacity = 0;
          let zIndex = 0;
          
          if (i === currentIndex) {
            transform = "translateX(0) scale(1) rotateY(0deg)";
            opacity = 1;
            zIndex = 10;
          } else if (i === (currentIndex - 1 + reviews.length) % reviews.length) {
            transform = "translateX(-100%) scale(0.9) rotateY(-10deg)";
            opacity = 0;
          }

          return (
            <div
              key={i}
              className="absolute w-full px-4 md:px-12 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
              style={{ transform, opacity, zIndex }}
            >
              <div className="bg-forest/80 backdrop-blur-xl border border-green-light/20 p-[40px_32px] md:p-[60px_50px] relative max-w-[700px] mx-auto text-center shadow-2xl transition-all duration-300 before:content-['\22'] before:font-playfair before:text-[180px] before:leading-[0.8] before:text-lime/10 before:absolute before:-top-4 before:left-4 hover:border-lime/40">
                <div className="text-lime text-[16px] mb-6 tracking-[4px]">★★★★★</div>
                <div className="font-cormorant text-[20px] md:text-[26px] leading-[1.6] text-cream mb-10 font-light italic">
                  "{review.text}"
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-black/50 border border-green-light/30 flex items-center justify-center text-[18px]">
                    {review.avatar}
                  </div>
                  <div className="leading-tight text-left">
                    <div className="text-[16px] text-white font-playfair tracking-wide">{review.name}</div>
                    <div className="text-[12px] text-lime/80 mt-1 uppercase tracking-[2px]">{review.role}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevReview}
        className="hidden md:flex absolute left-[-40px] xl:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 border border-green-light/30 rounded-full items-center justify-center bg-black/60 text-lime hover:bg-lime hover:text-black hover:scale-110 transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Previous review"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>

      <button 
        onClick={nextReview}
        className="hidden md:flex absolute right-[-40px] xl:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 border border-green-light/30 rounded-full items-center justify-center bg-black/60 text-lime hover:bg-lime hover:text-black hover:scale-110 transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Next review"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-10">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-[3px] transition-all duration-500 rounded-full ${
              i === currentIndex ? "w-12 bg-lime" : "w-4 bg-green-light/20 hover:bg-green-light/50"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
