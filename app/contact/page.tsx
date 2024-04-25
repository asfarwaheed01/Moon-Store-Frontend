import React from "react";
import { socials } from "./contactdata";
import contactbg from "../../public/assets/contact-bg.png";
import Image from "next/image";
import Container from "../components/Container";
import contactflower from "../../public/assets/contact-icon-1.png";
import Link from "next/link";
import rightArrow from "../../public/assets/Arrow Right.png";

const page = () => {
  return (
    <section className="mainSec1 relative">
      <Image
        src={contactbg}
        alt="Background Image"
        className="md:h-[90vh] h-[50vh] w-full"
      ></Image>
      <Container>
        <div className="bg-[#3A3845] md:w-[45%] md:h-[90vh] h-[50vh] flex justify-center items-center md:absolute md:top-0">
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
      <section>
        <div className="form py-5">
          <Container>
            <div>
              <h1 className="font-garamond text-[2rem] text-center text-[#3A3845] font-bold">
                GET IN TOUCH WITH US
              </h1>
              <p className="text-[#595667] text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit{" "}
                <br />
                phasellus mollis sit aliquam sit nullam.
              </p>
              <div className="basic-info flex flex-col gap-4 mt-4">
                <div className="hours text-center">
                  <h3 className="text-[0.875rem] font-semibold mb-2 text-[#595667]">
                    Office Hours:
                  </h3>
                  <p className="text-[#C69B7B] text-[0.785rem]">
                    Monday - Friday 8:00 am to 5:00 pm
                  </p>
                </div>
                <div className="email text-center">
                  <h3 className="text-[0.875rem] font-semibold mb-2 text-[#595667]">
                    Email:
                  </h3>
                  <p className="text-[#C69B7B] text-[0.785rem]">
                    contact@company.com
                  </p>
                </div>
                <div className="phone text-center">
                  <h3 className="text-[0.875rem] font-semibold mb-2 text-[#595667]">
                    Phone:
                  </h3>
                  <p className="text-[#C69B7B] text-[0.785rem]">
                    (414) 687 - 5892
                  </p>
                </div>
                <div className="location text-center">
                  <h3 className="text-[0.875rem] font-semibold mb-2 text-[#595667]">
                    Location:
                  </h3>
                  <p className="text-[#C69B7B] text-[0.785rem]">
                    59 Middle Point Rd <br />
                    San Francisco, 80412
                  </p>
                </div>
              </div>
            </div>
            <div className="form md:w-[65%] mx-auto">
              <form className="bg-white rounded pt-6 pb-8 mb-4 px-6">
                <div className="md:flex justify-between">
                  <div className="mb-4 md:w-[48%]">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4 md:w-[48%]">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div className="mb-4 md:w-[48%]">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-4 md:w-[48%]">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight"
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex items-center w-[100%] justify-between">
                  <button className="bg-[#3A3845] relative text-[12px] font-semibold w-full inline-flex items-center justify-center px-4 py-3 border border-white text-white">
                    SEND MESSAGE
                    <Image
                      src={rightArrow}
                      alt="right arrow"
                      className="ml-2"
                    />
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </section>
      <div className="map block w-[100%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.150405992183!2d74.34069007442523!3d31.520028747161053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c0d39fb72f%3A0xa5c1994a4a6a827a!2sThe%20Hexaa!5e0!3m2!1sen!2s!4v1714047537485!5m2!1sen!2s"
          height={496}
          style={{ border: "0", display: "block" }}
          allowFullScreen={true}
          loading="lazy"
          className="w-[100%]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default page;
