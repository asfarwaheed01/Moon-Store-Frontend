"use client";
import React, { useState } from "react";
import { Product } from "@/app/utils/product";
import Link from "next/link";
import { useAuth } from "@/app/context/authContext";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
  className?: String;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { state, dispatch } = useAuth();
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity: 1 } });
    setIsAdded(true);
    toast.success("Added to Cart.");
  };
  return (
    <div
      key={product._id}
      className={`bg-white md:w-[23%] w-[47%] h-[500px] mb-6 relative ${className}`}
    >
      <Link href={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <Link href={`/products/${product._id}`}>
          <div>
            <h2 className="text-[0.9rem] font-semibold mb-2">{product.name}</h2>
            <p className="text-black text-[0.9rem] font-semibold mb-3">
              ${product.price}.00
            </p>
            <p className="text-[#807F86] text-[0.88rem] mb-2">
              {product.description}
            </p>
          </div>
        </Link>
        <button
          onClick={() => {
            addToCart();
          }}
          className="absolute bottom-0 text-black border-black border text-center w-[100%] font-bold py-2 px-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
