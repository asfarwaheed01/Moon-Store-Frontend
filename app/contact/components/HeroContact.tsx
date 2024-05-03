import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socials } from "../contactdata";
import Container from "@/app/components/Container";
import contactbg from "../../../public/assets/contact-bg.png";
import contactflower from "../../../public/assets/contact-icon-1.png";

const HeroContact = () => {
  return (
    <section>
      <Image
        src={contactbg}
        alt="Background Image"
        className="md:h-[90vh] h-[50vh] object-cover w-full"
      ></Image>
      <Container>
        <div className="bg-[#3A3845] md:w-[40%] md:h-[90vh] py-[10%] flex justify-center items-center md:absolute md:top-0">
          <div className="flex flex-col justify-center text-white gap-5 py-5">
            <div className="sec-1-img">
              <Image
                src={contactflower}
                alt=""
                className="mx-auto"
                width={85}
                height={81}
              ></Image>
            </div>
            <div className="content flex flex-col gap-3">
              <h1 className="text-[2.25rem] text-center line-height-40 font-bold font-garamond">
                CONTACT US
              </h1>
              <p className="text-white text-[0.875rem] text-center">
                Follow us on socail media
              </p>
            </div>
            <hr />
            <div className="socials">
              <div className="flex gap-2 justify-between">
                {socials.map((item, index) => (
                  <Link href={item.link}>
                    <Image
                      src={item.imgSrc}
                      alt="social-image"
                      className="w-[24px] h-[24px]"
                    ></Image>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroContact;
