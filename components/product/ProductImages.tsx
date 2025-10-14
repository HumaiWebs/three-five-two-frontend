import React from "react";
import Image from "next/image";
import { Image as ProductImage } from "@/types/product";
type Props = {
  images: ProductImage[];
  productName: string;
};

const ProductImages = ({ images, productName }: Props) => {
  return (
    <div className="flex w-1/2 gap-2 items-start">
      <div className="border h-[400px] flex-1 border-gray-100 w-1/2 bg-gray-50 flex justify-center items-center p-4 rounded-md">
        <Image
          src={`${images?.[0]?.url || "/placeholder.png"}`}
          className="rounded-md"
          alt={`Product image for ${productName}`}
          width={400}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        {images.slice(0, 4).map((img, index) => (
          <div
            key={index}
            className="border cursor-pointer hover:border-gray-200 border-gray-100 w-20 h-20 bg-gray-50 flex justify-center items-center p-1 rounded-md"
          >
            <Image
              src={`${img.url || "/placeholder.png"}`}
              className="rounded-md"
              alt={`Thumbnail ${index + 1} for ${productName}`}
              width={60}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
