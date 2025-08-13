'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const ChaptersPage = () => {
  const chapters = [
    {
      name: "Pennsylvania, USA",
      image: "/images/schools/IMG_0095.jpeg",
    },
    {
      name: "Maryland, USA",
      image: "/images/schools/IMG_0096.jpeg",
    },
    {
      name: "Chicago, USA",
      image: "/images/schools/IMG_0097.jpeg",
    },
    {
      name: "Nigeria",
      image: "/images/schools/IMG_0098.jpeg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-platinum py-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold text-oxford-blue">Our Chapters</h1>
          <p className="text-lg font-body text-yinmn-blue mt-4 max-w-3xl mx-auto">The New Page Project is a global movement. Our chapters are led by passionate individuals who are dedicated to making a difference in their communities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image src={chapter.image} alt={chapter.name} width={400} height={300} className="object-cover h-64 w-full" />
              <div className="p-6">
                <h2 className="text-2xl font-heading font-bold text-oxford-blue">{chapter.name}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="text-4xl font-heading font-bold text-oxford-blue">Start a Chapter</h2>
          <p className="text-lg font-body text-yinmn-blue mt-4 max-w-3xl mx-auto">Interested in joining our movement? We are always looking for passionate individuals to start new chapters in their communities. Contact us to learn more.</p>
          <div className="mt-8">
            <a href="mailto:info@thenewpageproject.org" className="bg-yinmn-blue hover:bg-silver-lake-blue text-platinum font-bold py-3 px-6 rounded-full transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChaptersPage;
