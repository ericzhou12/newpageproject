'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const BookLayout = ({ children, currentPage, onPageChange }: BookLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coverFlipped, setCoverFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setCoverFlipped(true), 400);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const pages = [
    { id: 'home', title: 'Home', icon: '🏠' },
    { id: 'impact', title: 'Impact', icon: '🌟' },
    { id: 'blog', title: 'Blog', icon: '📖' },
    { id: 'chapters', title: 'Chapters', icon: '🌍' },
    { id: 'gallery', title: 'Gallery', icon: '📸' },
    { id: 'contact', title: 'Get Involved', icon: '🤝' },
  ];

  return (
    <div className="book-container">
      <div className={`book ${isOpen ? 'open' : ''}`}>
        <div className="book-spine"></div>

        {/* Book Cover */}
        <motion.div
          className={`book-cover ${coverFlipped ? 'flipped' : ''}`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: coverFlipped ? -180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center justify-center h-full text-page-cream p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-accent-gold">
                The New Page Project
              </h1>
              <p className="text-lg md:text-xl font-light mb-8">
                Turning the page on education inequality
              </p>
              <div className="text-sm opacity-80">
                20,000+ books donated • $4,500+ raised
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        {coverFlipped && (
          <motion.div
            className="absolute -left-8 md:-left-35 top-8 z-20 flex flex-col space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {pages.map((page, index) => (
              <motion.button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`
                  px-2 md:px-3 py-2 rounded-l-lg text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer
                  ${currentPage === page.id
                    ? 'bg-accent-gold text-text-dark shadow-lg'
                    : 'bg-book-brown text-page-cream hover:bg-opacity-100'
                  }
                `}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <span className="mr-2">{page.icon}</span>
                <span className="hidden md:inline">{page.title}</span>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Page Content */}
        {coverFlipped && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`page-${currentPage}`}
              className="book-page"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="page-content">
                {children}
              </div>

              {/* Page number */}
              <div className="text-center text-sm text-text-dark opacity-50 mt-4">
                {pages.findIndex(p => p.id === currentPage) + 1} / {pages.length}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default BookLayout;