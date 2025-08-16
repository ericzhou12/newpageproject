'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
          Welcome to The New Page Project
        </h1>
        <p className="text-lg text-text-dark opacity-80 max-w-2xl mx-auto">
          Empowering communities through literacy and education since 2022
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-serif font-semibold text-text-dark mb-3">
              Our Mission
            </h2>
            <p className="text-text-dark opacity-90">
              To bridge the educational gap by providing books and resources to underserved 
              communities, fostering a love for reading and learning that transforms lives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent-gold bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-text-dark">20,000+</div>
              <div className="text-sm text-text-dark opacity-80">Books Donated</div>
            </div>
            <div className="bg-accent-gold bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-text-dark">$4,500+</div>
              <div className="text-sm text-text-dark opacity-80">Funds Raised</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/images/bookdonations/IMG_9160.jpeg"
              alt="Book donation event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Making a difference, one book at a time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;