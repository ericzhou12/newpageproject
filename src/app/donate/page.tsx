"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

let hasPlayedAnimation = false;

export default function Donate() {
  const [animationStage, setAnimationStage] = useState(0);
  // 0 = initial typing animation
  // 1 = typing complete, centered text
  // 2 = animating to header
  // 3 = header position, content revealed
  
  const [typedText, setTypedText] = useState("");
  const fullText = "Donate";
  
  useEffect(() => {
    if (hasPlayedAnimation) {
      setAnimationStage(4);
      setTypedText(fullText);
      return;
    }

    if (animationStage === 0) {
      if (typedText === fullText) {
        // When typing is complete, wait a moment before next stage
        const timer = setTimeout(() => {
          setAnimationStage(1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Continue typing
        const timer = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      }
    }
    
    // After centered text stage, start shrinking animation
    if (animationStage === 1) {
      const timer = setTimeout(() => {
        setAnimationStage(2);
        
        // After animation completes, reveal content
        const finalTimer = setTimeout(() => {
          hasPlayedAnimation = true;
          setAnimationStage(3);
        }, 800); // Animation duration 
        
        return () => clearTimeout(finalTimer);
      }, 200); // Time before shrinking starts
      
      return () => clearTimeout(timer);
    }
  }, [animationStage, typedText]);
  
  // Start typing when component mounts
  useEffect(() => {
    if (!hasPlayedAnimation) {
      setTypedText(fullText.substring(0, 1)); // Start with first character
    }
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
                  <Link href="/" className="hover:text-amber-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-700 transition-colors">
                    About
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
    </div>
  );
}