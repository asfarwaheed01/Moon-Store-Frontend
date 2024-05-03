"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sliderimage from "../../../public/assets/slider-image.png";
import "./slider.module.scss";

const slideData = [
  {
    title: "WHAT'S IN A GARDEN SET",
    description:
      "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit",
  },
  {
    title: "WHAT'S IN A GARDEN SET",
    description:
      "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit",
  },
];

const Slider = () => {
  return (
    <section className="w-full">
      <div className="relative">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="md:flex h-full w-full items-center justify-center">
                <div className="md:w-[50%] h-[50vh] md:h-[70vh]">
                  <Image
                    src={sliderimage}
                    alt="slider image"
                    className="block h-full w-full"
                  />
                </div>
                <div className="md:w-[50%] bg-[#F7F6F5]  h-[50vh] md:h-[70vh] py-[5%] flex flex-col justify-center items-center">
                  <h1 className="font-garamond text-[1.75rem] leading-32 mb-[2%]">
                    {slide.title}
                  </h1>
                  <p className="text-[1rem] text-[#595667] leading-24 md:w-[411px] text-center">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
