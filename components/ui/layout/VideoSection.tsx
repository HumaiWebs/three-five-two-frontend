'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setShowVideo(true);
    // Auto-play the video when it opens
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    }, 100);
  };

  const handleClose = () => {
    setShowVideo(false);
    // Pause the video when closing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/video-section-bg.jpg" // Replace with your background image
          alt="Video section background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8 w-full">
        {!showVideo ? (
          <>
            {/* Section Title */}
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide mb-6">
              Our Story
            </h2>
            <p className="text-xl lg:text-2xl text-gold italic mb-12 max-w-2xl mx-auto">
              Discover the craftsmanship behind every stitch
            </p>

            {/* Play Button */}
            <button
              onClick={handlePlay}
              className="group relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-8 transition-transform duration-300 hover:scale-110"
            >
              {/* Outer Circle */}
              <div className="absolute inset-0 border-2 border-gold rounded-full group-hover:border-white transition-colors duration-300"></div>
              
              {/* Inner Circle */}
              <div className="absolute inset-4 bg-gold rounded-full group-hover:bg-white transition-all duration-300 flex items-center justify-center">
                {/* Play Icon */}
                <svg
                  className="w-8 h-8 lg:w-12 lg:h-12 text-black ml-1 group-hover:text-gold transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>

              {/* Ripple Effect */}
              <div className="absolute inset-0 border-2 border-gold rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Play Text */}
            <p className="text-lg uppercase tracking-widest text-gray-300">
              Watch Our Story
            </p>
          </>
        ) : (
          /* Local Video Player - Larger Size with Full Controls */
          <div className="relative w-full max-w-6xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Video Player */}
            <video
              ref={videoRef}
              controls
              controlsList="nodownload"
              className="w-full h-auto max-h-[80vh] object-contain"
              poster="/video-poster.jpg" // Optional: Add a poster image
            >
              <source src="/videos/video-ad.mp4" type="video/mp4" />
              <source src="/videos/video-ad.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Enhanced Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-12 h-12 bg-black/80 hover:bg-gold text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg z-20 border border-gray-600 hover:border-gold"
              aria-label="Close video"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Video Title Overlay (Optional) */}
            <div className="absolute top-6 left-6 bg-black/70 px-4 py-2 rounded-lg">
              <h3 className="text-white text-lg font-semibold">Our Fashion Story</h3>
            </div>
          </div>
        )}
      </div>

      {/* Optional: Bottom gradient fade - Only show when video is not playing */}
      {!showVideo && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
      )}
    </section>
  );
}