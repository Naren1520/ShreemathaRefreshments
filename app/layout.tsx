import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ['300', '400', '600'], variable: '--font-cormorant' });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ['300', '400', '500'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: "Shreematha Refreshment | Pure. Natural. Udupi.",
  description: "Authentic Udupi flavours crafted with 100% natural ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} font-dmsans bg-black text-cream overflow-x-hidden antialiased cursor-none`}>
        <CartProvider>
          <Cursor />
          <a href="https://wa.me/919999999999" className="fixed bottom-8 right-8 z-[200] bg-[#25d366] w-14 h-14 rounded-full flex items-center justify-center text-[26px] no-underline shadow-[0_4px_20px_rgba(37,211,102,0.4)] animate-float cursor-none" title="Chat on WhatsApp">📱</a>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
