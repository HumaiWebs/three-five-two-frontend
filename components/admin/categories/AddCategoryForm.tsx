"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    AddCategorySchema,
  addCategorySchema,
} from "../../../zod/add-category-schema";
import FormError from "../../global/FormError";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "@/lib/httpClient";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { queryClient } from "@/store/ClientWrapper";
import SelectCategory from "../products/SelectCategory";
import { Category } from "@/types/product";

const AddCategoryForm = () => {
 
  
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const categoryId = useSearchParams().get("id");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<AddCategorySchema>({
    resolver: zodResolver(addCategorySchema),
  });

  const { mutate, status } = useMutation({
    mutationFn: async (data: AddCategorySchema) => {
      return categoryId
        ? (await http.put(`/category/${categoryId}`, data)).data
        : (await http.post("/category", data)).data;
    },
    onSuccess: (response) => {
      if (response.success) {
        reset();
        if (categoryId) {
          
          queryClient.invalidateQueries({ queryKey: ["category", categoryId] });
        }
        toast.success("Category added successfully");
      } else {
        toast.error(response.message || "Failed to add category");
      }
    },
  });

  const { data: categories, isFetching: fetchingCategories } = useQuery<
    Category[]
  >({
    queryKey: ["categories"],
    queryFn: async () => {
      return (await http.get("/category")).data;
    },
  });

  

   // Set category ID when selected
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setValue("parent", categoryId);
  };

  const { data: categoryDetails, isFetching: fetchingCategoryDetails } =
    useQuery<Category>({
      queryKey: ["category", categoryId],
      queryFn: async () => {
        return (await http.get(`/category/${categoryId}`)).data;
      },
      enabled: !!categoryId,
    });

  useEffect(() => {
    if (categoryDetails && !fetchingCategoryDetails) {
      reset({
        name: categoryDetails.name,
        description: categoryDetails.description,
        
      });
      setSelectedCategoryId(categoryDetails.parent?._id ?? "");
    }
  }, [categoryDetails, fetchingCategoryDetails]);

  const onSubmit = async (data: AddCategorySchema) => {
   
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-1">
          Category Name
        </Label>
        <Input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError message={errors.name?.message} />
      </div>

      <div>
        <Label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </Label>
        <Textarea
          {...register("description")}
          id="description"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError message={errors.description?.message} />
      </div>
      <div>
        <SelectCategory
          categories={categories}
          setCategory={handleCategorySelect}
          selectedCategoryId={selectedCategoryId}
          isLoading={fetchingCategories}
        />
        <FormError message={errors.parent?.message} />
      </div>
      <Button
        type="submit"
        disabled={status === "pending"}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {status === "pending"
          ? "Adding Category..."
          : `${categoryId ? "Save Changes" : "Add Category"}`}
      </Button>
    </form>
  );
};

export default AddCategoryForm;