import React from "react";
import { blogs, categories, posts, tags } from "../blogdata";
import search from "../../../public/assets/Search.png";
import Link from "next/link";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="search md:block hidden">
        <div className="flex border-black border-solid border-[1px] px-2 py-2">
          <Image src={search} alt="search-icon"></Image>
          <input
            type="text"
            placeholder="Search for product..."
            className="text-[14px] text-[#807F86] px-2 w-[80%] border-none focus:border-none focus:outline-none"
          />
        </div>
      </div>
      <div className="popular">
        <h1 className="text-[#3A3845] text-[1.5rem] font-sans font-semibold mb-6">
          POPULAR POSTS
        </h1>
        <div className="popular-posts flex flex-col gap-6">
          {posts.map((item) => (
            <div className="flex justify-between items-center gap-5">
              <div className="pop-image w-[27%]">
                <Image
                  src={item.image}
                  alt="popular-images"
                  className="w-[119px] h-[80px]"
                ></Image>
              </div>
              <div className="pop-desc flex items-center w-[67%]">
                <p className="text-[0.875rem] text-[#3A3845]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="categories">
        <h1 className="text-[#3A3845] text-[1.5rem] font-sans font-semibold mb-6">
          CATEGORIES
        </h1>
        <div className="categories-list flex flex-col gap-2">
          {categories.map((category) => (
            <Link href={category.link} className="text-[0.875rem]">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="tags">
        <h1 className="text-[#3A3845] text-[1.5rem] font-sans font-semibold mb-6">
          TAGS POSTS
        </h1>
        <div className="tags-posts">
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <div className="border-black border-solid border-[1px] py-[4px] px-2 mb-2 flex justify-center items-center">
                <Link
                  href={tag.link}
                  className="text-[#807F86] text-[0.875rem]"
                >
                  {tag.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
