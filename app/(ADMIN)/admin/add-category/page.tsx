import AddCategoryForm from "@/components/admin/categories/AddCategoryForm";
import Header from "@/components/admin/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Category - Admin",
  description: "Add a new category to the admin panel",
};

const AddCategoryPage = () => {
  return (
    <>
      <Header title="Add new category" />
      <AddCategoryForm />
    </>
  );
};

export default AddCategoryPage;
