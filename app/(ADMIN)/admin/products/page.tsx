"use client";
import { http } from "@/lib/httpClient";
import { GetProductsResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllProductsPage = () => {
  const { data, isFetching } = useQuery<GetProductsResponse>({
    queryKey: ["products_admin"],
    queryFn: async () => {
      return (await http.get("product?page=1&limit=10")).data;
    },
  });
  return (
    <>
      <div className="pb-2 border-b mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Products</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2  text-left text-sm font-medium text-gray-700">
                Image
              </th>
              <th className="px-4 py-2  text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-2  text-left text-sm font-medium text-gray-700">
                Price
              </th>
              <th className="px-4 py-2  text-left text-sm font-medium text-gray-700">
                Category
              </th>
              <th className="px-4 py-2  text-left text-sm font-medium text-gray-700">
                Quantity
              </th>
              <th className="px-4 py-2  text-left text-sm font-medium text-gray-700">
                Featured
              </th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center">
                  Loading...
                </td>
              </tr>
            ) : data && data.products.length > 0 ? (
              data.products.map((product) => (
                <tr key={product._id} className="h-24">
                  <td className="py-2 text-sm text-gray-700">
                    <div className="rounded-l-md bg-white/60 backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                      <img
                        className="object-cover rounded-md"
                        src={product.images[0].url}
                        width={80}
                        height={80}
                      />
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="p-2 bg-white/60 backdrop-blur-md border-y border-y-white/40 h-20 flex items-center">
                      {product.name}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="p-2 bg-white/60 backdrop-blur-md border-y border-y-white/40 h-20 flex items-center">
                      ${product.price.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-2  text-sm text-gray-700">
                    <div className="p-2 bg-white/60 backdrop-blur-md border-y border-y-white/40 h-20 flex items-center">
                      {product.category}
                    </div>
                  </td>
                  <td className="py-2  text-sm text-gray-700">
                    <div className="p-2 bg-white/60 backdrop-blur-md border-y border-y-white/40 h-20 flex items-center">
                      {product.quantity}
                    </div>
                  </td>
                  <td className="py-2  text-sm text-gray-700">
                    <div className="rounded-r-md bg-white/60 backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                      {product.featured ? "Yes" : "No"}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProductsPage;
