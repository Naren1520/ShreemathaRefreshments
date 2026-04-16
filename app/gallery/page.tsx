import FadeInTitle from "@/components/FadeInTitle";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { id: 1, src: "/images/img1.jpg", text: "The Green Dining Hall", gridClass: "col-span-1 row-span-1 md:col-span-2 md:row-span-2" },
    { id: 2, src: "/images/img2.avif", text: "Fresh Ingredients Daily", gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
    { id: 3, src: "/images/img3.webp", text: "Garden Seating Area", gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-2" },
    { id: 4, src: "/images/img1.jpg", text: "Natural Produce Kitchen", gridClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
    { id: 5, src: "/images/img2.avif", text: "Morning Ritual", gridClass: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="bg-black px-6 py-20 pb-24 md:py-[120px] md:px-[60px] min-h-screen pt-32">
      <div className="max-w-[1200px] mx-auto text-center mb-[80px]">
        <div className="inline-flex justify-center items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-4">
          <span className="w-10 h-[1px] bg-lime"></span>
          Our Space
          <span className="w-10 h-[1px] bg-lime"></span>
        </div>
        <FadeInTitle 
           text1="Dine Amid" 
           br={true}
           highlight="Nature"
           className="font-playfair text-[clamp(44px,6vw,72px)] leading-[1.1] text-white" 
        />
        <p className="text-[16px] leading-[1.8] text-neutral-400 mt-6 max-w-lg mx-auto">
          A green, hygienic and welcoming space designed to refresh your senses. Step inside and experience tranquility.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:grid-rows-[repeat(3,280px)] gap-4 md:gap-6 animate-fadeUp">
        {images.map((img) => (
          <div key={img.id} className={`relative overflow-hidden rounded-3xl group ${img.gridClass}`}>
            <Image
              src={img.src}
              alt={img.text}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-8 h-[2px] bg-lime mb-4"></div>
                <div className="font-playfair text-[20px] md:text-[24px] text-white">
                  {img.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}