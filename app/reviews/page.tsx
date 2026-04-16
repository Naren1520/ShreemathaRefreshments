import FadeInTitle from "@/components/FadeInTitle";

export default function Reviews() {
  const reviews = [
    {
      avatar: "👨",
      name: "Ramesh Shetty",
      role: "Regular Guest · Mangaluru",
      text: "The Udupi Thali here is the best I have had outside of Udupi itself. Everything is fresh, authentic and served with such warmth. I come here every week without fail.",
    },
    {
      avatar: "👩",
      name: "Priya Nair",
      role: "Food Enthusiast · Udupi",
      text: "Spotlessly clean restaurant, very fresh food — you can actually taste the difference when there are no artificial flavours. The filter coffee alone is worth the trip.",
    },
    {
      avatar: "👨‍👩‍👧",
      name: "Suresh & Family",
      role: "Family Guest · Mangaluru",
      text: "My whole family loves coming here. The kids enjoy the dosas and we trust the hygiene completely. The green ambiance is so relaxing — feels like eating in a garden.",
    },
    {
      avatar: "👴",
      name: "Govind Bhat",
      role: "Local Resident",
      text: "I've been visiting Shreematha for years. The consistency in taste and quality is what keeps bringing me back. A true gem of Mangaluru.",
    },
    {
      avatar: "👩‍💼",
      name: "Ananya Dixit",
      role: "Corporate Executive",
      text: "Perfect spot for a quick yet wholesome traditional lunch. The Neer Dosa with coconut curry is an absolute must-try!",
    },
    {
      avatar: "🧑‍🎓",
      name: "Karan Shetty",
      role: "Student",
      text: "Affordable, delicious, and feels exactly like home-cooked meals. My favorite is the Mangaluru Buns. Simply amazing.",
    }
  ];

  // duplicate for continuous marquee effect
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews.reverse(), ...reviews.reverse()];

  return (
    <>
      <section className="bg-black py-20 md:py-[120px] min-h-screen pt-32 overflow-hidden flex flex-col justify-center">
        <div className="max-w-[1200px] mx-auto text-center mb-[60px] px-6">
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

        <div className="flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden">
          {/* Row 1 - Moves Right to Left */}
          <div className="flex w-max animate-marquee gap-6">
            <div className="flex gap-6 pr-6">
              {row1.slice(0, row1.length / 2).map((review, i) => (
                <div
                  key={`r1-1-${i}`}
                  className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-forest border border-green-light/10 p-[30px_24px] relative transition-all duration-300 hover:border-green-light/35 group before:content-['\22'] before:font-playfair before:text-[100px] before:leading-[0.8] before:text-green-light/5 before:absolute before:top-4 before:right-6"
                >
                  <div className="text-lime text-[14px] mb-4 tracking-[2px]">★★★★★</div>
                  <div className="font-cormorant text-[16px] leading-[1.6] text-cream mb-6 font-light italic">
                    "{review.text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-dark border border-green-light/30 flex items-center justify-center text-[16px]">
                      {review.avatar}
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] text-white font-medium">{review.name}</div>
                      <div className="text-[10px] text-text-muted mt-1">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6">
              {row1.slice(row1.length / 2).map((review, i) => (
                <div
                  key={`r1-2-${i}`}
                  className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-forest border border-green-light/10 p-[30px_24px] relative transition-all duration-300 hover:border-green-light/35 group before:content-['\22'] before:font-playfair before:text-[100px] before:leading-[0.8] before:text-green-light/5 before:absolute before:top-4 before:right-6"
                >
                  <div className="text-lime text-[14px] mb-4 tracking-[2px]">★★★★★</div>
                  <div className="font-cormorant text-[16px] leading-[1.6] text-cream mb-6 font-light italic">
                    "{review.text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-dark border border-green-light/30 flex items-center justify-center text-[16px]">
                      {review.avatar}
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] text-white font-medium">{review.name}</div>
                      <div className="text-[10px] text-text-muted mt-1">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves Left to Right */}
          <div className="flex w-max animate-marquee [animation-direction:reverse] [animation-duration:25s] gap-6">
            <div className="flex gap-6 pr-6">
              {row2.slice(0, row2.length / 2).map((review, i) => (
                <div
                  key={`r2-1-${i}`}
                  className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-forest border border-green-light/10 p-[30px_24px] relative transition-all duration-300 hover:border-green-light/35 group before:content-['\22'] before:font-playfair before:text-[100px] before:leading-[0.8] before:text-green-light/5 before:absolute before:top-4 before:right-6"
                >
                  <div className="text-lime text-[14px] mb-4 tracking-[2px]">★★★★★</div>
                  <div className="font-cormorant text-[16px] leading-[1.6] text-cream mb-6 font-light italic">
                    "{review.text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-dark border border-green-light/30 flex items-center justify-center text-[16px]">
                      {review.avatar}
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] text-white font-medium">{review.name}</div>
                      <div className="text-[10px] text-text-muted mt-1">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pr-6">
              {row2.slice(row2.length / 2).map((review, i) => (
                <div
                  key={`r2-2-${i}`}
                  className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-forest border border-green-light/10 p-[30px_24px] relative transition-all duration-300 hover:border-green-light/35 group before:content-['\22'] before:font-playfair before:text-[100px] before:leading-[0.8] before:text-green-light/5 before:absolute before:top-4 before:right-6"
                >
                  <div className="text-lime text-[14px] mb-4 tracking-[2px]">★★★★★</div>
                  <div className="font-cormorant text-[16px] leading-[1.6] text-cream mb-6 font-light italic">
                    "{review.text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-dark border border-green-light/30 flex items-center justify-center text-[16px]">
                      {review.avatar}
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] text-white font-medium">{review.name}</div>
                      <div className="text-[10px] text-text-muted mt-1">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Love Video Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-[800px] py-20">
          <div className="inline-flex justify-center items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-4">
            <span className="w-10 h-[1px] bg-lime inline-block" />
            Our Extended Family
            <span className="w-10 h-[1px] bg-lime inline-block" />
          </div>
          <h2 className="font-playfair text-[clamp(40px,6vw,72px)] leading-[1.1] text-white my-6">
            Loved By <span className="text-lime italic font-light font-cormorant">Thousands</span>
          </h2>
          <p className="text-[18px] md:text-[22px] leading-[1.6] text-cream/90 font-light font-cormorant tracking-[1px] max-w-[700px] mx-auto mb-8">
            Every day, we welcome hundreds of guests who come sharing laughter, joy, and their love for authentic flavors. Watching our customers turn into family is the most rewarding part of our journey. Their smiles bring Shreematha Refreshments to life.
          </p>
        </div>
      </section>
    </>
  );
}