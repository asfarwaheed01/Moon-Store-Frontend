"use client";
import axios from "axios";
import React from "react";
import Product from "../components/bestsellers/product.type";
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import Link from "next/link";
import { categories, colors, prices, tags } from "./shopdata";
import { InputLabel, NativeSelect, Pagination } from "@mui/material";
import ProductsList from "../components/productslist/ProductsList";
import Filters from "./components/Filters";

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
        <div className="shop-links mb-[2%]">
          <p className="text-[#807F86] text-[0.875rem]">
            <Link href="/">Home</Link>
            <span className="mx-1">/</span>Shop
          </p>
        </div>
        <div className="products-length relative">
          <div className="flex justify-between">
            <div className="w-[20%]">
              <p className="text-[#374151] text-[1rem] font-sans pb-4">
                <span className="font-semibold">Showing:</span>
                <span className="mx-1">{products?.length}</span>
                <span>items</span>
              </p>
              <div className="md:block hidden">
                <p className="w-[100%] border-b-[1px] border-[#807F86]"></p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                className="text-[#3A3845] text-[0.875rem]"
              >
                Sort by:
              </InputLabel>
              <NativeSelect
                defaultValue="name"
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
                sx={{
                  ":hover": { border: "none" },
                  ":focus": { border: "none" },
                  width: "120px",
                  fontSize: "14px",
                }}
              >
                <option value={10}>name</option>
                <option value={20}>price</option>
                <option value={30}>category</option>
              </NativeSelect>
            </div>
          </div>
        </div>
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
