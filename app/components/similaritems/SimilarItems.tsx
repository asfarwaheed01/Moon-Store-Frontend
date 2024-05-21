"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "../bestsellers/product.type";
import Container from "../Container";
import { BASE_URL } from "@/app/config/config";
import ProductCard from "../productcard/ProductCard";

const fetchProducts = async () => {
  const response = await axios.get<Product[]>(`${BASE_URL}products`);
  return response.data.slice(0, 4);
};

const SimilarItems = () => {
  const { data: products } = useQuery({
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
          <div className="pl-3 md:pl-0 flex gap-[1.2rem] lg:items-center lg:justify-between overflow-x-auto">
            {products &&
              products.map((product) => (
                <ProductCard product={product} className="min-w-[260px]" />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SimilarItems;
