import { Product } from "@/types/product";
import Link from "next/dist/client/link";
import React from "react";
import Image from "next/image";

type Props = {
  products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="group relative bg-transparent border border-gray-200 rounded-md hover:border-gold transition-all duration-300 p-2 md:p-4"
        >
          {/* Product Image */}

          <Link href={`/product/${product.slug}`}>
            <div className="relative rounded-md h-32 sm:h-52 md:h-36 mb-6 overflow-hidden">
              <Image
                src={product.images[0]?.url || ""}
                alt={product.name}
                width={400}
                height={400}
                placeholder="blur"
                blurDataURL={product.images[0]?.url || ""}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Minimal Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          </Link>

          {/* Product Info - Minimalist Style */}
          <Link href={`product/${product.slug}`}>
            <div className="text-center space-y-3">
              <h3 className="text-lg font-light tracking-wide border-b border-gray-200 pb-3 group-hover:border-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gold text-lg font-semibold">£{product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
