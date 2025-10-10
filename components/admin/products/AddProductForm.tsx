"use client";
import React, { useEffect, useState } from "react";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "@/lib/httpClient";
import toast from "react-hot-toast";
import { Category, GetPagedResponse, Image, Product } from "@/types/product";
import SelectCategory from "./SelectCategory";
import { useSearchParams } from "next/navigation";
import { PiArrowCounterClockwise, PiXCircleBold } from "react-icons/pi";
import DeleteImageConfirmation from "./DeleteImageConfirmation";
import { queryClient } from "@/store/ClientWrapper";

const AddProductForm = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imageError, setImageError] = useState<string>("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const productId = useSearchParams().get("id");
  const [existingDeletedImages, setExistingDeletedImages] = useState<
    Array<Image & { deleted: boolean }>
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
  });

  const { mutate, status } = useMutation({
    mutationFn: async (data: FormData) => {
      return productId
        ? (await http.put(`/product/${productId}`, data)).data
        : (await http.post("/product", data)).data;
    },
    onSuccess: (response) => {
      if (response.success) {
        reset();
        setSelectedImages([]);
        setImageError("");
        if (productId) {
          setExistingDeletedImages([]);
          queryClient.invalidateQueries({ queryKey: ["product", productId] });
        }
        toast.success("Product added successfully");
      } else {
        toast.error(response.message || "Failed to add product");
      }
    },
  });

  const { data: categories, isFetching: fetchingCategories } = useQuery<
    GetPagedResponse<Category>
  >({
    queryKey: ["categories"],
    queryFn: async () => {
      return (await http.get("/category?page=-1")).data;
    },
  });

  function getTotalExistingImages(numberOfNewlySelectedImage: number) {
    const existingImagesCount =
      productDetails?.images?.filter((img) => !isImageDeleted(img)).length || 0;
    return existingImagesCount + numberOfNewlySelectedImage;
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageError("");

    if (files.length < 1) {
      setImageError("At least 1 image is required");
      setSelectedImages([]);
      return;
    }

    if (getTotalExistingImages(files.length) > 4) {
      toast.error("Maximum 4 images allowed");
      return;
    }

    // Validate file types
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const invalidFiles = files.filter(
      (file) => !validTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      setImageError("Only JPEG, PNG, and WebP images are allowed");
      setSelectedImages([]);
      return;
    }

    setSelectedImages(files);
  };

  const removeImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newImages);

    if (newImages.length < 1) {
      setImageError("At least 1 image is required");
    }
  };

  // Set category ID when selected
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setValue("category", categoryId);
  };

  const { data: productDetails, isFetching: fetchingProductDetails } =
    useQuery<Product>({
      queryKey: ["product", productId],
      queryFn: async () => {
        return (await http.get(`/product/${productId}`)).data;
      },
      enabled: !!productId,
    });

  useEffect(() => {
    if (productDetails && !fetchingProductDetails) {
      reset({
        name: productDetails.name,
        description: productDetails.description,
        price: productDetails.price,
        category: productDetails.category,
        quantity: productDetails.quantity,
        featured: productDetails.featured,
      });
      setSelectedCategoryId(productDetails.category);
    }
  }, [productDetails, fetchingProductDetails]);

  const onSubmit = async (data: AddProductSchema) => {
    // Validate images before submission
    if (
      selectedImages.length +
        (productDetails?.images.filter((img) => !img.deleted).length || 0) <
      1
    ) {
      toast.error("Please select at least 1 image");
      return;
    }

    // Create FormData to handle file uploads
    const formData = new FormData();

    // Append form fields
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    if (productId) {
      formData.append(
        "images",
        JSON.stringify([
          ...(productDetails?.images.filter((img) => !isImageDeleted(img)) ||
            []),
          ...existingDeletedImages,
        ])
      );
    }

    // Append images
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    mutate(formData);
  };

  function removeExistingImage(image: Image) {
    setExistingDeletedImages((prev) => [...prev, { ...image, deleted: true }]);
  }

  function isImageDeleted(image: Image) {
    return existingDeletedImages.some(
      (img) => img.public_id === image.public_id && img.deleted
    );
  }

  function restoreImage(image: Image) {
    setExistingDeletedImages((prev) =>
      prev.filter((img) => img.public_id !== image.public_id)
    );
  }

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
        <Label htmlFor="price" className="block text-sm font-medium mb-1">
          Category
        </Label>
        <SelectCategory
          categories={categories?.items||[]}
          setCategory={handleCategorySelect}
          selectedCategoryId={selectedCategoryId}
          isLoading={fetchingCategories}
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

      <div>
        <Label htmlFor="images" className="block text-sm font-medium mb-1">
          Product Images (1-4 images)
        </Label>
        <Input
          type="file"
          id="images"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1">
          Select 1-4 images (JPEG, PNG, WebP only)
        </p>

        {imageError && <FormError message={imageError} />}
        {productDetails?.images?.length &&
          productDetails?.images.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium mb-2">Existing Images:</p>
              <div className="grid grid-cols-3 gap-2">
                {productDetails.images
                  .filter((img) => !img.deleted)
                  .map((imgUrl, index) => (
                    <div key={index} className="relative">
                      {!isImageDeleted(imgUrl) ? (
                        <DeleteImageConfirmation
                          image={imgUrl}
                          onRemove={(image) => {
                            removeExistingImage(image);
                          }}
                        />
                      ) : (
                        <div className="flex absolute top-2 right-2 gap-2">
                          <div className="px-2 py-1 rounded-full text-sm border border-red-600 bg-red-100 text-red-600">
                            Image Deleted
                          </div>
                          <button
                            className="flex gap-2 text-sm border hover:bg-green-600 hover:text-white transition-colors duration-200 border-green-600 items-center px-2 py-1 rounded-full bg-green-100 text-green-600"
                            onClick={() => restoreImage(imgUrl)}
                          >
                            <PiArrowCounterClockwise className="inline-block mr-1" />
                            <span>Restore</span>
                          </button>
                        </div>
                      )}
                      <img
                        src={imgUrl.url}
                        alt={`Product Image ${index + 1}`}
                        className="w-full h-24 object-contain rounded border"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        {selectedImages.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium mb-2">Selected Images:</p>
            <div className="grid grid-cols-2 gap-2">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded border"
                  />
                  <PiXCircleBold
                    onClick={() => removeImage(index)}
                    className="absolute cursor-pointer hover:scale-105 transition-all duration-200 top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                  />
                  <p className="text-xs text-gray-600 mt-1 truncate">
                    {image.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
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

      <Button
        type="submit"
        disabled={status === "pending"}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {status === "pending"
          ? "Adding Product..."
          : `${productId ? "Save Changes" : "Add Product"}`}
      </Button>
    </form>
  );
};

export default AddProductForm;
