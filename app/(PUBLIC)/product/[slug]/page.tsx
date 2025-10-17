import { getProductBySlug } from "@/actions/product.actions";
import BreadCrumb from "@/components/global/BreadCrumb";
import ProductImages from "@/components/product/ProductImages";
import ProductRatting from "@/components/product/ProductRatting";
import ProductReviews from "@/components/product/ProductReviews";
import SimmilarProducts from "@/components/product/SimmilarProducts";
import ProductsGridLoader from "@/components/ui/layout/ProductsGridLoader";
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
    <main className="flex-1 mt-16 max-w-7xl w-full py-4 ssm:py-8 px-4 ssm:px-8 mx-auto">
      <BreadCrumb />
      <div className="flex max-md:flex-col gap-4 sm:gap-16 items-start mt-5">
        <ProductImages images={product.images} productName={product.name} />
        <div className="w-full md:w-1/2">
          {product.category && (
            <div className="border text-sm max-w-max border-gray-100 text-gray-700 bg-gray-50 px-3 py-1 rounded-full">
              {product.category.name}
            </div>
          )}
          <h1 className="text-2xl xsm:text-3xl font-bold mt-2 mb-4">{product.name}</h1>
          <ProductRatting rating={3} />
          <div className="text-3xl font-semibold text-gold my-4">
            £{product.price}
          </div>
          <button className="bg-gold text-white px-3 py-1.5 xsm:px-6 xsm:py-3 rounded-md hover:bg-yellow-600 transition">
            Add to Cart
          </button>{" "}
          <p className="font-semibold text-lg mt-4">About this product</p>
          <p className="text-gray-700 mb-6">
            {product.description || "No description available."}
          </p>
        </div>
      </div>

      <div className="my-8 border-t border-gray-200">
        <h2 className="mb-4 mt-4 text-xl xsm:text-2xl font-semibold text-amber-600">
          Product Reviews
        </h2>
        <ProductReviews reviews={product.reviews} />
      </div>

      <h1 className="mb-4 mt-16 text-xl xsm:text-2xl font-semibold text-amber-600">
        Explore simmilar products
      </h1>
      <Suspense fallback={<ProductsGridLoader />}>
        <SimmilarProducts product={product} />
      </Suspense>
    </main>
  );
};

export default ProductDetailsPage;
