'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface BookLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  isExiting: boolean;
  setIsExiting: (value: boolean) => void;
}

const BookLayout: React.FC<BookLayoutProps> = ({ leftContent, rightContent, isExiting, setIsExiting }) => {
  useEffect(() => {
    if (!isExiting) {
      setIsExiting(false);
    }
  }, [isExiting, setIsExiting]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-background p-4 md:p-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden"
        style={{ width: '90%', maxWidth: '1200px', height: '80vh', maxHeight: '800px' }}
      >
        {/* Left Page (Table of Contents) */}
        <div className="w-full md:w-1/3 p-6 border-r border-gray-200 overflow-y-auto bg-secondary text-text-primary">
          {leftContent}
        </div>

        {/* Right Page (Main Content) */}
        <div className="relative w-full md:w-2/3 p-6 overflow-y-auto">
          {rightContent}
        </div>
      </motion.div>
    </div>
  );
};

export default BookLayout;