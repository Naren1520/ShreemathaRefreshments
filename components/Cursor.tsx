"use client";
import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    const animCursor = () => {
      if (cursor && ring) {
        cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      animationFrameId = requestAnimationFrame(animCursor);
    };
    animCursor();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="hidden md:block w-3 h-3 bg-lime rounded-full fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-[0.05s]" 
        style={{ willChange: 'transform' }} 
      />
      <div 
        ref={ringRef} 
        className="hidden md:block w-9 h-9 border-[1.5px] border-lime rounded-full fixed top-0 left-0 pointer-events-none z-[9998] opacity-60 transition-transform duration-[0.1s]" 
        style={{ willChange: 'transform' }} 
      />
    </>
  );
}
