import DeleteResource from "@/components/global/DeleteResource";
import EditResourceLink from "@/components/global/EditResourceLink";
import Loader from "@/components/global/Loader";
import { Product } from "@/types/product";
import React from "react";
import { PiCheck, PiXCircle } from "react-icons/pi";

type Props = {
  products: Product[];
  isLoading: boolean;
};

const ProductsTable = ({ products, isLoading }: Props) => {
  return (
    <div className="flex-1 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-2 text-lg  text-left font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Image
              </span>
            </th>
            <th className="px-4 py-2 text-lg text-left font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Name
              </span>
            </th>
            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Price
              </span>
            </th>
            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Category
              </span>
            </th>
            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Quantity
              </span>
            </th>
            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Featured
              </span>
            </th>
            <th className="px-4 py-2 text-lg font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Created At
              </span>
            </th>
            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-white text-gray-800 px-2 py-1 rounded-md">
                Actions
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="px-4 py-2 text-center">
                <Loader message="Loading products..." />
              </td>
            </tr>
          ) : products && products.length > 0 ? (
            products.map((product) => (
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
                  <div className="p-2 font-semibold text-base px-3 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    {product.name}
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    {product.category ? (
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 font-semibold">
                        {product.category?.name}
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-800 font-semibold">
                        N/A
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    <span className="px-2 py-1 rounded-full border border-gray-800 bg-gray-100 text-gray-800 font-semibold">
                      {product.quantity}
                    </span>
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="bg-white/60 justify-center backdrop-blur-md text-center border-y border-y-white/40 p-2 h-20 flex items-center">
                    {product.featured ? (
                      <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full text-green-600 font-semibold">
                        <PiCheck />
                        Yes
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-500 bg-red-100 px-2 py-1 rounded-full font-semibold">
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
                      endpoint="/product"
                      queryKeyToInvalidate="products_admin"
                    />
                    <EditResourceLink
                      link={`/admin/add-product?id=${product._id}`}
                    />
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
  );
};

export default ProductsTable;
