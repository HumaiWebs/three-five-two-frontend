import { baseURL } from "@/lib/httpClient";
import { Category, GetPagedResponse } from "@/types/product";

export async function getCategories(): Promise<GetPagedResponse<Category>> {
  try {
    const response = await fetch(`${baseURL}/category`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { success: false, page: 0, pages: 0, items: [], total: 0 };
  }
}
