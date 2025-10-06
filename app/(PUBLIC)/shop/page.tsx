'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
import Products from "@/components/ui/layout/Products";
import ShopFilter from "@/components/ui/layout/ShopFilter";

// Move products data outside component to prevent recreation on every render
const TOP_RATED_PRODUCTS = [
  {
    id: 1,
    name: "Royal Black Tuxedo",
    price: "£85.00",
    image: "/retro-style-blazar.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Ivory Classic Suit",
    price: "£92.00",
    image: "/retro-style-blazar.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Tailored Charcoal Blazer",
    price: "£79.00",
    image: "/retro-style-blazar.png",
    rating: 4,
  },
];

export default function ShopPage() {
  // Filter state with proper typing
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    types: [] as string[],
    collections: [] as string[],
  });

  // Memoized background styles to prevent object recreation
  const heroBackgroundStyle = useMemo(() => ({
    backgroundImage: "url('/inner-section-bg-scaled.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }), []);

  const productsBackgroundStyle = useMemo(() => ({
    backgroundImage: "url('/product-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }), []);

  return (
    <main className="min-h-screen bg-black">
      {/* HERO / INTRO SECTION */}
      <section
        className="relative text-white min-h-screen flex flex-col justify-center py-16 lg:py-24 overflow-hidden"
        style={heroBackgroundStyle}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-4xl">
            {/* Breadcrumb for better UX */}
            <nav className="text-sm text-gray-400 mb-4">
              <span>Home</span> / <span className="text-gold">Shop</span>
            </nav>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide">
                Shop
              </h1>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Where Heritage Meets Modern Precision
              </p>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Born from a pursuit of perfection, Three Five Two is a symbol of balance — three for
                design, five for craftsmanship, two for individuality. We believe luxury is not loud;
                it's felt in every thread, every finish, every fit.
              </p>
            </div>
          </div>

          {/* TOP RATED PRODUCTS PREVIEW */}
          <div className="mt-20 lg:mt-24">
            <div className="text-center mb-12 lg:mb-16">
              <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide">
                Top Rated Products
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Discover our most beloved pieces, crafted with exceptional attention to detail
              </p>
            </div>

            {/* Wider grid with fewer columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {TOP_RATED_PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  className="group relative bg-black/40 border border-gray-800 hover:border-gold transition-all duration-500 p-8 hover:transform hover:-translate-y-2"
                >
                  {/* Image Container - Wider */}
                  <div className="relative h-96 w-full overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                      priority={product.id === 1}
                    />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-gold text-sm">
                      ★ {product.rating}.0
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light tracking-wide text-white border-b border-gray-800 pb-4 group-hover:border-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gold text-2xl font-light">{product.price}</p>
                  </div>

                  {/* Hover Button */}
                  <div className="text-center mt-8">
                    <button 
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-gold border border-gold px-8 py-4 text-base tracking-widest uppercase hover:bg-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
                      aria-label={`View details for ${product.name}`}
                    >
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + PRODUCTS SECTION */}
      <section
        className="relative text-white py-20 lg:py-24"
        style={productsBackgroundStyle}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="w-20 h-0.5 bg-gold mx-auto mb-6"></div>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-4">
              All Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Filter and discover our complete collection of tailored excellence
            </p>
          </div>

          {/* Filter and Products Layout - No sticky sidebar */}
          <div className="flex flex-col lg:flex-row  ">
            {/* Filter Sidebar - Normal flow */}
            <div className="lg:max-w-3xl ">
              <ShopFilter filters={filters} onFilterChange={setFilters} />
            </div>

            {/* Products Grid - Wider */}
            <div className="flex-1 w-7xl">
              <Products filters={filters} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}