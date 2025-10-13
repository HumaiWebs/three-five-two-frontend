import { getSimmilarProducts } from '@/actions/product.actions';
import { Product } from '@/types/product';
import React from 'react'
import ProductsGrid from '../global/ProductsGrid';
type Props = {
    product:Product
}
const SimmilarProducts = async ({ product }: Props) => {
    const simmilarProducts = await getSimmilarProducts(
    product?._id || "",
    (product?.category as { _id: string })?._id || "",
    product?.name || ""
  );

  return simmilarProducts && (
    <ProductsGrid products={simmilarProducts.items} />
  )
}

export default SimmilarProducts