import { getCategories } from "@/actions/category.actions";
import { Category } from "@/types/product";
import FilterItem from "./Shop/FilterItem";
import { Button } from "../button";
import PriceFilters from "./Shop/PriceFilters";

type ShopFilterProps = {};

export default async function ShopFilter({}: ShopFilterProps) {
  const categories = await getCategories();

  // group by parent category
  const groupedCategories = categories.items.reduce((acc, category) => {
    const parentId = category.parent ? category.parent.name : "root";
    if (!acc[parentId]) {
      acc[parentId] = [];
    }
    acc[parentId].push(category);
    return acc;
  }, {} as Record<string, Category[]>);

  return (
    <aside className="w-full lg:w-[300px] p-4 bg-black/80 text-white border border-gray-700">
      {/* Price Filter */}
      <PriceFilters />

      {Object.entries(groupedCategories).map(([parent, cats]) => {
        return (
          parent !== "root" && (
            <div key={parent} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {parent === "root" ? "Categories" : parent}
              </h3>
              <ul className="space-y-1">
                {cats.map((category) => (
                  <FilterItem key={category._id} category={category} />
                ))}
              </ul>
            </div>
          )
        );
      })}
    </aside>
  );
}
