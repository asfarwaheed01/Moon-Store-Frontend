import React from "react";
import Container from "../Container";
import Image from "next/image";
import footerLogo from "../../../public/assets/logo (1).png";
import rightArrow from "../../../public/assets/Arrow Right.png";
import Link from "next/link";
import { aboutUs, services, portfolio } from "./data";

const Footer = () => {
  return (
    <>
      <div className="bg-[#3A3845] pt-[5%] px-[5%] relative block">
        <Container>
          <div className="text-[#E5E5E5] md:flex justify-between">
            <div className="footer-right flex flex-col gap-5 md:w-[50%] w-[100%]">
              <div className="footer-logo">
                <Image src={footerLogo} alt="footer logo"></Image>
              </div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit
                  aliquam mauris sed ma
                </p>
              </div>
              <button className="relative text-[12px] font-semibold w-[142px] inline-flex items-center justify-center px-4 py-2 border border-white text-white">
                GET STARTED
                <Image src={rightArrow} alt="right arrow" className="ml-2" />
              </button>
              <hr className="md:hidden mb-2" />
            </div>
            <div className="footer-left md:w-[50%] w-[100%]">
              <div className="flex flex-wrap gap-6">
                <div className="footer-column w-[45%] md:w-[30%]">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    About Us
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {aboutUs.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.link}
                          passHref
                          className="text-gray-300 text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-column md:w-[30%] w-[45%]">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    Services
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {services.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.link}
                          passHref
                          className="text-gray-300 text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-column md:w-[30%] w-[45%]">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    Portfolio
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {portfolio.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.link}
                          passHref
                          className="text-gray-300 text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[100%] bg-[#CAC9CF] w-[1px] absolute top-0 left-[40%] hidden md:block"></div>
          </div>
          <hr className="text-[#CAC9CF] mt-[5%]" />
        </Container>
      </div>
      <div className="rights bg-[#3A3845]">
        <p className="text-[#6D758F] text-center text-[16px] py-[2%] md:w-[auto] w-[85%] mx-auto">
          Copyright © 2023 Moon
          <span className="md:inline hidden">|</span> All Rights Reserved
          <span className="md:inline hidden">|</span> Terms and Conditions
          <span className="inline">|</span> Privacy Policy
        </p>
      </div>
    </>
  );
};

export default Footer;
