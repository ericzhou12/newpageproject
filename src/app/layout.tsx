'use client';

import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BookLayout from "@/components/BookLayout";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import SplotchBackground from '@/components/SplotchBackground';

const lora = Lora({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);

  const triggerPageExit = useCallback(() => {
    setIsExiting(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${openSans.className} font-body`}>
        <SplotchBackground />
        <AnimatePresence mode="wait">
          <BookLayout
            leftContent={<Navbar triggerPageExit={triggerPageExit} />}
            rightContent={
              <motion.div
                key={pathname}
                initial={{ rotateY: 0, opacity: 1, zIndex: 1, transformOrigin: "left center" }}
                animate={{ rotateY: 0, opacity: 1, zIndex: 1, transformOrigin: "left center" }}
                exit={{ rotateY: 90, opacity: 1, zIndex: 2, transformOrigin: "left center" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  if (isExiting) {
                    setIsExiting(false);
                  }
                }}
                className="absolute inset-0 bg-background text-text-primary"
              >
                {children}
              </motion.div>
            }
            isExiting={isExiting}
            setIsExiting={setIsExiting}
          />
        </AnimatePresence>
      </body>
    </html>
  );
}