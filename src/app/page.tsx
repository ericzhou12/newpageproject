'use client';

import { useState, useCallback } from 'react';
import BookLayout from '@/components/BookLayout';
import HomePage from '@/components/pages/HomePage';
import BlogPage from '@/components/pages/BlogPage';
import ImpactPage from '@/components/pages/ImpactPage';
import ChaptersPage from '@/components/pages/ChaptersPage';
import GalleryPage from '@/components/pages/GalleryPage';
import ContactPage from '@/components/pages/ContactPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = useCallback((newPage: string) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage key="home" />;
      case 'impact':
        return <ImpactPage key="impact" />;
      case 'blog':
        return <BlogPage key="blog" />;
      case 'chapters':
        return <ChaptersPage key="chapters" />;
      case 'gallery':
        return <GalleryPage key="gallery" />;
      case 'contact':
        return <ContactPage key="contact" />;
      default:
        return <HomePage key="home" />;
    }
  };

  return (
    <BookLayout currentPage={currentPage} onPageChange={handlePageChange}>
      {renderPage()}
    </BookLayout>
  );
}