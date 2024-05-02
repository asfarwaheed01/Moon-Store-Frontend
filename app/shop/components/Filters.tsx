import React from "react";
import { categories, colors, prices, tags } from "../shopdata";
import Link from "next/link";

const Filters = () => {
  return (
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
              <input type="checkbox" name={category.name} className="mr-2" />
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
            <label key={price.name} className="text-[#374151] text-[0.875rem]">
              <input type="checkbox" name={price.name} className="mr-2" />
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
            <label key={tag.name} className="text-[#374151] text-[0.875rem]">
              <input type="checkbox" name={tag.name} className="mr-2" />
              {tag.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
