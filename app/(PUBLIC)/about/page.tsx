'use client';

import CustomerFeedback from "@/components/ui/layout/CustomerFeedback";
import ImageGallery from "@/components/ui/layout/ImageGallery";
import InnerSection from "@/components/ui/layout/InnerSection";
import Slider from "@/components/ui/layout/Slider";
import VideoSection from "@/components/ui/layout/VideoSection";

export default function AboutPage() {
  return (
    <>
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
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-gray-300 text-sm leading-relaxed">Where Heritage Meets Modern Precision</p>
            <p className="text-gray-400 text-sm leading-relaxed">Born from a pursuit of perfection, Three Five Two is a symbol of balance — three for design, five for craftsmanship, two for individuality.
We believe luxury is not loud; it’s felt in every thread, every finish, every fit.
Each garment we create reflects the sophistication of modern tailoring, designed to outlast trends and define personal style.
</p>
           
           
            

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
           <VideoSection />

      
              </div>
            </div>
          </div>

     
  
    </section>
   <InnerSection />
   <CustomerFeedback />
   <ImageGallery />
    </>
  );
}