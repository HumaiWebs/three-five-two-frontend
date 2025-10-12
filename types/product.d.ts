export type Category = {
  _id: string;
  _id: string;
  name: string;
  description?: string;
  parent?: Category | null;
  level: number;
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
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Image {
  url: string;
  public_id: string;
  deleted?: boolean;
}
