'use client';

type ShopFilterProps = {
  filters: {
    minPrice: number | string;
    maxPrice: number | string;
    types: string[];
    collections: string[];
  };
  onFilterChange: (filters: {
    minPrice: number | string;
    maxPrice: number | string;
    types: string[];
    collections: string[];
  }) => void;
};

export default function ShopFilter({ filters, onFilterChange }: ShopFilterProps) {
  return (
    <aside className="w-full lg:w-64 p-4 bg-black/80 text-white border border-gray-700">
      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Filter By Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 p-2 border border-gray-600 bg-black text-white"
            value={filters.minPrice}
            onChange={(e) => onFilterChange({ ...filters, minPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 p-2 border border-gray-600 bg-black text-white"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: e.target.value })}
          />
        </div>
      </div>

      {/* Product Type Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Product Type</h3>
        <ul className="space-y-1">
          {["Pink", "Purple", "Red", "Yellow"].map((type) => (
            <li key={type}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.types.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...filters.types, type]
                      : filters.types.filter((t) => t !== type);
                    onFilterChange({ ...filters, types: newTypes });
                  }}
                  className="accent-gold"
                />
                <span>{type}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Collections Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Collections</h3>
        <ul className="space-y-1 max-h-60 overflow-y-auto">
          {[
            "Blazer", "Bracelet", "Earrings", "Gym Bags", "Gym Equipments",
            "Gym Products", "Gym Shoes", "Jewellery", "Leggings", "Men Watch",
            "Neck Chain", "Ring", "Sports", "Top Wear", "Uncategorized",
            "Unisex Luxury Watches", "Watches", "Women Watch"
          ].map((collection) => (
            <li key={collection}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.collections.includes(collection)}
                  onChange={(e) => {
                    const newCollections = e.target.checked
                      ? [...filters.collections, collection]
                      : filters.collections.filter((c) => c !== collection);
                    onFilterChange({ ...filters, collections: newCollections });
                  }}
                  className="accent-gold"
                />
                <span>{collection}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
