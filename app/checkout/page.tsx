"use client";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import CheckoutForm from "./components/CheckoutForm";
import Link from "next/link";
import RightBar from "./components/RightBar";
import { FormValues } from "./components/checkout.interface";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../config/config";
import PaymentModal from "./components/PaymentModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const page = () => {
  const { state } = useAuth();
  const cart = state.cart;
  const user = state.user;
  const [isModalOpen, setModalOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  console.log(cart);
  const stripeKey =
    process.env.STRIPE_PRIMARY_KEY ||
    "pk_test_51PEq9aI14C7BnuSwDR7HxP1O3BPRHKT67658Zd51cjaOJlApqh7qnrsZdtieCabG6fQzGRgh4iM5bLCG3s3jAYgE00Go6Kq9XS";
  const stripePromise = loadStripe(stripeKey);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shippingCost = 15;
  const total = subtotal + shippingCost;
  const backendTotal = total * 100;

  const [formData, setFormData] = useState<FormValues | null>(null);

  const handleModalOpen = (data: FormValues) => {
    setFormData(data);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePaymentSuccess = async () => {
    if (!formData) return;

    const products = cart.map((item) => ({
      product: {
        name: item.product.name,
        description: item.product.description,
        price: item.product.price,
        category: item.product.category,
      },
      quantity: item.quantity,
    }));

    const userId = user?._id;
    const shippingCost = 15;
    const subtotal = cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    const total = subtotal + shippingCost;

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

    try {
      const response = await axios.post(`${BASE_URL}order`, orderData);
      console.log("Order placed successfully:", response.data);
      toast.success("Order Placed Successfully.");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order.");
    } finally {
      handleModalClose();
    }
  };

  const handleSubmit = (data: FormValues) => {
    handleModalOpen(data);
  };

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

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentModal
              open={isModalOpen}
              onClose={handleModalClose}
              onSuccess={handlePaymentSuccess}
            />
          </Elements>
        )}
      </Container>
    </div>
  );
};

export default page;
