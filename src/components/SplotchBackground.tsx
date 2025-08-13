'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Splotch {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const generateRandomSplotch = (): Splotch => {
  const colors = ['#CD853F', '#8B4513', '#FDF8F0', '#F5E0C7']; // Accent, Secondary, Primary, Text-secondary
  return {
    id: Math.random().toString(36).substring(2, 9),
    x: Math.random() * 100, // % of viewport width
    y: Math.random() * 100, // % of viewport height
    size: Math.random() * 100 + 50, // px, between 50 and 150
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 10 + 5, // seconds, between 5 and 15
    delay: Math.random() * 5, // seconds, between 0 and 5
  };
};

const SplotchBackground: React.FC = () => {
  const [splotches, setSplotches] = useState<Splotch[]>([]);

  useEffect(() => {
    const initialSplotches = Array.from({ length: 10 }).map(generateRandomSplotch);
    setSplotches(initialSplotches);

    const interval = setInterval(() => {
      setSplotches((prevSplotches) => {
        const newSplotch = generateRandomSplotch();
        // Remove oldest splotch if too many, add new one
        return [...prevSplotches.slice(prevSplotches.length > 10 ? 1 : 0), newSplotch];
      });
    }, 5000); // Add a new splotch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {splotches.map((splotch) => (
        <motion.div
          key={splotch.id}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            backgroundColor: splotch.color,
            width: splotch.size,
            height: splotch.size,
            left: `${splotch.x}vw`,
            top: `${splotch.y}vh`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0.8, 1.2, 1], // Grow, shrink, grow
            opacity: [0, 0.7, 0.5, 0.7, 0], // Fade in and out
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0], // Move around
            y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: splotch.duration,
            delay: splotch.delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default SplotchBackground;
