import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Marquee from "@/components/Marquee";
import FloatingLeaves from "@/components/FloatingLeaves";
import ReviewCarousel from "@/components/ReviewCarousel";
import FadeInTitle from "@/components/FadeInTitle";
import AnimatedNumber from "@/components/AnimatedNumber";
import { User, Users, Home as HomeIcon, Bus, Tractor, Building2, MoveRight, Leaf, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <FloatingLeaves />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/img1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/65 z-0" />
        
        <div className="relative z-[2] text-center px-5 max-w-[900px]">
          <div className="inline-flex items-center gap-2 border-[0.5px] border-green-light/30 px-5 py-2 text-[11px] tracking-[3px] uppercase text-green-light mb-8 bg-[#0d1f0d]/50 animate-fadeDown">
            <span className="text-[6px] animate-pulse">●</span> Now Open · Mangaluru
          </div>
          
          <FadeInTitle 
            as="h1"
            text1="Pure Food." 
            br={true} 
            highlight="Pure Nature."
            className="font-playfair text-[clamp(52px,8vw,96px)] leading-[1.05] text-white mb-3" 
          />
          
          <p className="font-cormorant text-[22px] text-text-muted mb-5 font-light tracking-[1px] animate-fadeUp delay-300">
            Authentic Udupi flavours crafted with 100% natural ingredients
          </p>
          
          <div className="text-[15px] text-green-light tracking-[2px] uppercase mb-12 min-h-[24px] animate-fadeUp delay-400">
            <Typewriter />
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap animate-fadeUp delay-500">
            <Link href="/menu" className="bg-green-mid text-white px-10 py-4 text-[13px] tracking-[2px] uppercase relative overflow-hidden group hover:text-black cursor-none">
              <span className="absolute inset-0 bg-lime scale-x-0 origin-left transition-transform duration-300 -z-10 group-hover:scale-x-100"></span>
              Explore Our Menu
            </Link>
            <Link href="/contact" className="bg-transparent border border-cream/30 text-cream px-10 py-4 text-[13px] tracking-[2px] uppercase transition-all duration-300 hover:border-lime hover:text-lime cursor-none">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ABOUT PREVIEW */}
      <section className="bg-deep px-6 py-20 md:py-[120px] md:px-[60px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fadeLeft">
            <div className="absolute -top-3 -left-3 w-[60px] h-[60px] border-t-2 border-l-2 border-lime"></div>
            <div className="w-full aspect-[4/5] bg-forest border border-green-light/20 relative flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(61,139,61,0.15),transparent_70%)]">
              <div className="text-[180px] opacity-[0.35] saturate-[0.7]">🌱</div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:bottom-[30px] md:-right-[24px] bg-green-dark border border-green-light/30 px-6 py-5 text-center">
              <div className="font-playfair text-[42px] leading-none text-lime">100%</div>
              <div className="text-[10px] tracking-[2px] text-text-muted uppercase mt-1">Natural & Pure</div>
            </div>
          </div>
          <div className="animate-fadeRight">
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-lime">
              Our Story
            </div>
            <FadeInTitle 
              text1="Where Every Meal" 
              br={true} 
              highlight="Feels Like Home"
              className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1] text-white mb-5" 
            />
            <p className="text-[15px] leading-[1.8] text-text-muted mb-8">
              Shreematha Refreshment is Mangaluru's most loved Udupi restaurant — a place where traditional South Indian recipes meet the freshness of nature. Every dish is made fresh, every ingredient is sourced with care, and every meal is served with love.
            </p>
            <Link href="/about" className="text-[11px] tracking-[2px] uppercase text-lime flex items-center gap-2 hover:gap-4 transition-all duration-300 cursor-none">
              Read Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-black border-y border-green-light/10 py-16 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-6 text-center md:divide-x border-green-light/10">
            <div className="border-r border-green-light/10 md:border-transparent last:border-0 md:border-r">
              <div className="font-playfair text-[40px] sm:text-[48px] md:text-[64px] text-white leading-none">
                <AnimatedNumber value={2025} duration={1.5} />
              </div>
              <div className="text-lime text-[9px] sm:text-[11px] tracking-[2px] uppercase mt-2 hidden sm:block">Year Established</div>
              <div className="text-lime text-[9px] sm:text-[11px] tracking-[2px] uppercase mt-2 sm:hidden">Established</div>
            </div>
            <div className="border-0 md:border-r border-green-light/10">
              <div className="font-playfair text-[40px] sm:text-[48px] md:text-[64px] text-white leading-none">
                <AnimatedNumber value={2000} suffix="+" duration={3} />
              </div>
              <div className="text-lime text-[9px] sm:text-[11px] tracking-[2px] uppercase mt-2">Happy Guests</div>
            </div>
            <div className="border-r border-green-light/10 md:border-transparent last:border-0 md:border-r pt-4 border-t md:border-t-0 md:pt-0">
              <div className="font-playfair text-[40px] sm:text-[48px] md:text-[64px] text-white leading-none mt-2 md:mt-0">
                <AnimatedNumber value={50} suffix="+" />
              </div>
              <div className="text-lime text-[9px] sm:text-[11px] tracking-[2px] uppercase mt-2">Authentic Dishes</div>
            </div>
            <div className="border-0 pt-4 border-t border-green-light/10 md:border-t-0 md:pt-0">
              <div className="font-playfair text-[40px] sm:text-[48px] md:text-[64px] text-white leading-none mt-2 md:mt-0">
                <AnimatedNumber value={100} suffix="%" />
              </div>
              <div className="text-lime text-[9px] sm:text-[11px] tracking-[2px] uppercase mt-2 hidden sm:block">Pure Veg Quality</div>
              <div className="text-lime text-[9px] sm:text-[11px] tracking-[2px] uppercase mt-2 sm:hidden">Pure Veg</div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER OUR MENU PREVIEW */}
      <section className="bg-deep px-6 py-20 md:py-[120px] md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-[60px]">
            <div className="inline-flex justify-center items-center text-[10px] tracking-[4px] uppercase text-lime mb-4">
              A Taste of Tradition
            </div>
            <FadeInTitle 
              text1="Signature" 
              highlight="Flavours"
              className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1] text-white" 
            />
            <div className="w-[1px] h-12 bg-lime/30 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Udupi Thali",
                desc: "A wholesome spread of rice, rasam, freshly ground curries, and payasam served traditionally.",
                image: "/images/img1.jpg"
              },
              {
                title: "Neer Dosa",
                desc: "Paper-thin, incredibly soft rice crêpes, served with fresh coconut chutney and vegetable kurma.",
                image: "/images/img2.avif"
              },
              {
                title: "Mangaluru Buns",
                desc: "Mildly sweet, fluffy banana poori—a local breakfast favorite that melts in your mouth.",
                image: "/images/img3.webp"
              },
              {
                title: "Filter Coffee",
                desc: "The perfect finish to your meal: strong, frothy, traditionally brewed South Indian filter coffee.",
                image: "/images/img1.jpg"
              }
            ].map((dish, i) => (
               <div key={i} className="flex flex-col items-center text-center group relative cursor-pointer pt-6">
                 {/* Decorative dot on hover */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff4a36] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 
                 <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden mb-6 border border-white/10 group-hover:border-[#ff4a36]/50 transition-colors duration-500">
                   <img 
                     src={dish.image} 
                     alt={dish.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                 </div>
                 <h3 className="font-sans font-bold text-[22px] text-white mb-3">{dish.title}</h3>
                 <p className="text-[15px] font-sans text-text-muted/80 leading-[1.6] max-w-[260px] mx-auto">{dish.desc}</p>
               </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="text-[11px] tracking-[2px] uppercase text-lime flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300 cursor-none">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* HAPPY CUSTOMER VIDEO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-[800px] animate-fadeUp">
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime justify-center mb-4">
            <span className="w-10 h-[1px] bg-lime inline-block" />
            Smiles We Cherish
            <span className="w-10 h-[1px] bg-lime inline-block" />
          </div>
          <FadeInTitle 
            text1="Our Happy" 
            highlight="Customers"
            className="font-playfair text-[clamp(40px,6vw,72px)] leading-[1.1] text-white my-6" 
          />
          <p className="text-[18px] leading-[1.8] text-cream/90 font-light font-cormorant tracking-[1px] max-w-[600px] mx-auto">
            Experience the joy of authentic Udupi dining through the eyes of our beloved patrons. Because nothing makes us happier than seeing you smile.
          </p>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="relative px-6 py-16 md:py-20 flex items-center justify-center bg-[#050B05] overflow-hidden">
        <div className="max-w-[1100px] w-full relative z-10 mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex justify-center items-center text-[10px] tracking-[4px] uppercase text-[#38A169] mb-4 gap-3">
              <span className="w-8 h-[1px] bg-[#38A169]/50 block" />
              <Leaf size={12} />
              SHREEMATHA GROUP
              <span className="w-8 h-[1px] bg-[#38A169]/50 block" />
            </div>
            <h2 className="font-playfair text-[clamp(40px,5vw,56px)] leading-[1.1] text-white mb-4">
              More From <br className="md:hidden" />
              Our <span className="text-[#68D391] italic font-light">Family</span>
            </h2>
            <p className="text-[14px] leading-[1.6] text-white/50 max-w-[300px] mx-auto font-sans">
              Shreematha Enterprises serves you beyond the dining table.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* TRAVELS CARD */}
            <a
              href="https://travels.shreemathaenterprises.com"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[12px] border border-white/5 bg-[#091209] flex flex-col h-[400px] transition-all duration-500 hover:border-[#38A169]/30"
            >
              <div className="h-[45%] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/travels1.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#091209]" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-[#38A169] flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                  <Bus size={20} className="text-[#38A169]" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-20 flex flex-col h-[55%] p-6 justify-between">
                <div>
                  <h3 className="font-playfair text-[24px] text-white leading-tight mb-2">Shreematha Travels</h3>
                  <p className="text-[12px] font-sans text-white/50 leading-[1.6] mb-4">
                    Comfortable, reliable travel services for tours, corporate trips and airport transfers across Karnataka.
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#38A169]/50 text-[#38A169] text-[10px] font-bold tracking-[1px] uppercase transition-all duration-300 group-hover:bg-[#38A169]/10 self-start">
                  Explore Now <MoveRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* EARTHMOVERS CARD */}
            <a
              href="https://earthmovers.shreemathaenterprises.com"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[12px] border border-white/5 bg-[#121008] flex flex-col h-[400px] transition-all duration-500 hover:border-[#D69E2E]/30"
            >
              <div className="h-[45%] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/earthmovers1.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#121008]" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-[#D69E2E] flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                  <Tractor size={20} className="text-[#D69E2E]" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-20 flex flex-col h-[55%] p-6 justify-between">
                <div>
                  <h3 className="font-playfair text-[24px] text-white leading-tight mb-2">Earthmovers</h3>
                  <p className="text-[12px] font-sans text-white/50 leading-[1.6] mb-4">
                    Heavy-duty excavation and earthmoving for construction, infrastructure and land development projects.
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D69E2E]/50 text-[#D69E2E] text-[10px] font-bold tracking-[1px] uppercase transition-all duration-300 group-hover:bg-[#D69E2E]/10 self-start">
                  Explore Now <MoveRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* PG ROOMS CARD */}
            <a
              href="https://pgrooms.shreemathaenterprises.com"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[12px] border border-white/5 bg-[#060F14] flex flex-col h-[400px] transition-all duration-500 hover:border-[#3182CE]/30"
            >
              <div className="h-[45%] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pg1.webp')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#060F14]" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-[#3182CE] flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                  <Building2 size={20} className="text-[#3182CE]" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-20 flex flex-col h-[55%] p-6 justify-between">
                <div>
                  <h3 className="font-playfair text-[24px] text-white leading-tight mb-2">PG Rooms</h3>
                  <p className="text-[12px] font-sans text-white/50 leading-[1.6] mb-4">
                    Safe, affordable and homely PG accommodation for students and working professionals in Mangaluru.
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#3182CE]/50 text-[#3182CE] text-[10px] font-bold tracking-[1px] uppercase transition-all duration-300 group-hover:bg-[#3182CE]/10 self-start">
                  Explore Now <MoveRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </div>

          {/* BOTTOM BANNER */}
          <div className="bg-[#0D1F0D] border border-[#38A169]/20 rounded-[12px] p-4 md:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 overflow-hidden relative mt-8">
            <div className="flex items-center gap-3 z-10">
              <div className="w-8 h-8 rounded-full border border-[#38A169]/30 flex items-center justify-center shrink-0 bg-[#091209]">
                <Leaf size={14} className="text-[#38A169]" strokeWidth={1.5} />
              </div>
              <h2 className="font-playfair text-[16px] md:text-[18px] text-white m-0">
                One Family. Many Services. <span className="text-[#38A169] italic">Endless Commitment.</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 lg:border-l lg:border-white/10 lg:pl-5 z-10">
              <p className="text-white/50 text-[11px] text-center md:text-left max-w-[240px] leading-relaxed">
                Discover how our family of businesses can serve you better.
              </p>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#2B6D2B] hover:bg-[#38A169] text-white px-5 py-2 rounded-[6px] text-[10px] font-bold tracking-[1px] uppercase transition-all duration-300 flex items-center justify-center gap-2 shrink-0 cursor-none w-full md:w-auto"
              >
                Get In Touch <MessageCircle size={12} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <section className="relative min-h-screen py-20 md:py-[120px] px-6 md:px-[60px] flex flex-col justify-center bg-[url('/images/img3.webp')] bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-black/75 z-0" />
        
        <div className="max-w-[1200px] w-full mx-auto relative z-10">
          <div className="text-center mb-[60px]">
            <div className="inline-flex justify-center items-center text-[10px] tracking-[4px] uppercase text-lime mb-4">
              Testimonials
            </div>
            <FadeInTitle 
               text1="What Our Guests" 
               highlight="Say"
               className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1] text-white" 
            />
            <p className="text-[15px] leading-[1.8] text-text-muted mt-5">
              Genuine words from the people who make us who we are.
            </p>
          </div>

          <ReviewCarousel />
          
          <div className="text-center mt-16 animate-fadeUp">
            <Link href="/reviews" className="bg-transparent border border-cream/30 text-cream px-10 py-4 text-[13px] tracking-[2px] uppercase transition-all duration-300 hover:border-lime hover:text-lime cursor-none inline-block">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION & GOOGLE MAP */}
      <section className="relative w-full h-[500px] border-t border-green-light/10">
        <iframe 
          src="https://maps.google.com/maps?q=Mangaluru&t=h&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "brightness(0.85) contrast(1.1) saturate(1.2)" }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-10 mix-blend-multiply" />
        
        <div className="absolute bottom-6 left-6 md:left-[60px] md:bottom-[60px] bg-forest/95 backdrop-blur-md border border-green-light/20 p-8 max-w-[400px] pointer-events-auto z-20 shadow-2xl">
           <h3 className="font-playfair text-[28px] text-white mb-2">Visit Us</h3>
           <p className="text-text-muted text-[14px] leading-relaxed mb-6 font-light">
             Experience the finest Udupi cuisine right here in the heart of the city.
           </p>
           <div className="space-y-4 text-[13px] text-cream">
              <div className="flex gap-3">
                <span className="text-lime w-5 shrink-0">📍</span>
                <span>Rao & Rao Circle, Mangaluru, Karnataka 575001</span>
              </div>
              <div className="flex gap-3">
                <span className="text-lime w-5 shrink-0">🕒</span>
                <span>Everyday: 7:00 AM - 10:30 PM</span>
              </div>
           </div>
           
           <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="mt-8 border border-lime/30 text-lime px-6 py-3 text-[11px] tracking-[2px] uppercase inline-flex items-center gap-2 hover:bg-lime hover:text-black transition-all duration-300 w-full justify-center group"
            >
              Get Directions <span className="group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </div>
      </section>
    </>
  );
}
