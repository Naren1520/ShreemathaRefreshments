import { Shield, Coffee, Zap, WashingMachine, Gamepad2, Droplets, BedSingle, Users, Wifi, Trophy, Quote, Star } from "lucide-react";

export default function PGPage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-[#E2DCC8]/30">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video 1 */}
        <div className="absolute inset-0 w-full h-full z-0 fixed-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10 pointer-events-none" />
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-full object-cover scale-105 pointer-events-none"
          >
            <source src="/PGROOMS/vdo1pg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E2DCC8]/30 bg-black/40 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[2px] text-[#E2DCC8]">Now Open for Students & Professionals</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-7xl lg:text-[100px] mb-6 leading-[1.1] text-[#E2DCC8] tracking-tight">
            Exceptional <span className="italic font-light">Living.</span><br />
            Peaceful <span className="italic font-light">Vibes.</span>
          </h1>
          
          <p className="text-white/90 text-lg sm:text-2xl font-light mb-12 max-w-3xl leading-relaxed">
            Experience a true home away from home with highly maintained spaces and pure natural food from our acclaimed restaurant.
          </p>
        </div>
      </section>

      {/* SECTION 2: DINING & NOURISHMENT (Black BG) */}
      <section id="food" className="relative min-h-[90vh] w-full flex items-center justify-center py-24 bg-[#050505]">
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="mb-6 inline-block">
               <Coffee className="text-[#E2DCC8]" size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-playfair text-4xl sm:text-6xl lg:text-7xl mb-6 text-[#E2DCC8] leading-tight">
              Wholesome,<br/>
              <span className="italic text-white">Natural Food.</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl font-light leading-relaxed mb-8">
              Nutrition is key to a productive life. Our PG is directly attached to the reputed Hotel, ensuring you get pure, natural, and hygienic meals every single day. Forget the hassle of cooking and enjoy homely meals.
            </p>
            <ul className="space-y-4 text-white/70 font-light">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E2DCC8]" /> Pure vegetarian options</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E2DCC8]" /> High standards of hygiene</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#E2DCC8]" /> Delicious, homestyle preparation</li>
            </ul>
          </div>
          <div className="w-full max-w-lg relative rounded-[16px] overflow-hidden border border-white/10 shrink-0">
            <img 
              src="/PGROOMS/img1pg.jpg" 
              alt="Dining Experience" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: ACCOMMODATION / ROOMS (Video BG) */}
      <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden py-24">
            {/* Background Video 3 */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black/30 z-10 pointer-events-none" />
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/PGROOMS/vdo2pg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-16">
          <div className="max-w-xl lg:pl-12">
            <h2 className="font-playfair text-4xl sm:text-6xl lg:text-7xl mb-6 text-[#E2DCC8] leading-tight">
              Spacious &<br/>
              <span className="italic text-white">Secure Living.</span>
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
              We provide separate hostel blocks for both boys and girls, prioritizing complete privacy and safety. Whether you need your own space or prefer community living, we have options crafted for you.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border border-white/20 p-5 rounded-[12px] bg-black/40 backdrop-blur-md">
                <Users className="text-[#E2DCC8] mb-3" size={28} strokeWidth={1.5} />
                <h3 className="font-playfair text-xl mb-1 text-white">Separate Wings</h3>
                <p className="text-white/60 text-sm">Dedicated blocks for boys and girls.</p>
              </div>
              <div className="border border-white/20 p-5 rounded-[12px] bg-black/40 backdrop-blur-md">
                <BedSingle className="text-[#E2DCC8] mb-3" size={28} strokeWidth={1.5} />
                <h3 className="font-playfair text-xl mb-1 text-white">Sharing Options</h3>
                <p className="text-white/60 text-sm">1, 2, 3, or 4 sharing room configurations.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md relative rounded-[16px] overflow-hidden border border-white/20 shadow-2xl shrink-0 pointer-events-none">
            <video 
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 pointer-events-none"
            >
              <source src="/PGROOMS/vdo3pg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-[#E2DCC8] font-playfair text-xl">Well-Appointed Rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ROOMS GALLERY (Black BG) */}
      <section className="py-24 bg-[#080808] border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <p className="text-[12px] uppercase tracking-[3px] text-[#E2DCC8]/60 mb-4 font-bold">Discover Our Spaces</p>
          <h2 className="font-playfair text-4xl sm:text-6xl text-white">Inside The PG</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[4/3] rounded-[12px] overflow-hidden border border-white/10 group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img 
                src="/PGROOMS/img1pg.jpg" 
                alt={`PG Room View ${item}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: AMENITIES GRID (Video BG) */}
      <section className="py-32 relative z-20 overflow-hidden">
        {/* Background Video 4 (Amenities) */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95 z-10 pointer-events-none" />
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-full object-cover opacity-50 pointer-events-none"
          >
            <source src="/PGROOMS/vdo4pg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <p className="text-[12px] uppercase tracking-[3px] text-[#E2DCC8]/60 mb-4 font-bold">Everything you need</p>
          <h2 className="font-playfair text-4xl sm:text-6xl text-white">Designed for Comfort</h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-6 font-light text-lg">We&apos;ve thoughtfully included all the essential facilities so you can focus entirely on your studies or career.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 md:px-12 max-w-7xl mx-auto group/grid">
          {[
            { icon: Wifi, title: "Unlimited WiFi", desc: "High-speed internet access" },
            { icon: Droplets, title: "Hot & Drinking Water", desc: "24/7 Pure & Safe supply" },
            { icon: Shield, title: "CCTV Surveillance", desc: "Round-the-clock security" },
            { icon: Users, title: "Separate Hostels", desc: "For Boys and Girls" },
            { icon: BedSingle, title: "Fully Furnished", desc: "Bed, cot, study table & chair" },
            { icon: WashingMachine, title: "Washing Machines", desc: "Self-service laundry" },
            { icon: Gamepad2, title: "Indoor Games", desc: "Chess, Carrom & more" },
            { icon: Zap, title: "Power Backup", desc: "Uninterrupted electricity" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 border border-white/10 rounded-[12px] bg-black/60 backdrop-blur-sm hover:bg-[#E2DCC8]/10 hover:border-[#E2DCC8]/30 transition-all duration-300">
              <item.icon className="text-[#E2DCC8] mb-5 transform transition-transform duration-300 hover:-translate-y-1" size={36} strokeWidth={1} />
              <h3 className="text-white font-medium mb-2 text-lg tracking-wide">{item.title}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: ACHIEVEMENTS (Black BG) */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center py-32 bg-[#050505]">
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full max-w-lg relative rounded-[16px] overflow-hidden border border-white/10 shrink-0">
            <img 
              src="/PGROOMS/img1pg.jpg" 
              alt="Shreematha Boys Achievements" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
          <div className="max-w-xl">
            <div className="mb-6 inline-block">
               <Trophy className="text-[#E2DCC8]" size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-playfair text-4xl sm:text-6xl mb-6 text-[#E2DCC8] leading-tight">
              Honoring Our<br/>
              <span className="italic text-white">Shreematha Boys.</span>
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
              We take immense pride in the successes of the exceptional students and professionals living with us. From academic toppers to sports champions, our environment fosters growth, focus, and excellence.
            </p>
            <div className="p-6 border border-white/10 rounded-[12px] bg-white/[0.02]">
               <h3 className="font-playfair text-xl mb-2 text-[#E2DCC8]">Hall of Fame</h3>
               <p className="text-white/60 text-sm font-light leading-relaxed">
                 Celebrating top rankers, placement achievers, and outstanding talents from our PG community. (Details and photos coming soon).
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: REVIEWS */}
      <section className="py-32 relative z-20 bg-black border-white/5 border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <p className="text-[12px] uppercase tracking-[3px] text-[#E2DCC8]/60 mb-4 font-bold">Hear From The Guys</p>
          <h2 className="font-playfair text-4xl sm:text-6xl text-white">Resident Reviews</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Rahul S.",
              role: "Engineering Student",
              text: "The unlimited WiFi and purely homestyle food makes this PG stand out. The study setup really helps during my exam time."
            },
            {
              name: "Karthik Naik",
              role: "IT Professional",
              text: "Very peaceful environment. The fact that the hotel is attached means I never have to worry about skipping meals. Highly recommended!"
            },
            {
              name: "Manoj M.",
              role: "Student",
              text: "Best PG in the area! The CCTV surveillance and management makes it feel very secure. Also, the indoor games are a great stress buster."
            }
          ].map((review, i) => (
            <div key={i} className="p-8 rounded-[16px] border border-white/10 bg-[#0A0A0A] flex flex-col justify-between hover:border-[#E2DCC8]/30 transition-all duration-300">
              <div>
                <Quote className="text-[#E2DCC8]/40 mb-6" size={32} />
                <p className="text-white/80 font-light leading-relaxed mb-6">"{review.text}"</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} className="text-[#E2DCC8] fill-[#E2DCC8]" />)}
                </div>
                <h4 className="text-white font-medium">{review.name}</h4>
                <p className="text-white/40 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: CALL TO ACTION (Black BG) */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E2DCC8]/10 via-black to-black z-0" />
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <h2 className="font-playfair text-5xl sm:text-7xl text-[#E2DCC8] mb-6 leading-tight">Ready for a<br/><span className="text-white italic">Better Stay?</span></h2>
          <p className="text-white/70 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Join a community designed to inspire productivity and assure complete comfort. Suitable for students and working professionals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#E2DCC8] text-black rounded-full font-bold uppercase tracking-[2px] text-[13px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(226,220,200,0.3)]"
          >
            Inquire Now & Book
          </a>
        </div>
      </section>
    </main>
  );
}
