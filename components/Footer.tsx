import Link from "next/link";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-deep border-t-[0.5px] border-green-light/15 pt-[60px] pb-[32px] px-[24px] md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-[48px] mb-[48px]">
        <div>
          <div className="font-playfair text-[22px] text-white mb-[8px]">
            Shreematha Refreshment
          </div>
          <div className="text-[11px] tracking-[2px] text-lime uppercase mb-[16px]">
            Pure · Natural · Udupi
          </div>
          <div className="text-[13px] text-text-muted leading-[1.7]">
            Authentic South Indian cuisine crafted from 100% natural ingredients,
            served with love in the heart of Mangaluru since day one.
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] tracking-[3px] uppercase text-lime mb-[20px]">
            Quick Links
          </div>
          <ul className="list-none space-y-[10px]">
            <li>
              <Link href="/" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] tracking-[3px] uppercase text-lime mb-[20px]">
            Group
          </div>
          <ul className="list-none space-y-[10px]">
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Shreematha Travels
              </a>
            </li>
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                Earthmovers
              </a>
            </li>
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                PG Rooms
              </a>
            </li>
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none">
                About Group
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] tracking-[3px] uppercase text-lime mb-[20px]">
            Follow Us
          </div>
          <ul className="list-none space-y-[10px]">
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none flex items-center gap-2">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none flex items-center gap-2">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none flex items-center gap-2">
                Google Maps
              </a>
            </li>
            <li>
              <a href="#" className="text-text-muted text-[13px] hover:text-white transition-colors duration-300 cursor-none flex items-center gap-2">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-[28px] border-t-[0.5px] border-green-light/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[12px] text-text-muted">
          © {new Date().getFullYear()} Shreematha Refreshment. All rights reserved.
        </div>
        <div className="text-[12px] text-green-light/40 flex items-center gap-[6px]">
          🌿 100% Natural · Zero Artificial
        </div>
      </div>
    </footer>
  );
}