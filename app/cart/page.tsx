"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Plus, Minus, Trash2 } from "lucide-react";
import FadeInTitle from "@/components/FadeInTitle";
import { useState } from "react";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, getTotalItems, clearCart } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    clearCart();
  };

  return (
    <section className="bg-black px-6 py-20 md:py-[120px] md:px-[60px] min-h-screen pt-32 text-white">
      <div className="max-w-[800px] mx-auto">
        {checkoutSuccess ? (
          <div className="text-center py-20 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
            <h3 className="text-4xl font-playfair mb-6 text-lime">Thank you!</h3>
            <p className="text-2xl font-playfair mb-8">Visit again.</p>
            <p className="text-text-muted mb-8 text-sm">Your order has been successfully placed.</p>
            <Link 
              href="/menu"
              onClick={() => setCheckoutSuccess(false)}
              className="bg-lime text-black px-8 py-3 rounded-full text-xs font-bold tracking-[2px] uppercase hover:bg-green-light transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-lime mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-lime">
                Your Cart
              </div>
              <FadeInTitle 
                text1="Order" 
                br={false} 
                highlight="Summary"
                className="font-playfair text-[clamp(36px,5vw,58px)] leading-[1.1]" 
              />
            </div>

            {cart.length === 0 ? (
          <div className="text-center py-20 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-playfair mb-4">Your cart is empty</h3>
            <p className="text-text-muted mb-8 text-sm">Explore our menu to add some delicious items.</p>
            <Link 
              href="/menu"
              className="bg-lime text-black px-8 py-3 rounded-full text-xs font-bold tracking-[2px] uppercase hover:bg-green-light transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-white/10 rounded-2xl bg-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="font-playfair text-xl">{item.name}</span>
                    <span className="text-lime text-sm">₹{item.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-black/40 p-2 rounded-full border border-white/5">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                      {item.quantity === 1 ? <Trash2 size={16} className="text-red-400" /> : <Minus size={16} />}
                    </button>
                    <span className="w-4 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-lime text-black hover:bg-green-light transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-end gap-6">
              <div className="w-full max-w-sm flex items-center justify-between text-lg">
                <span className="text-white/70">Subtotal ({getTotalItems()} items):</span>
                <span className="font-playfair text-2xl">₹{totalAmount}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full max-w-sm bg-lime text-black py-4 rounded-full text-sm font-bold tracking-[2px] uppercase hover:bg-green-light transition-colors"
                >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
        </>
        )}
      </div>
    </section>
  );
}