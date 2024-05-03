import Image from "next/image";
import { blogs } from "../blogdata";
import React from "react";
import { Pagination } from "@mui/material";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      <div className="flex justify-center mx-auto mt-4">
        <Pagination count={4} variant="outlined" shape="rounded" />
      </div>
    </>
  );
};

export default AllBlogs;
