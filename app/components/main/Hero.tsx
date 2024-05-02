import Image from "next/image";
import React from "react";
import Container from "../Container";
import secOneBg from "../../../public/assets/home-sec-1-bg.png";
import flower from "../../../public/assets/flower.png";

const Hero = () => {
  return (
    <section className="mainSec1 relative">
      <Image
        src={secOneBg}
        alt="Background Image"
        className="md:h-auto h-[398px] w-[100%]"
      ></Image>
      <Container>
        <div className="bg-[#826F66] md:w-[40%] md:h-full py-[10%] flex justify-center items-center md:absolute md:top-0">
          <div className="flex flex-col justify-center text-white gap-5 py-5">
            <div className="sec-1-img">
              <Image
                src={flower}
                alt=""
                className="mx-auto"
                width={85}
                height={81}
              ></Image>
            </div>
            <div className="content flex flex-col gap-3">
              <p className="text-[1rem]">Handcrafted in Viet Nam since 1650</p>
              <h1 className="text-[2.25rem] text-center line-height-40 font-bold font-garamond">
                BAT TRANG <br />
                DINNER SET
              </h1>
            </div>
            <button className="bg-[#ffffff] text-[14px] font-semibold text-black w-[220px] py-[12px] px-[1rem] mx-auto">
              Shop Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
