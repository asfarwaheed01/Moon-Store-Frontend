import React from "react";
import Container from "./Container";
import Image from "next/image";
import footerLogo from "../../public/assets/logo (1).png";
import rightArrow from "../../public/assets/Arrow Right.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#3A3845] pt-[5%] px-[5%] relative">
        <Container>
          <div className="text-[#E5E5E5] flex justify-between">
            <div className="footer-right flex flex-col gap-5 w-[50%]">
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
            </div>
            <div className="footer-left w-[50%]">
              <div className="flex flex-wrap gap-6">
                <div className="footer-column w-[30%]">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    About Us
                  </h2>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Our Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Awards
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-column w-[30%]">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    Services
                  </h2>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Web development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Mobile design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        UI/UX design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Branding design
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-column w-[30%]">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    Portfolio
                  </h2>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Corporate websites
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Mobile apps
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        Landing pages
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-300 text-sm">
                        UI/UX projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[100%] bg-[#CAC9CF] w-[1px] absolute top-0 left-[40%]"></div>
          </div>
          <hr className="text-[#CAC9CF] mt-[5%]" />
        </Container>
      </div>
      <div className="rights bg-[#3A3845]">
        <p className="text-[#6D758F] text-center text-[16px] py-[2%]">
          Copyright © 2023 Moon| All Rights Reserved | Terms and Conditions |
          Privacy Policy
        </p>
      </div>
    </>
  );
};

export default Footer;
