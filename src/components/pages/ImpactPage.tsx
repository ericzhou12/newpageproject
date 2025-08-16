'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ImpactPage = () => {
  const stats = [
    { number: '20,000+', label: 'Books Donated', icon: '📚' },
    { number: '$4,500+', label: 'Funds Raised', icon: '💰' },
    { number: '680+', label: 'Students Impacted', icon: '👥' },
    { number: '5', label: 'Countries Impacted', icon: '🌍' },
  ];

  const partnerships = [
    'Troy Public Library',
    'Bloomfield Hills Public Library',
    'Rochester Library',
    'River Rouge STEM Academy',
    'UN Girls\' Education Initiative',
    'Edunomix',
    'AOTE Foundation'
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
          Our Impact
        </h1>
        <p className="text-lg text-text-dark opacity-80">
          Measuring success through lives changed and communities empowered
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="bg-white bg-opacity-60 rounded-lg p-4 text-center backdrop-blur-sm"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-xl md:text-2xl font-bold text-text-dark">{stat.number}</div>
            <div className="text-sm text-text-dark opacity-80">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Awards and Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-serif font-semibold text-text-dark mb-4">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-accent-gold bg-opacity-20 rounded-lg p-6">
            <h3 className="font-semibold text-text-dark mb-3">Recent Honors</h3>
            <ul className="space-y-2 text-text-dark opacity-90">
              <li>• Dr. Chrystal Tibb's Youth Humanitarian Award (UN of Greater Detroit)</li>
              <li>• Association of Technology and Education Grant ($900)</li>
              <li>• Princeton Prize in Race Relations Certificate (2x)</li>
              <li>• Hershey's Heartwarming Scholar + Grant Awardee</li>
              <li>• UN Major Group for Children and Youth Recognition</li>
            </ul>
          </div>
          
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src="/images/awards/IMG_0089.jpeg"
              alt="Award ceremony"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Recognition for our impact</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Partnerships */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-serif font-semibold text-text-dark mb-4">
          Key Partnerships
        </h2>
        <div className="flex flex-wrap gap-3">
          {partnerships.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.05 }}
              className="bg-book-brown text-page-cream px-3 py-2 rounded-full text-sm"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Global Reach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="bg-white bg-opacity-60 rounded-lg p-6 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-serif font-semibold text-text-dark mb-4">
          Global Reach
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-text-dark mb-2">United States</h3>
            <p className="text-text-dark opacity-90 text-sm mb-4">
              Chapters in Michigan, Pennsylvania, Maryland, and Chicago. 
              Serving elementary schools across multiple districts.
            </p>
            
            <h3 className="font-semibold text-text-dark mb-2">International</h3>
            <p className="text-text-dark opacity-90 text-sm">
              Supporting education in Nigeria with textbook donations and 
              fundraising for students in El Coyote, Mexico.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">🌍</div>
            <p className="text-text-dark opacity-80 text-sm">
              From local communities to global impact, 
              we're turning pages worldwide.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImpactPage;