'use client';

import { useState, useMemo } from "react";
import Products from "@/components/ui/layout/Products";
import ShopFilter from "@/components/ui/layout/ShopFilter";
import CommonHeader from "@/components/ui/layout/CommonHeader";

export default function ShopPage() {
  const [filters, setFilters] = useState<{
    minPrice: string | number;
    maxPrice: string | number;
    types: string[];
    collections: string[];
    colors: string[];
    fabrics: string[];
  }>({
    minPrice: "",
    maxPrice: "",
    types: [],
    collections: [],
    colors: [],
    fabrics: [],
  });

  const productsBackgroundStyle = useMemo(
    () => ({
      backgroundImage: "url('/product-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }),
    []
  );

  return (
    <main className="bg-black">
      {/* ✅ Reusable Header */}
      <CommonHeader
        title="Shop"
        subtitle="Where Heritage Meets Modern Precision"
        description="Born from a pursuit of perfection, Three Five Two is a symbol of balance — three for design, five for craftsmanship, two for individuality. We believe luxury is not loud; it’s felt in every thread, every finish, every fit."
        backgroundImage="/luxuary-clothes.jpg"
        breadcrumbs={["Home", "Shop"]}
      />

      {/* ✅ Filter + Products Section */}
      <section
        className="relative text-white lg:py-24"
        style={productsBackgroundStyle}
      >
        <div className="absolute inset-0 bg-black/95 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
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

          {/* Layout */}
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Filter */}
            <div className="lg:max-w-3xl">
              <ShopFilter filters={filters} onFilterChange={setFilters} />
            </div>

            {/* Products */}
            <div className="flex-1 w-7xl">
              <Products filters={filters} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
