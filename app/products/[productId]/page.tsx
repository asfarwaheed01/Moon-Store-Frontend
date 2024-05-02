"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation"; // Import useSearchParams hook from next/navigation
import { BASE_URL } from "@/app/config/config";
import Product from "@/app/components/bestsellers/product.type";
import Container from "@/app/components/Container";
import Link from "next/link";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const productId = params.productId;

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
  return (
    <section>
      <Container>
        <div className="text-[14px] flex gap-2 text-[#807F86]">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <p className="text-black">{product?.name}</p>
        </div>
        {product ? (
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt="" />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </section>
  );
};

export default ProductPage;
