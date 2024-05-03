"use client";
import React, { useState } from "react";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { BASE_URL } from "@/app/config/config";
import ProductCard from "../components/ProductItem";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
}

const fetchProducts = async () => {
  const response = await axios.get<Product[]>(`${BASE_URL}products`);
  return response.data;
};

const deleteProduct = async (id: string) => {
  await axios.delete(`${BASE_URL}products/${id}`);
};

const ProductList: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchInterval: 5000,
  });

  const {
    mutate: deleteProductMutation,
    isPending: mutationLoading,
    error: mutationError,
  } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = async (id: string) => {
    try {
      await deleteProductMutation(id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const openEditModal = (productId: string) => {
    setSelectedProductId(productId);
  };

  const closeEditModal = () => {
    setSelectedProductId(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center md:w-[78%]">
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {products &&
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              handleDelete={handleDelete}
              openEditModal={openEditModal}
            />
          ))}
      </div>
      {/* {selectedProductId && (
        <EditProductModal
          onClose={closeEditModal}
          productId={selectedProductId}
        />
      )} */}
    </>
  );
};

export default ProductList;
