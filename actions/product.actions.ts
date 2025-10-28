import { baseURL } from "@/lib/httpClient";
import { GetPagedResponse, Product } from "@/types/product";

export async function getFeaturedProducts(): Promise<GetPagedResponse<Product> | null> {
  try {
    const response = await fetch(
      `${baseURL}/product?featured=true&limit=6&page=1`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.log("Failed to fetch featured products:", response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch failed for featured products:", error);
    return null;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await fetch(`${baseURL}/product/slug/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.log(
        `Failed to fetch product with slug: ${slug}`,
        response.statusText
      );
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch failed for product slug ${slug}:`, error);
    return null;
  }
}

export async function getSimmilarProducts(
  productId: string,
  categoryId: string,
  name: string
): Promise<GetPagedResponse<Product> | null> {
  try {
    const response = await fetch(
      `${baseURL}/product/simmilar/${productId}?category=${categoryId}&name=${encodeURIComponent(
        name
      )}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.log(
        `Failed to fetch similar products for product ID: ${productId}`,
        response.statusText
      );
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch failed for similar products of ${productId}:`, error);
    return null;
  }
}

async function getShopProducts(
  filters: Record<string, string | number>
): Promise<GetPagedResponse<Product> | null> {
  try {
    const queryParams = new URLSearchParams();
    for (const key in filters) {
      queryParams.append(key, String(filters[key]));
    }

    const response = await fetch(
      `${baseURL}/product?${queryParams.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.log("Failed to fetch shop products:", response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch failed for shop products:", error);
    return null;
  }
}
