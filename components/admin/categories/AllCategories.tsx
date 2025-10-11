"use client";

import Loader from "@/components/global/Loader";
import { Category, GetPagedResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Link from "next/link";
import { PiPencilBold } from "react-icons/pi";
import { http } from "@/lib/httpClient";
import DeleteResource from "@/components/global/DeleteResource";
import EditResourceLink from "@/components/global/EditResourceLink";

const AllCategories = () => {
  const { data, isFetching: fetchingCategories } = useQuery<
    GetPagedResponse<Category>
  >({
    queryKey: ["categories_admin"],
    queryFn: async () => {
      return (await http.get("/category?page=1&limit=10")).data;
    },
  });

  return (
    <div className="flex-1 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-2 py-2 text-lg text-left font-medium text-gray-700">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                Name
              </span>
            </th>

            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                Description
              </span>
            </th>
            <th className="px-4 py-2  text-left text-lg font-medium text-gray-700">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                Parent
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
          {fetchingCategories ? (
            <tr>
              <td colSpan={6} className="px-4 py-2 text-center">
                <Loader message="Loading categories..." />
              </td>
            </tr>
          ) : data && data.items.length > 0 ? (
            data.items.map((category) => (
              <tr key={category._id} className="h-24">
                <td className="py-2 text-sm text-gray-700">
                  <div className="rounded-l-md bg-white/60 backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                    {category.name}
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    {category.description || "N/A"}
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    {category.parent?.name || "N/A"}
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="p-2 justify-center bg-white/60 backdrop-blur-md text-center border-y border-y-white/40 h-20 flex items-center">
                    {new Date(category.createdAt).toLocaleDateString()}
                  </div>
                </td>
                <td className="py-2 text-sm text-gray-700">
                  <div className="rounded-r-md bg-white/60 text-center justify-center backdrop-blur-md border-y border-y-white/40 p-2 h-20 flex items-center">
                    <DeleteResource
                      resourceName={category.name}
                      resourceId={category._id}
                      endpoint="/category"
                      queryKeyToInvalidate="categories_admin"
                      WarningMessage={`Deleting this category will also delete all its subcategories if any. Are you sure you want to proceed?`}
                    />
                    <EditResourceLink
                      link={`/admin/add-category?id=${category._id}`}
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

export default AllCategories;
