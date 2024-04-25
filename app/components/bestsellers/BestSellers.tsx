"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "./product.type";
import Container from "../Container";

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
    refetchInterval: 5000,
    staleTime: 1000,
  });
  return (
    <section className="py-[5%]">
      <Container>
        <h1 className="text-[1.9rem] text-center text-[#3A3845] font-bold font-garamond mb-8">
          Best Sellers
        </h1>
        <div className="flex flex-wrap justify-between gap-1 mx-2 md:mx-0">
          {products &&
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white md:w-[23%] w-[47%] h-[500px] mb-6 relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-[0.9rem] font-semibold mb-2">
                      {product.name}
                    </h2>
                    <p className="text-black text-[0.9rem] font-semibold mb-3">
                      ${product.price}.00
                    </p>
                    <p className="text-[#807F86] text-[0.88rem] mb-2">
                      {product.description}
                    </p>
                  </div>
                  <button className="absolute bottom-0 text-black border-black border text-center w-[100%] font-bold py-2 px-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default BestSellers;
