'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const LocalProjectsPage = () => {
  const localProjects = [
    {
      title: "Rebuilding Libraries",
      description: "Rebuilt River Rouge STEM Academy’s library, donating 7,000 books.",
      image: "/images/bookdonations/IMG_9160.jpeg",
    },
    {
      title: "Cultural Initiatives",
      description: "Piloted cultural projects in Schroeder, Bemis, and Wattles schools.",
      image: "/images/schools/IMG_0091.jpeg",
    },
    {
      title: "Local Book Donations",
      description: "Donated books to Schroeder, Wattles, Whitman, Pasteur, and Memorial Elementary schools.",
      image: "/images/bookdonations/IMG_0094.jpeg",
    },
    {
      title: "Community Partnerships",
      description: "Partnered with Troy Public Library for a summer reading book bagging event.",
      image: "/images/schools/IMG_0100.jpeg",
    },
    {
      title: "First Book Fair",
      description: "Hosted our first book fair with over 2,000 books.",
      image: "/images/bookdonations/IMG_0093.jpeg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background p-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-heading font-bold text-text-primary">Local Projects</h1>
        <p className="text-lg font-body text-text-secondary mt-4 max-w-3xl mx-auto">Our commitment to fostering literacy begins right here, in our local communities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {localProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden"
          >
            <Image src={project.image} alt={project.title} width={500} height={300} className="object-cover h-64 w-full" />
            <div className="p-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-lg font-body text-text-secondary">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LocalProjectsPage;