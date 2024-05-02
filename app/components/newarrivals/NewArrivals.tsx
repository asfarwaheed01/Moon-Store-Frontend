"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "../bestsellers/product.type";
import Container from "../Container";
import ProductDisplay from "../productdisplay/productdisplay";
import { BASE_URL } from "@/app/config/config";

const fetchProducts = async () => {
  const response = await axios.get<Product[]>(`${BASE_URL}products`);
  return response.data;
};

const NewArrivals = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products1"],
    queryFn: fetchProducts,
    refetchInterval: Infinity,
  });

  return (
    <section className="py-[5%]">
      <Container>
        {products && products.length && (
          <ProductDisplay
            heading="New Arrivals"
            products={products.slice(4, 8)}
          />
        )}
      </Container>
    </section>
  );
};

export default NewArrivals;
