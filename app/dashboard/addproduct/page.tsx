"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { BASE_URL } from "@/app/config/config";

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  image: FileList;
}

const AddProductForm: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>();

  const { mutate: addProductMutation } = useMutation({
    mutationFn: (data: ProductFormData) =>
      axios.post(`${BASE_URL}products/addproduct`, data),
    onSuccess: () => {
      alert("Product added successfully!");
      reset();
      setPreviewImage(null);
    },
  });

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    try {
      await addProductMutation(data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setSelectedImage(null);
  };

  return (
    <div className="w-3/4 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold mb-1">
              Name:
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.name && (
              <span className="text-red-500 mt-1">Name is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-lg font-semibold mb-1">
              Description:
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="border border-gray-300 rounded-lg px-4 py-2 resize-none"
            />
            {errors.description && (
              <span className="text-red-500 mt-1">Description is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-lg font-semibold mb-1">
              Price:
            </label>
            <input
              id="price"
              type="number"
              {...register("price", { required: true })}
              step="0.01"
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.price && (
              <span className="text-red-500 mt-1">Price is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-lg font-semibold mb-1">
              Image:
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            {previewImage && (
              <div className="flex items-center space-x-2 mt-2">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!!(errors.name || errors.description || errors.price)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
