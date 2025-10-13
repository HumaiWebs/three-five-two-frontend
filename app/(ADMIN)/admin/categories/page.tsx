import AllCategories from "@/components/admin/categories/AllCategories";
import Header from "@/components/admin/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Categories - Admin",
  description: "Manage categories in the admin panel",
};

const CategoriesPage = () => {
  return (
    <>
      <Header title="All Categories" />
      <AllCategories />
    </>
  );
};

export default CategoriesPage;
