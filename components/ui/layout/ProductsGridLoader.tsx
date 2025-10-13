import React from "react";

const ProductsGridLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-800 h-96 flex flex-col justify-center items-center"
        >
          <div className="bg-gray-700 h-72 w-full mb-6"></div>
          <div className="h-6 bg-gray-700 w-3/4 mb-3"></div>
          <div className="h-6 bg-gray-700 w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGridLoader;
