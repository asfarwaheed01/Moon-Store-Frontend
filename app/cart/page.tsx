"use client";
import React, { useContext } from "react";
import Container from "../components/Container";
import Link from "next/link";
import { useAuth } from "@/app/context/authContext";
import CartItem from "./components/CartItem";

const page = () => {
  const { state } = useAuth();
  const { cart } = state;
  return (
    <section>
      <Container>
        <div className="Cart">
          <div>
            <div className="shop-links my-[2%]">
              <p className="text-[#807F86] text-[0.875rem]">
                <Link
                  href="/"
                  className="text-[#807F86] text-[0.875rem] no-underline"
                >
                  Home
                </Link>
                <span className="mx-1">/</span>Shopping Cart
              </p>
            </div>
          </div>
          <div className="cart-items">Cart: ({cart.length} items)</div>
          <section>
            <div className="cart-section py-[2%]">
              <CartItem />
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default page;
