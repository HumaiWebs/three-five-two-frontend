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

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const response = await fetch(`${baseURL}/product/slug/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    console.log(`Failed to fetch product with slug: ${slug}`);
    return null;
  }
  return response.json();
}

export async function getSimmilarProducts(
  productId: string,
  categoryId: string,
  name: string
): Promise<GetPagedResponse<Product> | null> {
  const response = await fetch(
    `${baseURL}/product/simmilar/${productId}?category=${categoryId}&name=${encodeURIComponent(name)}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    console.log(`Failed to fetch simmilar products for product ID: ${productId}`);
    return null;
  }
  return response.json();
}