"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/app/config/config";
import Product from "@/app/components/bestsellers/product.type";
import Container from "@/app/components/Container";
import Link from "next/link";
import stars from "@/public/assets/star.png";
import heart from "@/public/assets/Heart.png";
import Image from "next/image";
import { colors, socials } from "../singleproductdata";
import Accordion from "@/app/components/accordion/Accordion";
import SimilarItems from "@/app/components/similaritems/SimilarItems";
import { useAuth } from "@/app/context/authContext";
import { toast } from "react-toastify";

const ProductPage = () => {
  const params = useParams();
  const { state, dispatch } = useAuth();
  const [product, setProduct] = useState<Product | null>(null);
  const productId = params.productId;
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const response = await axios.get<Product>(
            `${BASE_URL}products/${productId}`
          );
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity: 1 } });
    setIsAdded(true);
    toast.success("Added to Cart.");
  };

  const accordionData = [
    { title: "Details", description: product?.description },
    { title: "Dimensions", description: product?.description },
    { title: "Reviews", description: product?.description },
  ];
  return (
    <section className="">
      <Container>
        <div className="text-[14px] flex gap-2 text-[#807F86] my-[2%] mx-[3%] md:mx-0">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <p className="text-black">{product?.name}</p>
        </div>
        <section className="product-details pb-[2%] mx-[3%] md:mx-0">
          <div>
            {product ? (
              <div className="md:flex gap-10">
                <div className="md:w-[50%]">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full md:h-[701px]"
                  />
                </div>
                <div className="md:w-[50%] flex flex-col gap-3">
                  <h2 className="text-[20xp] font-semibold">{product.name}</h2>
                  <div className="reviews flex gap-16">
                    <div className="review-img flex gap-5">
                      <Image
                        src={stars}
                        alt="stars"
                        className="object-contain"
                      ></Image>
                      <span className="text-[#111827] text-[16px]">
                        (1256 Reviews)
                      </span>
                    </div>
                    <div className="stock">
                      <p className="text-[16px]">
                        Stock: <span className="text-[#C69B7B]">In stock</span>
                      </p>
                    </div>
                  </div>
                  <div className="price">
                    <p className="text-[#3A3845] font-sans text-[24px]">
                      ${product.price}
                      <span className="text-[#9CA3AF] ml-2">$50</span>
                    </p>
                  </div>
                  <div className="colors flex flex-col gap-5 mt-4">
                    <h2 className="text-[16px] font-semibold">
                      Color: <span className="text-[#826F66]">Blue</span>
                    </h2>
                    <div className="colors-list flex gap-6">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-[36px] h-[36px] border-[1px] border-[#D1D5DB]"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="buttons flex gap-2">
                    <div className="count py-3 px-1 flex border-[1px] w-[20%] justify-between border-[#3A3845] text-[14px]">
                      <button onClick={() => setCount(count - 1)}>-</button>
                      <p className="font-semibold">{count}</p>
                      <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <div className="w-[80%]">
                      <button
                        onClick={() => {
                          addToCart();
                        }}
                        className="text-white bg-[#3A3845] text-[14px] text-center w-[100%] font-bold py-3 px-4"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="buy-now flex gap-2">
                    <div className="buy w-[90%]">
                      <button className="text-black border-[1px] border-[#3A3845] bg-[#fffff] text-[14px] text-center w-[100%] font-bold py-3 px-4">
                        Buy Now
                      </button>
                    </div>
                    <div className="like-button w-[10%]">
                      <button className=" flex justify-center items-center border-[1px] border-[#3A3845] w-full h-full">
                        <Image src={heart} alt="heart"></Image>
                      </button>
                    </div>
                  </div>
                  <div className="share">
                    <h2 className="text-[16px] text-[#3A3845] font-semibold mt-2">
                      Share this:
                    </h2>
                    <div className="flex gap-5 mt-2">
                      {socials.map((social, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-center"
                        >
                          <Image
                            src={social.image}
                            alt={social.name}
                            className="height-[18px] width-[20px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="accordions mt-[5%]">
                    {accordionData.map((data, index) => (
                      <Accordion
                        key={index}
                        title={data.title}
                        description={data.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p>Product Details Loading...</p>
            )}
          </div>
        </section>
        <section>
          <div>
            <SimilarItems />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default ProductPage;
