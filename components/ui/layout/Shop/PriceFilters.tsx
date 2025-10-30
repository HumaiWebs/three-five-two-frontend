"use client";
import React from "react";
import { Button } from "../../button";
import { useRouter, useSearchParams } from "next/navigation";
import { PiArrowCounterClockwise } from "react-icons/pi";
import toast from "react-hot-toast";

const PriceFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [prices, setPrices] = React.useState({ min: "", max: "" });

  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const filtersApplied = priceMin !== null || priceMax !== null;

  function handleApply() {
    const maxPrice = prices.max ? parseFloat(prices.max) : null;
    const minPrice = prices.min ? parseFloat(prices.min) : null;

    if (maxPrice && minPrice && maxPrice < minPrice) {
      toast.error("Max price cannot be less than Min price");
      return;
    }

    if (minPrice || maxPrice) {
      const params = new URLSearchParams();
      if (minPrice) params.set("priceMin", minPrice.toString());
      if (maxPrice) params.set("priceMax", maxPrice.toString());
      router.push(`/shop?${params.toString()}`);
    }
  }

  function clearFilters() {
    router.push("/shop");
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Filter By Price</h3>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          placeholder="Min"
          value={prices.min}
          onChange={(e) => setPrices({ ...prices, min: e.target.value })}
          className="w-1/2 p-2 border border-gray-600 bg-black text-white"
        />
        <input
          type="number"
          value={prices.max}
          onChange={(e) => setPrices({ ...prices, max: e.target.value })}
          placeholder="Max"
          className="w-1/2 p-2 border border-gray-600 bg-black text-white"
        />
        <Button
          onClick={handleApply}
          className="bg-gold text-white rounded-none hover:bg-gold/80"
        >
          Apply
        </Button>
        {filtersApplied ? (
          <Button
            onClick={clearFilters}
            className="bg-gold text-white rounded-none hover:bg-gold/80"
          >
            <PiArrowCounterClockwise />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default PriceFilters;
