"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/app/utils/product";
import Container from "../Container";
import ProductDisplay from "../productdisplay/productdisplay";

const fetchProducts = async () => {
  const response = await axios.get<Product[]>("http://localhost:8000/products");
  return response.data.slice(0, 8);
};
const BestSellers = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchInterval: Infinity,
    // staleTime: 1000,
  });
  return (
    <section className="py-[5%]">
      <Container>
        {products && products.length && (
          <ProductDisplay
            heading="Best Sellers"
            products={products.slice(0, 8)}
          />
        )}
      </Container>
    </section>
  );
};

export default BestSellers;
