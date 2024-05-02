import { List } from "@mui/material";
import React from "react";
import ProductCard from "../productcard/ProductCard";
import { Product } from "@/app/utils/product";

interface ProductDisplayProps {
  heading: string;
  products: Product[];
  className?: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  heading,
  products,
  className,
}) => {
  return (
    <div>
      <h1 className="text-[1.9rem] text-center text-[#3A3845] font-bold font-garamond mb-8">
        {heading}
      </h1>
      <div
        className={`flex flex-wrap justify-between gap-1 mx-4 md:mx-0${className}`}
      >
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export default ProductDisplay;
