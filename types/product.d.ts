export type Category = {
  _id: string;
  _id: string;
  name: string;
  parent?: string;
  level: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export interface GetProductsResponse {
    success:  boolean;
    products: Product[];
    total:    number;
    page:     string;
    pages:    number;
}

export interface Product {
    _id:         string;
    name:        string;
    description: string;
    price:       number;
    category:    string;
    quantity:    number;
    images:      Image[];
    reviews:     any[];
    isActive:    boolean;
    deleted:     boolean;
    featured:    boolean;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}

export interface Image {
    url:       string;
    public_id: string;
}

