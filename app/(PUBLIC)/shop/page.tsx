'use client';

import Image from "next/image";
import InnerSection from "@/components/ui/layout/InnerSection";
import Products from "@/components/ui/layout/Products";
import RecentProductShowcase from "@/components/ui/layout/RecentProductShowcase";
import Slider from "@/components/ui/layout/Slider";
import VideoSection from "@/components/ui/layout/VideoSection";

export default function ShopPage() {
  const topRatedProducts = [
    {
      id: 1,
      name: "Royal Black Tuxedo",
      price: "£85.00",
      image: "/retro-style-blazar.png",
    },
    {
      id: 2,
      name: "Ivory Classic Suit",
      price: "£92.00",
      image: "/retro-style-blazar.png",
    },
    {
      id: 3,
      name: "Tailored Charcoal Blazer",
      price: "£79.00",
      image: "/retro-style-blazar.png",
    },
  ];

  return (
    <>
      {/* HERO / INTRO SECTION */}
      <section
        className="relative bg-black text-white min-h-screen flex flex-col justify-center py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/inner-section-bg-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90"></div>

        {/* Social Media Sidebar */}
        <div className="hidden lg:flex flex-col items-center absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <div className="w-px h-16 bg-gray-500/40"></div>
          <div className="flex flex-col items-center justify-center my-6">
            {["Facebook", "Instagram", "Twitter", "Linkedin"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 tracking-[0.4em] text-[12px] uppercase font-light [writing-mode:vertical-rl] [text-orientation:mixed] mt-6 first:mt-0 hover:text-gold transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
          <div className="w-px h-16 bg-gray-500/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold uppercase tracking-wide">Shop</h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where Heritage Meets Modern Precision
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Born from a pursuit of perfection, Three Five Two is a symbol of balance — three for
              design, five for craftsmanship, two for individuality. We believe luxury is not loud;
              it’s felt in every thread, every finish, every fit. Each garment we create reflects the
              sophistication of modern tailoring, designed to outlast trends and define personal
              style.
            </p>
          </div>

          {/* --- TOP RATED PRODUCTS PREVIEW --- */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="w-28 h-px bg-gold mx-auto mb-5"></div>
              <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
                Top Rated Products
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {topRatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-black/40 border border-gray-700 hover:border-gold transition-all duration-300 p-6"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden mb-5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-light tracking-wide text-white border-b border-gray-700 pb-3 group-hover:border-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gold text-lg font-light">{product.price}</p>
                  </div>

                  {/* Minimal Hover Button */}
                  <div className="text-center mt-4">
                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-gold border border-gold px-4 py-2 text-sm tracking-widest hover:bg-gold hover:text-black">
                      VIEW DETAILS
                    </button>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL PRODUCTS SECTION */}
      <Products />
    </>
  );
}
