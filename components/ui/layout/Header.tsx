'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-[#09090b]' : 'bg-black'
    } border-b border-gray-200 py-4`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Left aligned */}
          <div className="text-2xl font-normal text-white tracking-wider">
            <img src="/logo-small.jpg" alt="Logo" className="w-2xs"/>
          </div>

          {/* Desktop Navigation - Centered with exact spacing */}
          <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              HOME
            </Link>
            <Link href="/pages" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              PAGES
            </Link>
            <Link href="/gift-card" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              GIFT CARD
            </Link>
            <Link href="/gallery" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              GALLERY
            </Link>
            <Link href="/shop" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              SHOP
            </Link>
            <Link href="/news" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              NEWS
            </Link>
            <Link href="/contact" className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Right Side Icons - Exact match to screenshot */}
          <div className="flex items-center space-x-6">
            {/* Search Icon - Q */}
            <button className="text-white hover:text-gold transition-colors text-sm font-normal">
              Q
            </button>

            {/* User Icon - A */}
            <button className="text-white hover:text-gold transition-colors text-sm font-normal">
              A
            </button>

            {/* Cart Count - 8 */}
            <button className="text-white hover:text-gold transition-colors text-sm font-normal">
              8
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700 mt-4">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/pages" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PAGES
              </Link>
              <Link 
                href="/gift-card" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                GIFT CARD
              </Link>
              <Link 
                href="/gallery" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link 
                href="/shop" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                href="/news" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                NEWS
              </Link>
              <Link 
                href="/contact" 
                className="text-xs font-normal uppercase tracking-widest text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}