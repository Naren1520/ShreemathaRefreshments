"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInTitle from "@/components/FadeInTitle";
import { useCart } from "@/context/CartContext";
import { Plus, Minus, Search } from "lucide-react";

const menuItems = [
  {
    id: 1,
    img: "/images/img1.jpg",
    category: "Breakfast",
    name: "Masala Dosa",
    desc: "Crispy golden dosa with spiced potato filling, served with fresh coconut chutney and sambar.",
    price: "₹60",
    tag: "🌿 Pure Veg",
  },
  {
    id: 2,
    img: "/images/img2.avif",
    category: "Meals",
    name: "Udupi Thali",
    desc: "Complete traditional thali with rice, sambar, rasam, 3 curries, papad, pickle and payasam.",
    price: "₹120",
    tag: "🌿 Pure Veg",
  },
  {
    id: 3,
    img: "/images/img3.webp",
    category: "Breakfast",
    name: "Idli Sambar",
    desc: "Soft steamed idlis served with piping hot sambar and a trio of chutneys — coconut, tomato and mint.",
    price: "₹50",
    tag: "🌿 Pure Veg",
  },
  {
    id: 4,
    img: "/images/img1.jpg",
    category: "Snacks",
    name: "Neer Dosa",
    desc: "Delicate thin rice crepes, soft as silk, served with coconut milk curry — a Mangalorean specialty.",
    price: "₹70",
    tag: "🌿 Pure Veg",
  },
  {
    id: 5,
    img: "/images/img2.avif",
    category: "Meals",
    name: "Vangi Bath",
    desc: "Aromatic brinjal rice cooked with freshly ground masala — a Karnataka classic done the traditional way.",
    price: "₹90",
    tag: "🌿 Pure Veg",
  },
  {
    id: 6,
    img: "/images/img3.webp",
    category: "Beverages",
    name: "Filter Coffee",
    desc: "Freshly brewed South Indian filter coffee — strong, aromatic, frothy. The perfect start to any morning.",
    price: "₹25",
    tag: "🌿 Natural",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { cart, addToCart, removeFromCart } = useCart();

  const filters = ["All", "Breakfast", "Meals", "Snacks", "Beverages"];

  const filteredMenu = menuItems.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getItemQuantity = (id: number) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <section className="bg-black px-6 py-20 md:py-[120px] md:px-[60px] min-h-screen pt-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-6 mb-[60px]">
          <div>
            <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-lime">
              Our Menu
            </div>
            <FadeInTitle 
              text1="Fresh From" 
              br={true} 
              highlight="Our Kitchen"
              className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1] text-white" 
            />
          </div>
          
          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64 max-w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-white/50" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#141610] border border-white/10 rounded-[30px] pl-[38px] pr-5 py-[10px] text-[12px] tracking-[1px] text-white placeholder:text-white/40 focus:outline-none focus:border-lime/50 transition-all duration-300"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap justify-end">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`bg-transparent border border-green-light/30 px-5 py-2 text-[12px] tracking-[1.5px] uppercase transition-all duration-300 cursor-none hover:bg-green-mid hover:border-green-mid hover:text-white ${filter === f ? "bg-green-mid border-green-mid text-white" : "text-text-muted"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0f110c]/80 backdrop-blur-sm border border-white/5 rounded-[40px] p-6 lg:p-8 hover:bg-[#141610] hover:border-lime/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-[6px] border-[#141610] shadow-2xl group-hover:shadow-lime/20 group-hover:border-lime/20 transition-all duration-500">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 160px, 192px"
                    />
                  </div>
                  
                  <div className="text-[10px] tracking-[3px] uppercase text-lime font-medium mb-3 bg-lime/10 px-4 py-1.5 rounded-full">
                    {item.category}
                  </div>
                  
                  <h3 className="font-playfair text-[24px] md:text-[28px] text-white mb-4 group-hover:text-lime transition-colors duration-300">
                    {item.name}
                  </h3>

                  <div className="mt-auto w-full flex flex-col gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-playfair text-[26px] text-white">
                        {item.price}
                      </span>
                      <span className="text-[10px] tracking-[1.5px] uppercase border border-lime/30 text-lime px-3 py-1.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <div className="flex items-center justify-between w-full mt-2 bg-white/5 rounded-full p-1">
                      {getItemQuantity(item.id) === 0 ? (
                        <button
                          onClick={() =>
                            addToCart({
                              id: item.id,
                              name: item.name,
                              price: parseInt(item.price.replace("₹", "")),
                            })
                          }
                          className="w-full py-2 px-4 rounded-full bg-lime text-black font-semibold text-xs tracking-wider uppercase hover:bg-green-light transition-colors duration-300"
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-between w-full px-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-lime hover:text-black transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-bold text-white text-sm">
                            {getItemQuantity(item.id)}
                          </span>
                          <button
                            onClick={() =>
                              addToCart({
                                id: item.id,
                                name: item.name,
                                price: parseInt(item.price.replace("₹", "")),
                              })
                            }
                            className="w-8 h-8 rounded-full bg-lime text-black flex items-center justify-center hover:bg-green-light transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
