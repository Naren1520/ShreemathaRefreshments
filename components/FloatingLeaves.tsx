"use client";
import React, { useEffect, useState } from 'react';

const leafEmojis = ['🍃', '🌿', '🍀', '☘', '🌱'];

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newLeaves = [];
    for (let i = 0; i < 12; i++) {
        const leaf = (
            <div
                key={i}
                className="fixed pointer-events-none z-10 opacity-0 animate-leafFall"
                style={{
                    left: `${Math.random() * 100}vw`,
                    fontSize: `${10 + Math.random() * 16}px`,
                    animationDuration: `${12 + Math.random() * 16}s`,
                    animationDelay: `${Math.random() * 12}s`,
                }}
            >
                {leafEmojis[Math.floor(Math.random() * leafEmojis.length)]}
            </div>
        );
        newLeaves.push(leaf);
    }
    setLeaves(newLeaves);
}, []);

  return <>{leaves}</>;
}