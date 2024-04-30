import React from "react";
import { infoData, socials } from "./contactdata";
import contactbg from "../../public/assets/contact-bg.png";
import Image from "next/image";
import Container from "../components/Container";
import contactflower from "../../public/assets/contact-icon-1.png";
import Link from "next/link";
import rightArrow from "../../public/assets/Arrow Right.png";
import { formFields } from "./contactdata";

const page = () => {
  return (
    <section className="mainSec1 relative">
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
                {infoData.map((info, index) => (
                  <div key={index} className="info text-center">
                    <h3 className="text-[0.875rem] font-semibold mb-2 text-[#595667]">
                      {info.heading}
                    </h3>
                    <p className="text-[#C69B7B] text-[0.785rem] max-w-[250px] mx-auto">
                      {info.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="form md:w-[65%] mx-auto">
              <form className="bg-white rounded pt-6 pb-8 mb-4 px-6">
                <div className="md:flex flex-wrap justify-between">
                  {formFields.map((field, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        field.name === "message" ? "md:w-full" : "md:w-[48%]"
                      }`}
                    >
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          className="shadow text-[#807F86] text-[0.875rem] appearance-none border border-black w-full py-2 px-3 leading-tight"
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          rows={field.rows}
                        ></textarea>
                      ) : (
                        <input
                          className="shadow text-[#807F86] text-[0.875rem] appearance-none border border-black w-full py-2 px-3 leading-tight"
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                        />
                      )}
                    </div>
                  ))}
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
