'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const ProjectsLandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background p-6"
    >
      <div className="text-center">
        <h1 className="text-5xl font-heading font-bold text-text-primary mb-8">Our Projects</h1>
        <p className="text-lg font-body text-text-secondary mb-12 max-w-3xl mx-auto">
          Explore the diverse range of initiatives we undertake to promote literacy and education, both in our local communities and across the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Local Projects</h2>
            <p className="text-lg font-body text-text-secondary mb-6">Discover how we are making a difference in our immediate communities through various educational and book donation programs.</p>
            <Link href="/projects/local" className="bg-primary hover:bg-accent text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300">
              View Local Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">International Projects</h2>
            <p className="text-lg font-body text-text-secondary mb-6">Learn about our efforts to expand literacy and educational opportunities to communities around the world.</p>
            <Link href="/projects/international" className="bg-primary hover:bg-accent text-text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300">
              View International Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsLandingPage;