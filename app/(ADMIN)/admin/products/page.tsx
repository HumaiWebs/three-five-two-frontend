"use client";
import ProductsTable from "@/components/admin/products/ProductsTable";
import { Input } from "@/components/ui/input";
import { http } from "@/lib/httpClient";
import { GetPagedResponse, Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useDebounceValue } from "usehooks-ts";

const AllProductsPage = () => {
  const [queryInput, setQueryInput] = useState("");
  const [query, setDebouncedQuery] = useDebounceValue(queryInput, 500);

  const { data, isFetching } = useQuery<GetPagedResponse<Product>>({
    queryKey: ["products_admin", query],
    queryFn: async () => {
      return (await http.get(`product?page=1&limit=10&search=${query}`)).data;
    },
  });
  return (
    <>
      <div className="pb-2 border-b mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Products</h2>
      </div>
      <div className="mb-4">
        <Input
          value={queryInput}
          onChange={(e) => {
            setQueryInput(e.target.value);
            setDebouncedQuery(e.target.value);
          }}
          placeholder="Search products..."
        />
      </div>
      <ProductsTable products={data?.items || []} isLoading={isFetching} />
    </>
  );
};

export default AllProductsPage;
