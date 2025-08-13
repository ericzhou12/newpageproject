'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background p-6"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-heading font-bold mb-4 text-text-primary"
        >
          Welcome to The New Page Project
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl font-body mb-8 max-w-2xl mx-auto text-text-secondary"
        >
          We are a youth-led non-profit dedicated to promoting literacy and education for all.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <Link href="/about" className="bg-primary hover:bg-accent text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Discover Our Story
          </Link>
        </motion.div>
      </div>

      <div className="py-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-text-primary">Our Impact</h2>
          <p className="text-lg font-body text-text-secondary mt-4 max-w-3xl mx-auto">We are passionate about making a difference. See what we have accomplished so far.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-heading font-bold text-primary">20,000+</h3>
            <p className="text-lg font-body text-text-secondary mt-2">Books Donated</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-heading font-bold text-primary">$4,500+</h3>
            <p className="text-lg font-body text-text-secondary mt-2">Fundraised</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-heading font-bold text-primary">10+</h3>
            <p className="text-lg font-body text-text-secondary mt-2">Chapters Worldwide</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
