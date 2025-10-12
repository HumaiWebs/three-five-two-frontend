import Image from "next/image";
import FeaturedProductsGrid from "./FeaturedProductsGrid";
import { Suspense } from "react";
import ProductsGridLoader from "./ProductsGridLoader";

export default async function RecentProductShowcase() {
  return (
    <section
      className="relative bg-black text-white py-20 px-8"
      style={{
        backgroundImage: "url('/product-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay - This covers the background only */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content Container - This needs to be above the overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-lg italic ">
            Explore Our Signature Collections
          </p>
          <div className="w-28 h-px bg-gold mx-auto  mb-5"></div>
          <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
            Enduringly Stylish Materials
          </h2>
        </div>

        {/* Products Grid */}

        <Suspense fallback={<ProductsGridLoader />}>
          <FeaturedProductsGrid />
        </Suspense>

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
