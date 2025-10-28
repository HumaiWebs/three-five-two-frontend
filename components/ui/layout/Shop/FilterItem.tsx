"use client";

import { Category } from "@/types/product";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { PiCheckCircle, PiCheckCircleFill, PiCircle } from "react-icons/pi";
type Props = {
  category: Category;
};
const FilterItem = ({ category }: Props) => {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.getAll("category");
  const router = useRouter();

  const isChecked = (slug: string) => categoryParams.includes(slug);

  const handleCheckboxChange = (slug: string) => {
    if (isChecked(slug)) {
      const newParams = categoryParams.filter((param) => param !== slug);
      router.push(
        `/shop?${newParams.map((param) => `category=${param}`).join("&")}`
      );
    } else {
      router.push(
        `/shop?${categoryParams
          .map((param) => `category=${param}`)
          .join("&")}&category=${slug}`
      );
    }
  };

  return (
    <li key={category._id} id="filter-list">
      <label className="flex items-center space-x-2 cursor-pointer group">
        <input
          onChange={() => handleCheckboxChange(category.slug)}
          type="checkbox"
          checked={isChecked(category.slug)}
          className="accent-gold hidden"
        />
        {isChecked(category.slug) ? (
          <PiCheckCircleFill className="text-gold" />
        ) : (
          <PiCircle className="text-gray-500 group-hover:text-gold" />
        )}
        <span>{category.name}</span>
      </label>
    </li>
  );
};

export default FilterItem;
