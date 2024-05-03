"use client";
import axios from "axios";
import React from "react";
import Product from "../components/bestsellers/product.type";
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import { Pagination } from "@mui/material";
import ProductsList from "../components/productslist/ProductsList";
import Filters from "./components/Filters";
import ShopHeader from "./components/ShopHeader";

const fetchProducts = async () => {
  const response = await axios.get<Product[]>("http://localhost:8000/products");
  return response.data;
};

const Page = () => {
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
    <section>
      <Container>
        <ShopHeader products={products} />
        <div className="md:flex gap-20">
          <div className="w-[20%] md:block hidden">
            <Filters />
          </div>
          <div className="md:w-[80%]">
            <ProductsList />
            <div className="flex md:float-right justify-center mx-auto my-4">
              <Pagination count={4} variant="outlined" shape="rounded" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
