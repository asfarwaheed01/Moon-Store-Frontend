import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";
import kitchen from "../../../public/assets/kitchen.png";

const Blog = () => {
  return (
    <section className="sec-3 bg-white">
      <Container>
        <h1 className="font-garamond text-[1.88rem] mb-8 text-center">
          OUR BLOG
        </h1>
        <div className="sec-3 md:flex md:h-[438px]">
          <div className="sec-3-text md:w-[50%] flex flex-col py-2 gap-5 justify-center items-center bg-[#F7F6F5] text-center">
            <h4 className="text-[#807F86] font-sans font-semibold text-[1.12rem]">
              TABLEWARE
            </h4>
            <h2 className="text-[1.75rem] text-[#3A3845] font-garamond font-bold leading-32">
              THE SECRETS TO A <br />
              KITCHEN ROOM
            </h2>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipiscing <br /> eli
              mattis sit phasellus mollis sit aliquam sit nullam <br /> neque
              ultrices.
            </p>
            <Link
              href="#"
              className="text-[14px] font-bold border-black border-b-2"
            >
              READ MORE
            </Link>
          </div>
          <div className="sec-3-img md:w-[50%]">
            <Image
              src={kitchen}
              alt="off-image"
              className="object-cover w-[100%]"
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
