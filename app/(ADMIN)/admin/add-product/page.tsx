import Backbutton from "@/components/admin/Backbutton";
import Header from "@/components/admin/Header";
import AddProductForm from "@/components/admin/products/AddProductForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Product - Admin Panel",
};

const AddProductPage = () => {
  return (
    <>
      <Header title="Add new product" />
      <AddProductForm />
    </>
  );
};

export default AddProductPage;
