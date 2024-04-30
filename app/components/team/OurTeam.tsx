import React from "react";
import Image from "next/image";
import team1 from "../../../public/assets/team1.png";
import team2 from "../../../public/assets/team2.png";
import team3 from "../../../public/assets/team3.png";
import team4 from "../../../public/assets/team4.png";
import Container from "../Container";

const items = [
  { name: "Bernie PATTERSON", Designation: "CEO & Founder", imageSrc: team1 },
  { name: "OPHELIA VASE", Designation: "Creative Director", imageSrc: team2 },
  { name: "CORBIN HOSSAIN", Designation: "Artist", imageSrc: team3 },
  { name: "SEREN BOWL", Designation: "Marketing", imageSrc: team4 },
];

const OurTeam = () => {
  return (
    <section className="">
      <Container>
        <div className="flex gap-2 lg:items-center lg:justify-between overflow-x-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col items-center justify-center min-w-[270px]"
            >
              <Image
                src={item.imageSrc}
                className="p-2 h-full w-full object-cover"
                alt="team-img"
              />
              <div className="">{item.name}</div>
              <div className=" text-gray-500">{item.Designation}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
