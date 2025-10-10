"use client";
import DeleteProductButton from "@/components/admin/products/DeleteProductButton";
import DeleteResource from "@/components/global/DeleteResource";
import EditResourceLink from "@/components/global/EditResourceLink";
import Loader from "@/components/global/Loader";
import { http } from "@/lib/httpClient";
import { GetPagedResponse, Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { PiCheck, PiPencilBold, PiXCircle } from "react-icons/pi";

const AllProductsPage = () => {
  const { data, isFetching } = useQuery<GetPagedResponse<Product>>({
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
      <div className="flex-1 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-2 py-2 text-lg text-left font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Image
                </span>
              </th>
              <th className="px-4 py-2 text-lg text-left font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Name
                </span>
              </th>
              <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Price
                </span>
              </th>
              <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Category
                </span>
              </th>
              <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Quantity
                </span>
              </th>
              <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Featured
                </span>
              </th>
              <th className="px-4 py-2 text-lg font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Created At
                </span>
              </th>
              <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  Actions
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center">
                  <Loader message="Loading products..." />
                </td>
              </tr>
            ) : data && data.items.length > 0 ? (
              data.items.map((product) => (
                <tr key={product._id} className="h-24">
                  <td className="py-2 text-sm text-gray-700">
                    <div className="rounded-l-md bg-white/60 backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                      <img
                        className="object-cover max-h-[80px] rounded-md"
                        src={product.images[0].url}
                        width={80}
                        height={80}
                      />
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                      {product.name}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                      ${product.price.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                      {product.category}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                      {product.quantity}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="bg-white/60 justify-center backdrop-blur-md text-center border-y border-y-white/40 p-2 h-20 flex items-center">
                      {product.featured ? (
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <PiCheck />
                          Yes
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-500 font-semibold">
                          <PiXCircle />
                          No
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="rounded-r-md text-center justify-center bg-white/60 backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                      {new Date(product.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-2 text-sm text-gray-700">
                    <div className="rounded-r-md bg-white/60 text-center justify-center backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                      <DeleteResource
                        resourceName={product.name}
                        resourceId={product._id}
                        endpoint="/api/products"
                        queryKeyToInvalidate="products_admin"
                      />
                      <EditResourceLink link={`/admin/add-product?id=${product._id}`} />
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
