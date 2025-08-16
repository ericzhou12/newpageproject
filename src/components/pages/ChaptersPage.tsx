'use client';

import { motion } from 'framer-motion';

const ChaptersPage = () => {
  const chapters = [
    {
      location: 'Michigan (Headquarters)',
      status: 'Active',
      established: '2022',
      highlights: [
        'Troy Public Library partnership',
        'River Rouge STEM Academy library rebuild',
        'Multiple elementary school programs',
        'Summer reading initiatives'
      ],
      flag: '🇺🇸'
    },
    {
      location: 'Pennsylvania',
      status: 'Active',
      established: '2023',
      highlights: [
        'Local school partnerships',
        'Community book drives',
        'Reading program development'
      ],
      flag: '🇺🇸'
    },
    {
      location: 'Maryland',
      status: 'Active',
      established: '2023',
      highlights: [
        'Elementary school outreach',
        'Cultural literacy programs',
        'Community engagement initiatives'
      ],
      flag: '🇺🇸'
    },
    {
      location: 'Chicago, Illinois',
      status: 'Active',
      established: '2025',
      highlights: [
        'Urban education focus',
        'New chapter development',
        'Community partnerships in progress'
      ],
      flag: '🇺🇸'
    },
    {
      location: 'Nigeria',
      status: 'Active',
      established: '2023',
      highlights: [
        'Textbook donation program',
        'Partnership with Edunomix',
        '180+ lbs of educational materials sent',
        'AOTE Foundation collaboration'
      ],
      flag: '🇳🇬'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full overflow-y-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
          Our Chapters
        </h1>
        <p className="text-lg text-text-dark opacity-80">
          Growing our impact through local communities worldwide
        </p>
      </div>

      <div className="grid gap-6 mb-8">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.location}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{chapter.flag}</span>
                <div>
                  <h2 className="text-xl font-serif font-semibold text-text-dark">
                    {chapter.location}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-text-dark opacity-80">
                    <span>Est. {chapter.established}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      chapter.status === 'Active' 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {chapter.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-text-dark mb-2">Key Highlights:</h3>
              <ul className="space-y-1">
                {chapter.highlights.map((highlight, highlightIndex) => (
                  <motion.li
                    key={highlightIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 + highlightIndex * 0.05 }}
                    className="flex items-start text-text-dark opacity-90 text-sm"
                  >
                    <span className="text-accent-gold mr-2 mt-1">•</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-accent-gold bg-opacity-20 rounded-lg p-6 text-center"
      >
        <h2 className="text-2xl font-serif font-semibold text-text-dark mb-4">
          Start a Chapter in Your Community
        </h2>
        <p className="text-text-dark opacity-90 mb-4">
          Join our growing network of changemakers. Help us bring literacy and education 
          resources to underserved communities in your area.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-white bg-opacity-60 px-4 py-2 rounded-full">
            📧 Contact us for chapter guidelines
          </div>
          <div className="bg-white bg-opacity-60 px-4 py-2 rounded-full">
            🤝 Partner with local organizations
          </div>
          <div className="bg-white bg-opacity-60 px-4 py-2 rounded-full">
            📚 Make a lasting impact
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChaptersPage;