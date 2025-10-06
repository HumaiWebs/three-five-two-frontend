import AddProductForm from "@/components/admin/products/AddProductForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Product - Admin Panel",
};

const AddProductPage = () => {
  return (
    <>
      <div className="pb-2 border-b mb-4 border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800">
          Add new product
        </h2>
      </div>
      <AddProductForm />
    </>
  );
};

export default AddProductPage;
