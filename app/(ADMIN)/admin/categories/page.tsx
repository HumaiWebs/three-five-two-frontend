
import AllCategories from '@/components/admin/categories/AllCategories';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Categories - Admin",
  description: "Manage categories in the admin panel",
};

const CategoriesPage = () => {
  return (
    <AllCategories />
  )
}

export default CategoriesPage
