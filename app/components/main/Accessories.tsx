import React from "react";
import Container from "../Container";

import tableware from "../../../public/assets/table-ware.png";
import homeDecor from "../../../public/assets/home-decor.png";
import collection from "../../../public/assets/collection.png";
import holiday from "../../../public/assets/holiday.png";
import Image from "next/image";
const accessories = [
  {
    name: "TABLEWARE",
    imageSrc: tableware,
  },
  {
    name: "HOME DECOR",
    imageSrc: homeDecor,
  },
  { name: "HOLIDAY", imageSrc: holiday },
  { name: "COLLECTION", imageSrc: collection },
];

const Accessories = () => {
  return (
    <section className="bg-[#ffffff] py-[5%]">
      <Container>
        <div className="flex gap-[0.5rem] lg:items-center lg:justify-between overflow-x-auto">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="pl-[3%] md:pl-0 flex flex-col items-center justify-center min-w-[270px]"
            >
              <Image
                src={item.imageSrc}
                className="h-full w-full object-cover"
                alt="team-img"
              />
              <div className="text-[1rem] font-semibold mt-2">{item.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Accessories;
