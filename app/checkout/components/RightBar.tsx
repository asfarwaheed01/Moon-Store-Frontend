"use client";
import React, { useContext, useEffect, useState } from "react";
import Payment from "./Payment";
import { useAuth } from "@/app/context/authContext";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "@/app/config/config";
import { toast } from "react-toastify";

const RightBar = () => {
  const stripePromise = loadStripe(
    "pk_test_51PEq9aI14C7BnuSwDR7HxP1O3BPRHKT67658Zd51cjaOJlApqh7qnrsZdtieCabG6fQzGRgh4iM5bLCG3s3jAYgE00Go6Kq9XS"
  );
  const [clientSecret, setClientSecret] = useState("");

  const { state } = useAuth();
  const cart = state.cart;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shippingCost = 15;
  const total = subtotal + shippingCost;
  const backendTotal = total * 100;
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${BASE_URL}stripe/payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: backendTotal }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, [total]);

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
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Payment />
        </Elements>
      )}
    </section>
  );
};

export default RightBar;
