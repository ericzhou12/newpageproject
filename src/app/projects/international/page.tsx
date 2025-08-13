'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const InternationalProjectsPage = () => {
  const internationalProjects = [
    {
      title: "El Coyote, Mexico",
      description: "Raised $2,000 for students in El Coyote, Mexico, with missionary Lee and Pastor Fernando.",
      image: "/images/bookdonations/IMG_9163.jpeg",
    },
    {
      title: "Textbooks for Nigeria",
      description: "Shipped over 180+ lbs of textbooks to Nigeria with Edunomix and AOTE Foundation.",
      image: "/images/bookdonations/IMG_9165.jpeg",
    },
    {
      title: "International Chapters",
      description: "Established chapters in Pennsylvania, Nigeria, Maryland, and Chicago.",
      image: "/images/schools/IMG_0098.jpeg",
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
        <h1 className="text-5xl font-heading font-bold text-text-primary">International Projects</h1>
        <p className="text-lg font-body text-text-secondary mt-4 max-w-3xl mx-auto">Our reach extends beyond borders, bringing the gift of education to communities worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {internationalProjects.map((project, index) => (
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

export default InternationalProjectsPage;