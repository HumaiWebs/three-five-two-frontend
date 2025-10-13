import { Category } from "@/types/product";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  categories?: Category[];
  setCategory: (categoryId: string) => void;
  selectedCategoryId?: string;
  isLoading?: boolean;
};

const SelectCategory = ({
  categories,
  setCategory,
  selectedCategoryId,
  isLoading = false,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find selected category name when selectedCategoryId changes
  useEffect(() => {
    if (selectedCategoryId && categories) {
      const category = categories.find((cat) => cat._id === selectedCategoryId);
      if (category) {
        setSelectedCategoryName(category.name);
        setSearchTerm(category.name);
      }
    } else {
      setSelectedCategoryName("");
      setSearchTerm("");
    }
  }, [selectedCategoryId, categories]);

  // Filter categories based on search term
  const filteredCategories =
    categories?.filter((category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(true);

    // Clear selection if input doesn't match any category
    if (
      !value ||
      !categories?.find((cat) => cat.name.toLowerCase() === value.toLowerCase())
    ) {
      setCategory("");
      setSelectedCategoryName("");
    }
  };

  // Handle category selection
  const handleCategorySelect = (category: Category) => {
    setCategory(category._id);
    setSelectedCategoryName(category.name);
    setSearchTerm(category.name);
    setIsDropdownOpen(false);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        type="text"
        id="category"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(true)}
        placeholder={
          isLoading ? "Loading categories..." : "Search categories..."
        }
        disabled={isLoading}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isDropdownOpen && !isLoading && filteredCategories.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredCategories.map((category) => (
            <div
              key={category._id}
              onClick={() => handleCategorySelect(category)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedCategoryId === category._id
                  ? "bg-blue-50 text-blue-600"
                  : ""
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>
      )}

      {isDropdownOpen &&
        !isLoading &&
        searchTerm &&
        filteredCategories.length === 0 && (
          <div
            ref={dropdownRef}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <div className="px-3 py-2 text-gray-500 text-sm">
              No categories found matching "{searchTerm}"
            </div>
          </div>
        )}
    </div>
  );
};

export default SelectCategory;
