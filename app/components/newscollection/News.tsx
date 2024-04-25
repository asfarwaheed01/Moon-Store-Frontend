import React from "react";
import Container from "../Container";

const News = () => {
  return (
    <section className="bg-white py-[5%]">
      <Container>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h4 className="text-center font-semibold font-sans text-[1rem] text-[#595667]">
            Sign up for emails
          </h4>
          <h1 className="font-garamond text-[1.75rem] text-center">
            FOR NEWS, COLLECTIONS & MORE
          </h1>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="text-[#595667] text-[1rem] md:w-[389px] mx-auto font-sans text-center border-b border-black focus:outline-none"
            />
            <button className="text-black border border-black text-[0.75rem] font-semibold py-2 w-[103px] mx-auto">
              SIGN UP
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;
