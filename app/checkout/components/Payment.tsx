import React from "react";
import card from "../../../public/assets/card.png";
import Image from "next/image";
import paypal from "../../../public/assets/paypal.png";

const Payment = () => {
  return (
    <section>
      <div className="bg-[#3A3845] w-full px-[5%] py-[2%] mt-2">
        <h1 className="text-white text-[1.25rem]">Payment</h1>
        <form action="">
          <div className="flex items-center justify-between">
            <label htmlFor="cart" className="flex items-center mr-4">
              <input
                type="checkbox"
                id="cart"
                className="mr-1 appearance-none w-3 h-3 border border-gray-300 rounded-full checked:bg-white checked:border-transparent"
              />
              <span className="text-white">Card</span>
            </label>
            <Image src={card} alt="Credit Card" />
          </div>
          <div className="border-b-[1px] border-[#FFFFFF] my-[5%]"></div>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              className="border border-white bg-[#3A3845] text-[#A6A6A8] text-[0.875rem] px-3 py-1"
              placeholder="Card Number"
            />
            <input
              type="text"
              className="border border-white bg-[#3A3845] text-[#A6A6A8] text-[0.875rem] px-3 py-1"
              placeholder="Name on card"
            />
            <div className="flex w-full justify-between">
              <input
                type="text"
                className=" border-white border-[1px] w-[48%] bg-[#3A3845] text-[#A6A6A8] text-[0.875rem] px-3 py-1"
                placeholder="Expiration date  (MM/YY)"
              />
              <input
                type="text"
                className=" border-white border-[1px] w-[48%] bg-[#3A3845] text-[#A6A6A8] text-[0.875rem] px-3 py-1"
                placeholder="Security code"
              />
            </div>
            <div className="border-b-[1px] border-[#FFFFFF] my-[5%]"></div>
          </div>
          <div className="flex gap-2 items-center my-[5%]">
            <div>
              <input
                type="checkbox"
                id="paypal"
                className=" appearance-none w-3 h-3 border border-gray-300 rounded-full checked:bg-white checked:border-transparent"
              />
            </div>
            <div>
              <Image src={paypal} alt="paypal"></Image>
            </div>
          </div>
          <button className="text-white border-[1px] mb-2 border-white bg-[#3A3845] py-2 w-[100%] text-center text-[0.875rem] font-semibold">
            Place order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Payment;
