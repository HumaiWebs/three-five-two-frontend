import {
  getProductBySlug,
  getSimmilarProducts,
} from "@/actions/product.actions";
import SimmilarProducts from "@/components/product/SimmilarProducts";
import FeaturedProductsGrid from "@/components/ui/layout/FeaturedProductsGrid";
import ProductsGridLoader from "@/components/ui/layout/ProductsGridLoader";
import Image from "next/image";
import React, { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

const ProductDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="flex-1 mt-16 max-w-7xl w-full px-8 mx-auto">
        Product not found.
      </div>
    );
  }

  return (
    <main className="flex-1 mt-16 max-w-7xl w-full py-8 px-8 mx-auto">
      <div className="flex gap-12 items-center mt-5">
        <div className="border border-gray-100 w-1/2 bg-gray-50 flex justify-center items-center p-4 rounded-md">
          <Image
            src={`${product.images?.[0]?.url || "/placeholder.png"}`}
            className="rounded-md"
            alt={`Product image for ${product.name}`}
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">
            {product.description || "No description available."}
          </p>
          <div className="text-2xl font-semibold text-gold mb-4">
            {product.price}
          </div>
          <button className="bg-gold text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="mb-4 mt-16 text-2xl font-semibold text-amber-600">
        Explore simmilar products
      </h1>
      <Suspense fallback={<ProductsGridLoader />}>
        <SimmilarProducts product={product} />
      </Suspense>
    </main>
  );
};

export default ProductDetailsPage;
