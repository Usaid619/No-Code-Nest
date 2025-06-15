'use client';

import { useEffect, useState } from 'react';

const images = [
  '/assets/hero1.png',
  '/assets/hero2.png',
  '/assets/hero3.png',
  '/assets/hero4.png',
  '/assets/hero5.png',
  '/assets/hero6.png',
  '/assets/hero7.png',
];

export default function HeroAnimation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute p-2 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
}
