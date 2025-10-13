import { Product } from '@/types/product'
import Link from 'next/dist/client/link'
import React from 'react'
import Image from 'next/image'

type Props = {
    products: Product[]
}

const ProductsGrid = ({ products }: Props) => {
  return (  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="group relative bg-transparent border border-gray-700 hover:border-gold transition-all duration-300 p-6"
        >
          {/* Product Image */}
        
          <Link href={`/product/${product.slug}`}>
            <div className="relative h-72 lg:h-96 mb-6 overflow-hidden">
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
              <h3 className="text-lg font-light tracking-wide border-b border-gray-700 pb-3 group-hover:border-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gold text-lg font-light">£{product.price}</p>

              {/* Minimal CTA */}
              <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-gold border border-gold px-4 py-2 text-sm tracking-widest hover:bg-gold hover:text-black">
                SELECT OPTIONS
              </button>
            </div>
          </Link>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-gray-700 group-hover:border-gold transition-colors duration-300"></div>
        </div>
      ))}
    </div>
 
  )
}

export default ProductsGrid