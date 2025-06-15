'use client';

import { useEffect, useState } from 'react';

const images = [
  '/assets/automation1.png',
  '/assets/automation2.png',
  '/assets/automation3.png',
  '/assets/automation4.png',
  '/assets/automation5.png',
  '/assets/automation6.png',
  '/assets/automation7.png',
];

export default function AutomAnime() {
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
