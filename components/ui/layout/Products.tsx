"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/store/CartContext";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

type ProductFilters = {
  minPrice?: string;
  maxPrice?: string;
  types?: string[];
  collections?: string[];
};

export default function Products({ filters = {} as ProductFilters }) {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Double Enriched Blazar",
      price: 53,
      type: "Blazer",
      collection: "Blazer",
      image: "/double-enriched-blazar.png",
    },
    {
      id: 2,
      name: "Retro Style Blazar",
      price: 58,
      type: "Blazer",
      collection: "Blazer",
      image: "/retro-style-blazar.png",
    },
    {
      id: 3,
      name: "Fashion Fluid Business Blazar",
      price: 68,
      type: "Blazer",
      collection: "Blazer",
      image: "/double-enriched-blazar.png",
    },
    {
      id: 4,
      name: "Double Breasted Blazer",
      price: 80,
      type: "Blazer",
      collection: "Blazer",
      image: "/retro-style-blazar.png",
    },
    {
      id: 5,
      name: "Wedding Style Blazer",
      price: 75,
      type: "Blazer",
      collection: "Blazer",
      image: "/double-enriched-blazar.png",
    },
    {
      id: 6,
      name: "Fashion Plaid Business Blazer",
      price: 88,
      type: "Blazer",
      collection: "Blazer",
      image: "/retro-style-blazar.png",
    },
  ];

  // ✅ Apply filters
  const filteredProducts = products.filter((p) => {
    const minPrice = filters.minPrice ? parseFloat(filters.minPrice) : null;
    const maxPrice = filters.maxPrice ? parseFloat(filters.maxPrice) : null;

    const priceCheck =
      (!minPrice || p.price >= minPrice) && (!maxPrice || p.price <= maxPrice);
    const typeCheck =
      !filters.types ||
      filters.types.length === 0 ||
      filters.types.includes(p.type);
    const collectionCheck =
      !filters.collections ||
      filters.collections.length === 0 ||
      filters.collections.includes(p.collection);

    return priceCheck && typeCheck && collectionCheck;
  });

  // ✅ Handle Add to Cart
  const handleAddToCart = (product: any) => {
    addToCart({
      _id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="relative text-white px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-2"
            >
              <div className="relative h-80 lg:h-[28rem] mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-lg font-light tracking-wide border-b border-gray-700 pb-3 group-hover:border-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gold text-lg font-light">£{product.price}</p>

                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="border rounded-none border-gold text-gold bg-transparent hover:bg-gold hover:text-black text-sm tracking-widest"
                  >
                    ADD TO CART
                  </Button>
                  <Button className="border rounded-none border-gray-700 text-gray-400 bg-transparent hover:border-gold hover:text-gold text-sm tracking-widest">
                    VIEW
                  </Button>
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-colors duration-300">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
}
