'use client';

type ShopFilterProps = {
  filters: {
    minPrice: number | string;
    maxPrice: number | string;
    types: string[];
    collections: string[];
    colors: string[];
    fabrics: string[];
  };
  onFilterChange: (filters: {
    minPrice: number | string;
    maxPrice: number | string;
    types: string[];
    collections: string[];
    colors: string[];
    fabrics: string[];
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

      {/* Suit Type Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Suit Type</h3>
        <ul className="space-y-1">
          {[
            'Two-Piece Suit',
            'Three-Piece Suit',
            'Tuxedo',
            'Double-Breasted',
            'Slim Fit',
            'Classic Fit',
            'Tailored Fit',
          ].map((type) => (
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
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Collections</h3>
        <ul className="space-y-1">
          {[
            'Wedding Collection',
            'Business Collection',
            'Evening Wear',
            'Designer Series',
            'Luxury Tailor Line',
            'Seasonal Collection',
            'Casual Blazers',
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

      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <ul className="space-y-1">
          {[
            'Black',
            'Navy Blue',
            'Charcoal Gray',
            'Light Gray',
            'Beige',
            'Burgundy',
            'Ivory',
            'White',
            'Midnight Blue',
          ].map((color) => (
            <li key={color}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={(e) => {
                    const newColors = e.target.checked
                      ? [...filters.colors, color]
                      : filters.colors.filter((c) => c !== color);
                    onFilterChange({ ...filters, colors: newColors });
                  }}
                  className="accent-gold"
                />
                <span>{color}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Fabric Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Fabric</h3>
        <ul className="space-y-1">
          {[
            'Wool',
            'Cashmere',
            'Linen',
            'Cotton',
            'Silk Blend',
            'Velvet',
            'Tweed',
            'Polyester Blend',
          ].map((fabric) => (
            <li key={fabric}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.fabrics.includes(fabric)}
                  onChange={(e) => {
                    const newFabrics = e.target.checked
                      ? [...filters.fabrics, fabric]
                      : filters.fabrics.filter((f) => f !== fabric);
                    onFilterChange({ ...filters, fabrics: newFabrics });
                  }}
                  className="accent-gold"
                />
                <span>{fabric}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
