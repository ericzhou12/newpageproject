'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background p-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-heading font-bold text-text-primary">Our Story</h1>
        <p className="text-lg font-body text-text-secondary mt-4 max-w-3xl mx-auto">The New Page Project was born from a simple idea: to share the love of reading with everyone.</p>
      </div>

      <div className="md:flex items-center mb-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <Image src="/images/awards/IMG_0089.jpeg" alt="Founder of The New Page Project" width={500} height={600} className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 md:ml-12 mt-8 md:mt-0"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary">From a Dream to a Movement</h2>
          <p className="mt-4 text-lg font-body text-text-secondary">Founded in 2022 by a 13-year-old with a passion for books, The New Page Project has quickly grown into a global movement. We are a 501(c)(3) non-profit organization dedicated to providing books to under-resourced communities and fostering a lifelong love of reading.</p>
        </motion.div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-text-primary">Our Journey</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-secondary p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-primary">2022</h3>
          <p className="mt-4 text-lg font-body text-text-secondary">The adventure begins! The New Page Project is founded.</p>
        </div>
        <div className="bg-secondary p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-primary">2023</h3>
          <p className="mt-4 text-lg font-body text-text-secondary">We become an official 501(c)(3) non-profit and expand our reach.</p>
        </div>
        <div className="bg-secondary p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-primary">2024</h3>
          <p className="mt-4 text-lg font-body text-text-secondary">New chapters are launched in Pennsylvania, Nigeria, and Maryland.</p>
        </div>
        <div className="bg-secondary p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-primary">2025</h3>
          <p className="mt-4 text-lg font-body text-text-secondary">We are honored with the Dr. Chrystal Tibb’s Youth Humanitarian Award.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;