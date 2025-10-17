import { getSimmilarProducts } from "@/actions/product.actions";
import { Product } from "@/types/product";
import React from "react";
import ProductsGrid from "../global/ProductsGrid";
import Link from "next/link";

type Props = {
  product: Product;
};

const SimmilarProducts = async ({ product }: Props) => {
  const simmilarProducts = await getSimmilarProducts(
    product?._id || "",
    (product?.category as { _id: string })?._id || "",
    product?.name || ""
  );

  return simmilarProducts && simmilarProducts.items.length > 0 ? (
    <ProductsGrid products={simmilarProducts.items} />
  ) : (
    <div className="w-full items-center flex flex-col gap-4">
      <p className="text-gray-400">No similar products found.</p>
      <Link href="/store" className="bg-gold px-3 py-1 rounded-md text-white hover:bg-gold/80">Explore more</Link>
    </div>
  );
};

export default SimmilarProducts;
