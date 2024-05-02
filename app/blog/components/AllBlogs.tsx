import Image from "next/image";
import { blogs } from "../blogdata";
import React from "react";
import { Pagination } from "@mui/material";

const AllBlogs = () => {
  return (
    <>
      <div className="flex flex-wrap">
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
      </div>
      <div className="flex justify-center mx-auto mt-4">
        <Pagination count={4} variant="outlined" shape="rounded" />
      </div>
    </>
  );
};

export default AllBlogs;
