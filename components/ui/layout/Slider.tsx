'use client';

import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero-image.jpg",
      title: "Cutting-Edge",
      subtitle: "Technology",
      position: "top"
    },
    {
      image: "/hero-image2.jpg",
      title: "Premium Quality",
      subtitle: "Materials",
      position: "bottom"
    },
    {
      image: "/hero-image3.jpg",
      title: "Elegant Design",
      subtitle: "Craftsmanship",
      position: "top"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-800 h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative overflow-hidden rounded-lg lg:rounded-none">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            className="h-full w-full object-cover object-center" 
            alt={`Slide ${index + 1}`} 
          />
          
          {/* Floating Element - Responsive positioning */}
          <div className={`absolute ${
            slide.position === 'top' 
              ? 'top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8' 
              : 'bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-8'
          } bg-black bg-opacity-50 p-2 sm:p-3 lg:p-4 backdrop-blur-sm rounded`}>
            <div className="text-yellow-600 text-xs sm:text-sm uppercase tracking-widest">
              {slide.title}
            </div>
            <div className="text-white text-sm sm:text-base lg:text-lg">
              {slide.subtitle}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Responsive sizing */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 sm:p-2 rounded-full text-white hover:bg-yellow-600 hover:text-black transition-colors text-sm sm:text-base"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 sm:p-2 rounded-full text-white hover:bg-yellow-600 hover:text-black transition-colors text-sm sm:text-base"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Slide Indicators - Responsive positioning */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}