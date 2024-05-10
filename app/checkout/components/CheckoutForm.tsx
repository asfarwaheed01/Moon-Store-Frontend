"use client";
import React from "react";
import left from "../../../public/assets/Chevron left.png";
import right from "../../../public/assets/Arrow rigth.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  company: yup.string(),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.number(),
  phone: yup.string().required("Phone number is required"),
  email: yup.string(),
  message: yup.string(),
});

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  return (
    <section>
      <div>
        <h1 className="text-[#3A3845] text-[1.25rem] mx-[2%] md:mx-0">
          Billing Details
        </h1>
      </div>
      <div className="mt-2 mx-[2%] md:mx-0">
        <form action="">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="firstname"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Asfar"
                id="firstname"
                {...register("firstName")}
                name="firstname"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="lastname"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastname"
                {...register("lastName")}
                name="lastname"
                placeholder="Waheed"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="company"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                {...register("company")}
                name="company"
                placeholder="Moon"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              />
              {errors.company && (
                <p className="text-red-500">{errors.company.message}</p>
              )}
            </div>
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="country"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                Country / Region<span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                {...register("country")}
                name="country"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              >
                <option value="">Select a country</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              {errors.country && (
                <p className="text-red-500">{errors.country.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
            >
              Street address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              name="address"
              placeholder="Address"
              className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
          <div className="flex flex-wrap justify-between mt-4">
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="City"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                Town / City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="City"
                id="City"
                {...register("city")}
                name="City"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              />
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="state"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                State<span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                {...register("state")}
                name="state"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              >
                <option value="">State</option>
                <option value="USA">Punjab</option>
                <option value="UK">Sindh</option>
                <option value="Canada">KPK</option>
                <option value="Australia">Balochistan</option>
                <option value="Australia">Gilgit Baltistan</option>
              </select>
              {errors.state && (
                <p className="text-red-500">{errors.state.message}</p>
              )}
            </div>
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="zipCode"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="ZIP Code"
                {...register("zipCode")}
                name="ZIP Code"
                placeholder="ZIP code"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              />
              {errors.zipCode && (
                <p className="text-red-500">{errors.zipCode.message}</p>
              )}
            </div>
            <div className="w-full md:w-[49%] mb-4">
              <label
                htmlFor="phone"
                className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="phone"
                id="phone"
                {...register("phone")}
                name="phone"
                placeholder="(123) 456 - 7890"
                className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              {...register("email")}
              name="Email"
              placeholder="asfarwaheed01@gmail.com"
              className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="block mb-1 text-[0.875rem] text-[#3A3845] font-semibold"
            >
              Order Notes
            </label>
            <textarea
              id="message"
              {...register("message")}
              name="message"
              className="w-full border border-black px-2 py-2 text-[#807F86] text-[0.875rem]"
              placeholder="Type your message here..."
              rows={4}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <div className="buttons md:flex justify-between mt-4">
            <div>
              <Link
                href="/cart"
                className="flex justify-center items-center mb-4 md:mb-0"
              >
                <Image src={left} className="mr-2" alt="left-arrow" />
                <span className="text-[#3A3845] text-[0.75rem]">
                  RETURN TO CART
                </span>
              </Link>
            </div>
            <div>
              <button className="text-white flex justify-center items-center bg-[#3A3845] py-2 w-[100%] md:w-[219px] text-center text-[0.875rem] font-semibold">
                <span>Continue to shipping</span>
                <Image src={right} className="ml-1" alt="right arrow" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
