"use client";
import axios from "axios";
import React from "react";
import Product from "../components/bestsellers/product.type";
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import Link from "next/link";
import { categories, colors, prices, tags } from "./shopdata";
import { InputLabel, NativeSelect, Pagination } from "@mui/material";

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
            <div className="flex flex-col">
              <div className="shopcategories py-[5%]">
                <h2 className="text-[#3A3845] text-[0.875rem] font-semibold mb-2">
                  Categories
                </h2>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <label
                      key={category.name}
                      className="text-[#374151] text-[0.875rem]"
                    >
                      <input
                        type="checkbox"
                        name={category.name}
                        className="mr-2"
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
                <div className="py-5">
                  <p className="w-[100%] border-b-[1px] border-[#807F86]"></p>
                </div>
              </div>
              <div className="shopprices">
                <h2 className="text-[#3A3845] text-[0.875rem] font-semibold mb-2">
                  Price Range
                </h2>
                <div className="flex flex-col gap-2">
                  {prices.map((price) => (
                    <label
                      key={price.name}
                      className="text-[#374151] text-[0.875rem]"
                    >
                      <input
                        type="checkbox"
                        name={price.name}
                        className="mr-2"
                      />
                      {price.name}
                    </label>
                  ))}
                </div>
                <div className="py-5">
                  <p className="w-[100%] border-b-[1px] border-[#807F86]"></p>
                </div>
              </div>
              <div className="colors">
                <h2 className="text-[#3A3845] text-[0.875rem] font-semibold mb-2">
                  Colors
                </h2>
                <div className="colordiv flex gap-2">
                  {colors.map((color) => (
                    <Link
                      key={color}
                      href="#"
                      style={{ backgroundColor: color, width: 18, height: 18 }}
                      className="m-1 cursor-pointer border-[#3A3845] border-2"
                    />
                  ))}
                </div>
                <div className="py-5">
                  <p className="w-[100%] border-b-[1px] border-[#807F86]"></p>
                </div>
              </div>
              <div className="shopprices">
                <h2 className="text-[#3A3845] text-[0.875rem] font-semibold mb-2">
                  Tags
                </h2>
                <div className="flex flex-col gap-2">
                  {tags.map((tag) => (
                    <label
                      key={tag.name}
                      className="text-[#374151] text-[0.875rem]"
                    >
                      <input type="checkbox" name={tag.name} className="mr-2" />
                      {tag.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[80%]">
            <div className="flex flex-wrap justify-between gap-1 mx-2 md:mx-0">
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white md:w-[30%] w-[47%] h-[500px] mb-6 relative"
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
