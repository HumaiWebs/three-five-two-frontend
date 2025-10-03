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
      image: "/hero-image2.jpg", // Add your second image
      title: "Premium Quality",
      subtitle: "Materials",
      position: "bottom"
    },
    {
      image: "/hero-image3.jpg", // Add your third image
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
    <section className="relative bgurl bg-black text-white min-h-screen flex items-center"  style={{
    backgroundImage: "url('/inner-section-bg-scaled.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black-600 to-black opacity-90"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="w-xl pt-4">
              <img src="/logo.jpg" alt="Logo" />
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center space-x-6">
              <button className="bg-gold text-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-yellow-600 transition-colors">
                Shop Now
              </button>
              <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl lg:text-3xl text-gold font-light">2500</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Luxurious Fabrics</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl text-gold font-light">A9+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Tailors</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl text-gold font-light">56k</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Bookings</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="relative">
            {/* Slider Container */}
            <div className="bg-gray-800 h-96 lg:h-[600px] relative overflow-hidden">
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
                  
                  {/* Floating Element */}
                  <div className={`absolute ${slide.position === 'top' ? 'top-8 right-8' : 'bottom-8 left-8'} bg-black bg-opacity-50 p-4 backdrop-blur-sm`}>
                    <div className="text-gold text-sm uppercase tracking-widest">{slide.title}</div>
                    <div className="text-white text-lg">{slide.subtitle}</div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-gold hover:text-black transition-colors"
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-gold hover:text-black transition-colors"
              >
                ›
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-gold' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gray-600">
          <div className="w-px h-8 bg-gold mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}