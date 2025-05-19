"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);
  // 0 = initial typing animation
  // 1 = typing complete, centered text
  // 2 = animating to header
  // 3 = header position, content revealed
  
  const [typedText, setTypedText] = useState("");
  const fullText = "The New Page Project";
  
  useEffect(() => {
    // Typing animation
    if (animationStage === 0) {
      if (typedText === fullText) {
        // When typing is complete, wait a moment before next stage
        const timer = setTimeout(() => {
          setAnimationStage(1);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        // Continue typing
        const timer = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      }
    }
    
    // After centered text stage, start shrinking animation
    if (animationStage === 1) {
      const timer = setTimeout(() => {
        setAnimationStage(2);
        
        // After animation completes, reveal content
        const finalTimer = setTimeout(() => {
          setAnimationStage(3);
        }, 1000); // Animation duration (1s)
        
        return () => clearTimeout(finalTimer);
      }, 1000); // Time before shrinking starts
      
      return () => clearTimeout(timer);
    }
  }, [animationStage, typedText]);
  
  // Start typing when component mounts
  useEffect(() => {
    setTypedText(fullText.substring(0, 1)); // Start with first character
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-amber-50 overflow-hidden">
      {/* Navbar that animates */}
      <header 
        className={`fixed w-full transition-all duration-1000 ease-in-out z-20
          ${animationStage < 2 ? 'top-1/2 -translate-y-1/2' : 'top-0 translate-y-0'}
          ${animationStage >= 2 ? 'bg-amber-100 shadow-md' : ''}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-16 ${animationStage < 2 ? 'justify-center' : ''}`}>
            {/* Logo/Title */}
            <div className={`flex-shrink-0 transition-all duration-1000 
              ${animationStage < 2 ? 'w-full text-center' : ''}
            `}>
              <Link href="/" className="inline-block">
                <h1 className={`font-serif font-bold text-amber-900 
                  ${animationStage < 2 ? 'text-6xl' : 'text-3xl'}
                  ${animationStage < 2 ? 'border-r-4 border-amber-900' : ''}
                `}>
                  {typedText}
                  {animationStage === 0 && <span className="inline-block w-2 ml-1 bg-amber-900 animate-pulse">&nbsp;</span>}
                </h1>
              </Link>
            </div>
            
            {/* Navigation Links */}
            <nav className={`transition-all duration-1000 ease-in-out
              ${animationStage < 3 ? 'opacity-0 invisible' : 'opacity-100 visible'}
            `}>
              <ul className="flex space-x-8 font-medium text-amber-900">
                <li>
                  <Link href="/about" className="hover:text-amber-700 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-amber-700 transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-700 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Content that fades in after animation */}
      <div className={`
        transition-opacity duration-700 ease-in-out
        ${animationStage < 3 ? 'opacity-0' : 'opacity-100'}
        pt-24 px-8
      `}>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-semibold mb-6 text-amber-900">SLOGAN</h2>
              <p className="text-lg text-amber-800 mb-6">
                smth inspirtaionsal
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <button className="bg-amber-800 hover:bg-amber-900 text-white font-medium py-3 px-6 rounded-lg cursor-pointer transition-colors">
                    Donate Books
                  </button>
                </Link>
                <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-100 font-medium py-3 px-6 rounded-lg transition-colors">
                  Our Impact
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200 rounded-lg rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-lg -rotate-12"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg border-t-8 border-amber-800">
                <div className="w-full h-64 bg-amber-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="transform -rotate-12">
                    <div className="w-32 h-48 bg-amber-700 rounded-sm shadow-lg"></div>
                  </div>
                  <div className="transform rotate-6 ml-4">
                    <div className="w-32 h-48 bg-amber-600 rounded-sm shadow-lg"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-amber-900">Our Mission</h3>
                <p className="text-amber-800">
                  mission statement
                </p>
              </div>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
              <span className="block text-4xl font-bold text-amber-900 mb-2">2</span>
              <span className="text-amber-700">Books Donated</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
              <span className="block text-4xl font-bold text-amber-900 mb-2">0</span>
              <span className="text-amber-700">Schools Supported</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-800">
              <span className="block text-4xl font-bold text-amber-900 mb-2">3</span>
              <span className="text-amber-700">s </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}