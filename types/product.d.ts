import { User } from "@/store/AuthProvider";

export type Category = {
  _id: string;
  _id: string;
  name: string;
  description?: string;
  parent?: Category | null;
  level: number;
  slug: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type GetPagedResponse<T> = {
  success: boolean;
  items: T[];
  total: number;
  page: number;
  pages: number;
};

export type ProductReview = {
  _id: string;
  rating: number;
  comment: string;
  user: Partial<User>;
};

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: Partial<Category>;
  quantity: number;
  images: Image[];
  reviews: any[];
  isActive: boolean;
  deleted: boolean;
  featured: boolean;
  reviews: ProductReview[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Image {
  url: string;
  public_id: string;
  deleted?: boolean;
}
