import React from "react";
import Slider from "../components/slider/Slider";
import Pagenation from "../components/pagenation/Pagenation";
import { blogs, categories, posts, tags } from "./blogdata";
import Container from "../components/Container";
import Image from "next/image";
import search from "../../public/assets/Search.png";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <Slider />
      <section>
        <Container>
          <section className="py-[5%]">
            <div className="blogs md:flex gap-4">
              <div className="main-blogs md:w-[70%] flex flex-wrap">
                {blogs.map((blog) => (
                  <div className="blog-card md:w-[47%] w-[90%] mx-auto flex flex-col gap-3 mb-6">
                    {/* Card Image */}
                    <Image
                      className="w-full h-[228px] object-cover mb-2"
                      src={blog.image}
                      alt={blog.name}
                    />

                    {/* Card Content */}
                    <div className="flex items-center mb-2">
                      <div className="flex w-full">
                        <div className="flex items-center gap=2">
                          <Image
                            className="w-8 h-8 rounded-full mr-2"
                            src={blog.avatarImage}
                            alt="Avatar"
                          />
                          <p>{blog.writer}</p>
                          <span className="mx-4">--</span>
                        </div>
                        <div className="flex items-center">
                          <p className="text-sm text-gray-700">{blog.date}</p>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold">{blog.name}</span>
                    <p className="text-sm">{blog.description}</p>
                  </div>
                ))}
                <Pagenation />
              </div>
              <div className="searchs-section md:w-[30%] px-2 py-4 md:py-0">
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
              </div>
            </div>
          </section>
        </Container>
      </section>
    </section>
  );
};

export default page;
