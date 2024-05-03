import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";
import { work } from "../aboutdata";
import about4 from "../../../public/assets/about4.png";

const Work = () => {
  return (
    <section>
      <Container>
        <div className="word md:flex justify-between py-[10%] md:py-[5%]">
          <div className="md:w-[50%]">
            <Image
              src={about4}
              alt="Work-Image"
              className="object-cover w-full h-[300px] md:h-auto"
            ></Image>
          </div>
          <div className="md:w-[50%] flex flex-col gap-4 justify-center px-[7%] py-2 text-left">
            <h1 className="text-left font-bold font-garamond text-[#3A3845] text-[1.75rem]">
              HOW WE WORK
            </h1>
            {work.map((section, index) => (
              <div key={index} className="product-design">
                <h2 className="font-semibold text-[1.13rem] mb-3">
                  {section.heading}
                </h2>
                <p className="text-[1rem] md:w-[461px]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
