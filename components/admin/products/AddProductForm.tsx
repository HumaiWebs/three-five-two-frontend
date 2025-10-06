"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addProductSchema,
  type AddProductSchema,
} from "../../../zod/add-product-schema";
import FormError from "../../global/FormError";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmit = async (data: AddProductSchema) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      reset();
      // Handle success (e.g., show success message, redirect)
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-1">
          Product Name
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
        <Label htmlFor="price" className="block text-sm font-medium mb-1">
          Price
        </Label>
        <Input
          {...register("price", { valueAsNumber: true })}
          type="number"
          step="0.01"
          min="0"
          id="price"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError message={errors.price?.message} />
      </div>

      <div>
        <Label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </Label>
        <Input
          {...register("category")}
          type="text"
          id="category"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError message={errors.category?.message} />
      </div>

      <div>
        <Label htmlFor="quantity" className="block text-sm font-medium mb-1">
          Quantity
        </Label>
        <Input
          {...register("quantity", { valueAsNumber: true })}
          type="number"
          min="0"
          id="quantity"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FormError message={errors.quantity?.message} />
      </div>

      <div className="flex items-center">
        <Input
          {...register("featured")}
          type="checkbox"
          id="featured"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <Label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
          Featured Product
        </Label>
      </div>
      <FormError message={errors.featured?.message} />

      {submitError && <FormError message={submitError} />}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Adding Product..." : "Add Product"}
      </Button>
    </form>
  );
};

export default AddProductForm;
