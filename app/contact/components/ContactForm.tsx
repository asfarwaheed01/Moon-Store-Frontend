import Container from "@/app/components/Container";
import React from "react";
import { formFields, infoData } from "../contactdata";
import Image from "next/image";
import rightArrow from "../../../public/assets/Arrow Right.png";

const ContactForm = () => {
  return (
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
                  <Image src={rightArrow} alt="right arrow" className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactForm;
