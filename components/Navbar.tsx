"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { getTotalItems } = useCart();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md px-4 md:px-14 py-3 border-b border-green-light/20"
            : "px-4 md:px-14 py-4 md:py-5 bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 md:gap-3 decoration-none z-[60]">
          <div className="w-9 h-9 md:w-11 md:h-11 border-[1.5px] border-green-light rounded-full flex items-center justify-center relative overflow-hidden before:content-['🌿'] before:text-sm md:before:text-xl"></div>
          <div className="leading-tight">
            <div className="font-playfair text-[14px] md:text-base text-white tracking-wide">
              Shreematha
            </div>
            <div className="text-[7px] md:text-[9px] text-green-light tracking-widest uppercase">
              Pure · Natural · Udupi
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex gap-9 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[12px] md:text-[13px] tracking-widest uppercase relative transition-colors duration-300 group ${
                  pathname === link.href ? "text-white" : "text-cream/70 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-lime transition-all duration-300 right-full group-hover:right-0"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 z-[60]">
          <Link
            href="/cart"
            className="hidden md:flex items-center gap-2 bg-transparent border border-green-light text-green-light px-6 py-2.5 text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden group hover:text-black"
          >
            <span className="absolute inset-0 bg-green-light -translate-x-[101%] transition-transform duration-300 -z-10 group-hover:translate-x-0"></span>
            <ShoppingCart size={16} />
            Cart ({getTotalItems()})
          </Link>
          
          <button 
            className="lg:hidden text-white p-2 flex items-center gap-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} className="text-lime" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center`}
          >
            <ul className="flex flex-col gap-8 text-center list-none p-0 m-0">
              {links.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-playfair text-[32px] tracking-wide transition-colors duration-300 ${
                      pathname === link.href ? "text-lime" : "text-white hover:text-lime"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: links.length * 0.05 + 0.1 }}
                className="mt-8"
              >
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-lime text-black px-10 py-4 text-[12px] tracking-[3px] uppercase font-bold rounded-full flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Cart ({getTotalItems()})
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
