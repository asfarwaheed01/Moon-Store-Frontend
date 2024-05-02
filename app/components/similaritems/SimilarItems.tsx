"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "../bestsellers/product.type";
import Container from "../Container";
import ProductDisplay from "../productdisplay/productdisplay";
import { BASE_URL } from "@/app/config/config";
import ProductCard from "../productcard/ProductCard";

const fetchProducts = async () => {
  const response = await axios.get<Product[]>(`${BASE_URL}products`);
  return response.data.slice(0, 4);
};

const SimilarItems = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products3"],
    queryFn: fetchProducts,
    refetchInterval: Infinity,
  });

  return (
    <section className="py-[5%]">
      <Container>
        <div>
          <h1 className="text-[1.9rem] text-left text-[#3A3845] font-bold font-garamond mb-8 ml-[2%] md:ml-0">
            Similar Items
          </h1>
          <div className="flex flex-wrap justify-between gap-1 mx-4 md:mx-0">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SimilarItems;
