import React from "react";
import News from "../components/newscollection/News";
import Container from "../components/Container";
import about1 from "../../public/assets/about1.png";
import about2 from "../../public/assets/about2.png";
import about3 from "../../public/assets/about3.png";
import about4 from "../../public/assets/about4.png";
import Image from "next/image";
import OurTeam from "../components/team/OurTeam";
import { work, aboutData } from "./aboutdata";
import CustomText from "../components/customtext/CustomText";
import TextWithImage from "../components/textwithimage/TextWithImage";

const page = () => {
  return (
    <div>
      <section className="about md:py-[5%] py-[10%]">
        <Container>
          <div className="about flex flex-col gap-4">
            <h1 className="text-center font-bold font-garamond text-[2.25rem]">
              About Moon
            </h1>
            <p className="text-center font-sans w-[309px] md:w-[436px] text-[1rem] mx-auto">
              Moon's handmade ceramic products have been around since 1650,
              let's explore our journey
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          {/* <TextWithImage
            className="md:h-[348px]"
            heading="1910"
            paragraph="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices."
            link="#"
            image={{ src: about1.src, alt: "Alt Text" }}
          />
          <TextWithImage
            className="md:h-[348px] md:flex-row-reverse"
            heading="1990"
            paragraph="Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
            nisi. dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit"
            link="#"
            image={{ src: about2.src, alt: "Alt Text" }}
          />
          <TextWithImage
            className="md:h-[348px]"
            heading="2010"
            paragraph=" Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
            tempus. sit aliquam sit nullam neque ultrices."
            link="#"
            image={{ src: about3.src, alt: "Alt Text" }}
          /> */}
          {aboutData.map((data, index) => (
            <TextWithImage key={index} {...data} />
          ))}
        </Container>
      </section>
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
      <OurTeam />
      <News />
    </div>
  );
};

export default page;
