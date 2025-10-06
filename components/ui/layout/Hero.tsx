'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
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
<section
  className="relative bg-black text-white min-h-screen flex items-center py-8 lg:py-0 overflow-hidden"
  style={{
    backgroundImage: "url('/inner-section-bg-scaled.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/95 bg-opacity-60 lg:bg-opacity-70"></div>
      {/* Social Media Sidebar */}
<div className="hidden lg:flex flex-col items-center absolute left-6 top-1/2 -translate-y-1/2 z-20">
  {/* Top line */}
  <div className="w-px h-16 bg-gray-500/40"></div>

  {/* Vertical Text Links */}
  <div className="flex flex-col items-center justify-center my-6">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 tracking-[0.4em] text-[12px] uppercase font-light [writing-mode:vertical-rl] [text-orientation:mixed] hover:text-gold transition-colors"
    >
      Facebook
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 tracking-[0.4em] text-[12px] uppercase font-light [writing-mode:vertical-rl] [text-orientation:mixed] mt-6 hover:text-gold transition-colors"
    >
      Instagram
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 tracking-[0.4em] text-[12px] uppercase font-light [writing-mode:vertical-rl] [text-orientation:mixed] mt-6 hover:text-gold transition-colors"
    >
      Twitter
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 tracking-[0.4em] text-[12px] uppercase font-light [writing-mode:vertical-rl] [text-orientation:mixed] mt-6 hover:text-gold transition-colors"
    >
      Linkedin
    </a>
  </div>

  {/* Bottom line */}
  <div className="w-px h-16 bg-gray-500/40"></div>
</div>

      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="max-w-[300px] sm:max-w-[300px] lg:max-w-[450px] w-full"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
              <button className="bg-gold text-black px-6 sm:px-8 py-3 text-sm uppercase tracking-widest hover:bg-yellow-600 transition-colors whitespace-nowrap">
                Shop Now
              </button>
              <button className="border border-white px-6 sm:px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-700">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl text-gold font-light">2500</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1 leading-tight">
                  Luxurious Fabrics
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl text-gold font-light">A9+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1 leading-tight">
                  Tailors
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl text-gold font-light">56k</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1 leading-tight">
                  Bookings
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Slider Container */}
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
                    <div className="text-gold text-xs sm:text-sm uppercase tracking-widest">
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
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 sm:p-2 rounded-full text-white hover:bg-gold hover:text-black transition-colors text-sm sm:text-base"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 sm:p-2 rounded-full text-white hover:bg-gold hover:text-black transition-colors text-sm sm:text-base"
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
                      index === currentSlide ? 'bg-gold' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, visible on desktop */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-px h-16 bg-gray-600">
          <div className="w-px h-8 bg-gold mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}