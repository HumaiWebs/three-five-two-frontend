"use client";
import React from "react";
import { Button } from "../../button";
import { useSearchParams } from "next/navigation";
import { PiArrowCircleDownLeft } from "react-icons/pi";

const PriceFilters = () => {
  const searchParams = useSearchParams();
  const [prices, setPrices] = React.useState({ min: "", max: "" });

  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const filtersApplies = priceMin !== null || priceMax !== null;

  function handleApply() {}

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
        <Button className="bg-gold text-white rounded-none hover:bg-gold/80">
          Apply
        </Button>
        <Button className="bg-gold text-white rounded-none hover:bg-gold/80">
          <PiArrowCircleDownLeft />
        </Button>
      </div>
    </div>
  );
};

export default PriceFilters;
