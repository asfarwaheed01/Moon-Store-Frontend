"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { api } from "@/app/hooks/api";
import { toast } from "react-toastify";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!stripe || !elements) {
      console.error("Stripe or Elements not yet loaded");
      setIsLoading(false);
      return;
    }

    try {
      const { error: confirmationError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/",
        },
      });

      if (confirmationError) {
        console.error("Payment confirmation error:", confirmationError);
      } else {
        console.log("Payment confirmed successfully!");
        window.location.href = "http://localhost:3000/";
        toast.success("Order Placed Successfully");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form bg-[#fff] p-4 mt-4 border-[1px] border-[#3A3845]">
      <h2 className="text-[#3A3845] pb-2 font-semibold">Payment</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <PaymentElement className="custom-payment-element" />
        <button
          type="submit"
          className="w-full border-[1px] border-[#3A3845] font-semibold bg-none text-[#3A3845] py-2"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
