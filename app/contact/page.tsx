"use client";
import React, { useState } from 'react';
import FadeInTitle from "@/components/FadeInTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '1 Guest',
    requests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create structured message for WhatsApp
    const message = `*🎉 Reservation Request - Shreematha Refreshment*\n\n*Guest Details:*\n📝 Name: ${formData.name}\n📱 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n\n*Reservation Details:*\n📅 Date: ${formData.date}\n👥 Guests: ${formData.guests}\n${formData.requests ? `✍️ Special Requests: ${formData.requests}` : ''}`;
    
    // WhatsApp phone number (without + and spaces)
    const phoneNumber = '919900827864';
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-black px-6 py-20 pb-24 md:py-[120px] md:px-[60px] min-h-screen pt-32">
      <div className="max-w-[1100px] mx-auto text-center mb-[60px]">
        <div className="inline-flex justify-center items-center text-[10px] tracking-[4px] uppercase text-lime mb-4 gap-3 before:content-[''] before:w-10 before:h-[1px] before:bg-lime">
          Contact Us
        </div>
        <FadeInTitle 
          text1="Visit Us or" 
          highlight="Book Ahead"
          className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1] text-white" 
        />
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        
        <div className="animate-fadeLeft">
          <div className="mb-10 bg-[#0f110c]/80 backdrop-blur-sm border border-white/5 p-8 rounded-3xl">
            <div className="mb-8">
              <div className="text-[10px] tracking-[3px] uppercase text-lime mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime"></span> Address
              </div>
              <div className="text-[16px] text-white">
                Shreematha Refreshment,<br />Mangaluru, Karnataka — 575007
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-[10px] tracking-[3px] uppercase text-lime mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime"></span> Phone
              </div>
              <div className="text-[16px] text-white">
                <a href="tel:+919900827864" className="text-white decoration-none hover:text-lime transition-colors duration-300">+91 99008 27864</a>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-[10px] tracking-[3px] uppercase text-lime mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime"></span> Email
              </div>
              <div className="text-[16px] text-white">
                <a href="mailto:shreemathaenterpises@gmail.com" className="text-white decoration-none hover:text-lime transition-colors duration-300">shreemathaenterpises@gmail.com</a>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="text-[10px] tracking-[3px] uppercase text-lime mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime"></span> Hours
              </div>
              <div className="text-[16px] text-white">
                Mon – Sun: 7:00 AM – 10:30 PM
              </div>
            </div>
          </div>
          
          <div className="w-full h-[280px] rounded-3xl overflow-hidden border border-white/5 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.378772392765!2d74.8436!3d12.8700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4d00000001%3A0x0!2sMangaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="animate-fadeRight bg-[#0f110c]/80 backdrop-blur-sm border border-white/5 p-8 lg:p-10 rounded-[40px]">
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-8 before:content-[''] before:w-10 before:h-[1px] before:bg-lime">
            Make a Reservation
          </div>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="text-[10px] tracking-[2px] uppercase text-neutral-400 block mb-3 pl-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name..." 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#141610] border border-white/10 text-cream p-4 rounded-2xl font-dmsans text-[14px] outline-none transition-colors duration-300 focus:border-lime/50"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[2px] uppercase text-neutral-400 block mb-3 pl-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 99999 99999" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#141610] border border-white/10 text-cream p-4 rounded-2xl font-dmsans text-[14px] outline-none transition-colors duration-300 focus:border-lime/50"
                />
              </div>
            </div>

            <div className="mb-6 text-left">
              <label className="text-[10px] tracking-[2px] uppercase text-neutral-400 block mb-3 pl-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#141610] border border-white/10 text-cream p-4 rounded-2xl font-dmsans text-[14px] outline-none transition-colors duration-300 focus:border-lime/50"
              />
            </div>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="text-[10px] tracking-[2px] uppercase text-neutral-400 block mb-3 pl-2">Date</label>
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#141610] border border-white/10 text-neutral-400 p-4 rounded-2xl font-dmsans text-[14px] outline-none transition-colors duration-300 focus:border-lime/50 custom-calendar-icon"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[2px] uppercase text-neutral-400 block mb-3 pl-2">Guests</label>
                <select 
                  name="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-[#141610] border border-white/10 text-neutral-400 p-4 rounded-2xl font-dmsans text-[14px] outline-none transition-colors duration-300 focus:border-lime/50 appearance-none cursor-pointer"
                >
                  <option className="bg-[#141610]">1 Guest</option>
                  <option className="bg-[#141610]">2 Guests</option>
                  <option className="bg-[#141610]">3–5 Guests</option>
                  <option className="bg-[#141610]">6–10 Guests</option>
                  <option className="bg-[#141610]">10+ Guests</option>
                </select>
              </div>
            </div>

            <div className="mb-8 text-left">
              <label className="text-[10px] tracking-[2px] uppercase text-neutral-400 block mb-3 pl-2">Special Requests</label>
              <textarea 
                name="requests" 
                placeholder="Any dietary preferences or special occasions?" 
                value={formData.requests}
                onChange={handleChange}
                className="w-full bg-[#141610] border border-white/10 text-cream p-4 rounded-2xl font-dmsans text-[14px] outline-none transition-colors duration-300 focus:border-lime/50 resize-y min-h-[120px]"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-lime/10 border border-lime text-lime px-10 py-5 rounded-full text-[13px] tracking-[2px] uppercase relative overflow-hidden group hover:text-black font-medium transition-all duration-300">
               <span className="absolute inset-0 bg-lime scale-x-0 origin-left transition-transform duration-500 -z-10 group-hover:scale-x-100"></span>
              Confirm Reservation
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
}