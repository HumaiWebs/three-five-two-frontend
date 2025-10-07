'use client';

import Image from 'next/image';

export default function RecentProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Double Enriched Blazar",
      price: "53.00 ",
      image: "/double-enriched-blazar.png"
    },
    {
      id: 2,
      name: "Retro Style Blazar",
      price: "58.00 ",
      image: "/retro-style-blazar.png"
    },
    {
      id: 3,
      name: "Fashion Fluid Business Blazar",
      price: "68.00 ",
      image: "/double-enriched-blazar.png"
    },
    {
      id: 4,
      name: "Double Breasted Blazer",
      price: "$8.00 ",
      image: "/retro-style-blazar.png"
    },
    {
      id: 5,
      name: "Wedding Style Blazer",
      price: "$8.00 ",
      image: "/double-enriched-blazar.png"
    },
    {
      id: 6,
      name: "Fashion Plaid Business Blazer",
      price: "$8.00",
      image: "/retro-style-blazar.png"
    }
  ];

  return (
    <section className="relative bg-black text-white py-20 px-8" style={{
      backgroundImage: "url('/product-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}>
      {/* Background Overlay - This covers the background only */}
      <div className="absolute inset-0 bg-black/80"></div>
   
      {/* Content Container - This needs to be above the overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
              <p className="text-gold text-lg italic ">Explore Our Signature Collections</p>
            <div className="w-28 h-px bg-gold mx-auto  mb-5"></div>
          <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
          Enduringly Stylish Materials
          </h2>
        
     
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-6"
            >
              {/* Product Image */}
              <div className="relative h-72 lg:h-96 mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Minimal Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Product Info - Minimalist Style */}
              <div className="text-center space-y-3">
                <h3 className="text-lg font-light tracking-wide border-b border-gray-700 pb-3 group-hover:border-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gold text-lg font-light">£{product.price}</p>
                
                {/* Minimal CTA */}
                <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-gold border border-gold px-4 py-2 text-sm tracking-widest hover:bg-gold hover:text-black">
                  SELECT OPTIONS
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-colors duration-300">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
}