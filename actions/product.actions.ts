import { baseURL } from "@/lib/httpClient";
import { GetPagedResponse, Product } from "@/types/product";

export async function getFeaturedProducts(): Promise<GetPagedResponse<Product> | null> {
  const response = await fetch(
    `${baseURL}/product?featured=true&limit=6&page=1`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    console.log("Failed to fetch featured products");
    return null;
  }
  return response.json();
}
