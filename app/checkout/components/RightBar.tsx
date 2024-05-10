"use client";
import React, { useContext } from "react";
import Payment from "./Payment";
import { useAuth } from "@/app/context/authContext";

const RightBar = () => {
  const { state } = useAuth();
  const cart = state.cart;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const shippingCost = 15;

  const total = subtotal + shippingCost;
  return (
    <section className="mx-[2%] mt-[5%] md:mt-0">
      <div className="flex flex-col">
        <div className="flex justify-between text-[#3A3845]">
          <h1 className="font-semibold">Product</h1>
          <h1 className="font-semibold">Subtotal</h1>
        </div>
        <div className="border-b-[1px] border-[#CAC9CF] my-[2%]" />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {/* <div className="flex justify-between text-[#3A3845]">
          <h1 className=" text-[0.875rem]">Porcelain Dinner Plate (27cm)</h1>
          <h1 className=" text-[0.875rem]">$59.00</h1>
        </div>
        <div className="flex justify-between text-[#3A3845]">
          <h1 className=" text-[0.875rem]">Ophelia Matte Natural Vase</h1>
          <h1 className=" text-[0.875rem]">$168.00</h1>
        </div>
        <div className="flex justify-between text-[#3A3845]">
          <h1 className=" text-[0.875rem]">Luana Bowl</h1>
          <h1 className=" text-[0.875rem]">$49.00</h1>
        </div> */}
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between text-[#3A3845]">
            <h1 className="text-[0.875rem]">{item.product.name}</h1>
            <h1 className="text-[0.875rem]">
              ${(item.product.price * item.quantity).toFixed(2)}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <div className="flex justify-between text-[#3A3845]">
          <h1 className="font-semibold text-[0.875rem]">Subtotal</h1>
          <h1 className="font-semibold text-[0.875rem]">${subtotal}</h1>
        </div>
        <div className="flex justify-between text-[#3A3845]">
          <h1 className="font-semibold text-[0.875rem]">Shipping</h1>
          <h1 className="font-semibold text-[0.875rem]">${shippingCost}</h1>
        </div>
      </div>
      <div className="border-b-[1px] border-[#CAC9CF] mt-[5%]" />
      <div className="flex justify-between text-[#3A3845] mt-[2%]">
        <h1 className="font-semibold text-[1.25rem]">Total</h1>
        <h1 className="font-semibold text-[1.25rem]">${total}</h1>
      </div>
      <Payment />
    </section>
  );
};

export default RightBar;
