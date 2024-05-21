import React from "react";
import { Product } from "@/app/utils/product";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../productcard/ProductCard";
import { api } from "@/app/hooks/api";

const fetchProducts = async () => {
  const response = await api.get<Product[]>("products");
  return response.data;
};

const ProductsList = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchInterval: 5000,
    staleTime: 1000,
  });
  return (
    <div className="flex flex-wrap justify-between gap-1 mx-2 md:mx-0">
      {products &&
        products.map((product) => (
          <ProductCard product={product} className="md:w-[30%]" />
        ))}
    </div>
  );
};

export default ProductsList;
