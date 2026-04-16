import Image from "next/image";
import FloatingLeaves from "@/components/FloatingLeaves";
import FadeInTitle from "@/components/FadeInTitle";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Leaf, Clock, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <FloatingLeaves />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[url('/images/img1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed pt-32">
        <div className="absolute inset-0 bg-black/65 z-0" />
        <div className="relative z-10 text-center px-6 max-w-[800px] animate-fadeUp">
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime justify-center mb-6">
            <span className="w-10 h-[1px] bg-lime inline-block" />
            Our Heritage
            <span className="w-10 h-[1px] bg-lime inline-block" />
          </div>
          <FadeInTitle 
             as="h1"
             text1="A Legacy of" 
             br={true} 
             highlight="Purity & Taste"
             className="font-playfair text-[clamp(46px,7vw,80px)] leading-[1.05] text-white mb-6" 
          />
          <p className="text-[18px] md:text-[22px] leading-[1.8] text-cream/90 font-light font-cormorant tracking-[1px] max-w-[600px] mx-auto">
            Discover the heart and soul behind Mangaluru's most cherished Adyar special dining experience.
          </p>
        </div>
      </section>

      {/* 2. THE BEGINNING / ORIGIN STORY */}
      <section className="bg-deep px-6 py-20 md:py-[120px] md:px-[60px] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="animate-fadeRight relative">
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-6 before:content-[''] before:w-10 before:h-[1px] before:bg-lime">
              How It Started
            </div>
            <FadeInTitle 
              text1="From Humble Beginnings to a" 
              highlight="Culinary Destination"
              className="font-playfair text-[clamp(36px,5vw,52px)] leading-[1.15] text-white mb-8" 
            />
            <div className="space-y-6 text-[16px] leading-[1.8] text-text-muted font-light">
              <p>
                The journey of Shreematha Refreshments began over a decade ago with a simple, unifying vision: to serve undeniably pure, authentic Udupi vegetarian cuisine that feels exactly like a meal cooked by a mother. 
              </p>
              <p>
                Our founders, hailing from the coastal soils of Karnataka, noticed a growing absence of truly genuine, preservative-free dining options. What started as a small, heartfelt kitchen serving traditional Mangalurean breakfasts has blossomed into a beloved sanctuary for food lovers.
              </p>
              <p>
                Every recipe we serve today was meticulously refined from age-old family cookbooks, ensuring that the legacy of slow-cooked magic and hand-ground spices lives on in every single bite.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-green-light/10">
              <div className="border-l-2 border-lime pl-5">
                <div className="font-playfair text-[42px] leading-none text-white mb-2">
                   <AnimatedNumber value={2025} duration={1.5} />
                </div>
                <div className="text-[12px] tracking-[1px] text-text-muted uppercase">Year Established</div>
              </div>
              <div className="border-l-2 border-lime pl-5">
                <div className="font-playfair text-[42px] leading-none text-white mb-2">
                   <AnimatedNumber value={2000} suffix="+" duration={3} />
                </div>
                <div className="text-[12px] tracking-[1px] text-text-muted uppercase">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeLeft mt-10 lg:mt-0">
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-[120px] h-[120px] border-t-[3px] border-l-[3px] border-lime/50 z-0"></div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-[120px] h-[120px] border-b-[3px] border-r-[3px] border-lime/50 z-0"></div>
            
            <div className="w-full aspect-[3/4] relative z-10 shadow-2xl p-3 bg-forest border border-green-light/20">
              <div className="w-full h-full relative overflow-hidden bg-[url('/images/img2.avif')] bg-cover bg-center">
                 <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-700" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE FOUNDERS / OWNERS */}
      <section className="bg-black px-6 py-20 md:py-[120px] md:px-[60px] relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-[80px]">
            <div className="inline-flex justify-center items-center text-[10px] tracking-[4px] uppercase text-lime mb-4">
              The Visionaries
            </div>
            <FadeInTitle 
              text1="Meet Our" 
              highlight="Founders"
              className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1] text-white" 
            />
            <div className="w-[1px] h-16 bg-lime/30 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center bg-forest/40 border border-green-light/10">
            <div className="lg:col-span-5 h-[400px] lg:h-full min-h-[500px] relative bg-[url('/images/img3.webp')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
            
            <div className="lg:col-span-7 p-8 lg:p-16 xl:p-20 relative">
              <div className="absolute top-10 right-10 text-[120px] leading-none font-playfair text-white/5">"</div>
              <h3 className="font-playfair text-[32px] md:text-[40px] text-white mb-2">The Family Behind Shreematha</h3>
              <p className="text-lime text-[12px] tracking-[3px] uppercase mb-8">Pillars of Tradition</p>
              
              <div className="space-y-6 text-[15px] md:text-[17px] leading-[1.8] text-cream/80 font-cormorant font-light text-justify md:text-left">
                <p>
                  "We didn't just want to open a restaurant; we wanted to open our dining room to the city. Growing up, our mother's kitchen was a place of warmth, where the aroma of freshly roasted coriander seeds and curry leaves meant love."
                </p>
                <p>
                  Driven by this passion, the owners established Shreematha to be a sanctuary of pure vegetarian cuisine. Leaving behind conventional careers, they poured their life savings and their grandmother's treasured recipes into this venture. 
                </p>
                <p>
                  Their philosophy is simple: Treat every guest like a guest in your own home. Never compromise on the quality of ghee, never take shortcuts with the masalas, and always serve with a genuine smile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PHILOSOPHY & VALUES (Using Video Background) */}
      <section className="relative py-24 md:py-[150px] px-6 flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-deep/90 z-0" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-lime mb-6" strokeWidth={1.5} />,
                title: "100% Pure",
                desc: "We strictly say no to artificial colours, tasting powders, and preservatives."
              },
              {
                icon: <Heart className="w-10 h-10 text-lime mb-6" strokeWidth={1.5} />,
                title: "Made with Love",
                desc: "Cooked slowly, just like it’s done in traditional coastal homes."
              },
              {
                icon: <Clock className="w-10 h-10 text-lime mb-6" strokeWidth={1.5} />,
                title: "Fresh Daily",
                desc: "Ingredients are sourced fresh every morning from local farmers."
              },
              {
                icon: <Award className="w-10 h-10 text-lime mb-6" strokeWidth={1.5} />,
                title: "Authentic Taste",
                desc: "Recipes passed down through generations, preserved perfectly."
              }
            ].map((val, i) => (
              <div key={i} className="bg-black/40 backdrop-blur-sm border border-green-light/20 p-10 text-center hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-500">{val.icon}</div>
                <h4 className="font-playfair text-[22px] text-white mb-4">{val.title}</h4>
                <p className="text-[14px] leading-relaxed text-text-muted font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
