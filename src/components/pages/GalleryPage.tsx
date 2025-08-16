'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'schools', name: 'School Events', icon: '🏫' },
    { id: 'bookdonations', name: 'Book Donations', icon: '📚' },
    { id: 'awards', name: 'Awards & Recognition', icon: '🏆' },
  ];

  const photos = [
    { src: '/images/schools/IMG_0091.jpeg', category: 'schools', caption: 'Reading session with students' },
    { src: '/images/schools/IMG_0095.jpeg', category: 'schools', caption: 'Interactive learning activities' },
    { src: '/images/schools/IMG_0096.jpeg', category: 'schools', caption: 'Book fair at elementary school' },
    { src: '/images/schools/IMG_0097.jpeg', category: 'schools', caption: 'Students enjoying new books' },
    { src: '/images/schools/IMG_0098.jpeg', category: 'schools', caption: 'Cultural presentation event' },
    { src: '/images/schools/IMG_0099.jpeg', category: 'schools', caption: 'Community reading program' },
    
    { src: '/images/bookdonations/IMG_0093.jpeg', category: 'bookdonations', caption: 'Book sorting and preparation' },
    { src: '/images/bookdonations/IMG_0094.jpeg', category: 'bookdonations', caption: 'Community book drive' },
    { src: '/images/bookdonations/IMG_9160.jpeg', category: 'bookdonations', caption: 'Massive book collection' },
    { src: '/images/bookdonations/IMG_9161.jpeg', category: 'bookdonations', caption: 'Volunteers organizing donations' },
    { src: '/images/bookdonations/IMG_9163.jpeg', category: 'bookdonations', caption: 'Books ready for distribution' },
    
    { src: '/images/awards/IMG_0092.jpeg', category: 'awards', caption: 'Award ceremony recognition' },
    { src: '/images/awards/IMG_0090.jpeg', category: 'awards', caption: 'Youth humanitarian award' },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full overflow-y-auto"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
          Gallery
        </h1>
        <p className="text-lg text-text-dark opacity-80">
          Capturing moments of impact and community connection
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
              ${selectedCategory === category.id 
                ? 'bg-accent-gold text-text-dark shadow-lg' 
                : 'bg-white bg-opacity-60 text-text-dark hover:bg-opacity-90 hover:shadow-md'
              }
            `}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={`${selectedCategory}-${photo.src}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02, duration: 0.3 }}
            className="group relative aspect-square rounded-lg overflow-hidden bg-white bg-opacity-60 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  {photo.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-dark opacity-60">
            No photos found in this category.
          </p>
        </div>
      )}

    </motion.div>
  );
};

export default GalleryPage;