import AddCategoryForm from "@/components/admin/categories/AddCategoryForm";
import React from "react";

export const metadata = {
  title: "Add Category - Admin",
  description: "Add a new category to the admin panel",
};

const AddCategoryPage = () => {
  return (
    <>
      <div className="pb-2 border-b mb-4 border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800">
          Add new category
        </h2>
      </div>
      <AddCategoryForm />
    </>
  );
};

export default AddCategoryPage;
