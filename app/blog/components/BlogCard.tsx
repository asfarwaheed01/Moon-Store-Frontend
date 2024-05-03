import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   placeholder?: string;
// };

interface Blog {
  image: string | StaticImageData;
  avatarImage: string | StaticImageData;
  name: string;
  writer: string;
  date: string;
  description: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="blog-card md:w-[47%] w-[90%] mx-auto flex flex-col gap-3 mb-6">
      {/* Card Image */}
      <Image
        className="w-full h-[228px] object-cover mb-2"
        src={blog.image}
        alt={blog.name}
        width={500}
        height={300}
      />

      {/* Card Content */}
      <div className="flex items-center mb-2">
        <div className="flex w-full">
          <div className="flex items-center gap-2">
            <Image
              className="w-8 h-8 rounded-full mr-2"
              src={blog.avatarImage}
              alt="Avatar"
              width={32}
              height={32}
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
  );
};

export default BlogCard;
