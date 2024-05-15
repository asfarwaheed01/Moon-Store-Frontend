"use client";
import React from "react";
import Container from "../components/Container";
import CheckoutForm from "./components/CheckoutForm";
import Link from "next/link";
import RightBar from "./components/RightBar";
import { FormValues } from "./components/checkout.interface";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../config/config";

const page = () => {
  const { state } = useAuth();
  const cart = state.cart;
  const user = state.user;
  console.log(cart);
  // const handleSubmit = (formData: FormValues) => {
  //   console.log("Form Data:", formData);
  // };
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const userId = user?._id;
  const shippingCost = 15;
  const total = subtotal + shippingCost;
  const handleSubmit = async (formData: FormValues) => {
    try {
      const products = cart.map((item) => ({
        product: {
          name: item.product.name,
          description: item.product.description,
          price: item.product.price,
          category: item.product.category,
        },
        quantity: item.quantity,
      }));
      const orderData = {
        address: formData.address,
        city: formData.city,
        company: formData.company,
        country: formData.country,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        message: formData.message,
        phone: formData.phone,
        state: formData.state,
        zipCode: formData.zipCode,
        userId: userId,
        products: products,
        totalAmount: total,
      };
      const response = await axios.post(`${BASE_URL}order`, orderData);
      console.log("Order placed successfully:", response.data);
      toast.success("Order Placed Successfully.");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  return (
    <div>
      <Container>
        <section>
          <div>
            <div className="shop-links my-[2%] mx-[2%] md:mx-0">
              <p className="text-[#807F86] text-[0.875rem]">
                <Link
                  href="/"
                  className="text-[#807F86] text-[0.875rem] no-underline mr-2"
                >
                  Cart
                </Link>
                <span>/</span>
                <span className="mx-2">Shipping</span>
                <span>/</span>
                <span className="mx-2 text-[#3A3845] text-[0.875rem]">
                  Payment
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="pb-[5%]">
          <div className="md:flex gap-10">
            <div className="md:w-[70%]">
              <CheckoutForm onSubmit={handleSubmit} />
            </div>
            <div className="md:w-[30%]">
              <RightBar />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default page;
