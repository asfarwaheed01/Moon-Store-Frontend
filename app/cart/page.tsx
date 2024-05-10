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
        <div className="Cart pb-[5%]">
          <div>
            <div className="shop-links my-[2%] mx-[2%] md:mx-0">
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
          <div className="cart-items mx-[2%] md:mx-0">
            Cart: ({cart.length} items)
          </div>
          <section>
            <div className="cart-section py-[2%]">
              <CartItem />
            </div>
          </section>
          <section className="py-[2%] px-[2%] md:px-0">
            <div className="md:flex justify-between">
              <div className="md:flex gap-2">
                <div className="mb-2 md-mb-0">
                  <input
                    type="text"
                    className="w-[100%] md:w-[206px] px-2 py-2 text-[0.875rem] text-[#807F86] border-[1px] border-[#3A3845]"
                    placeholder="Coupon code"
                  />
                </div>
                <div className="mb-2 md-mb-0">
                  <button className="text-white bg-[#3A3845] py-2 w-[100%] md:w-[166px] text-center text-[0.875rem] font-semibold">
                    APPLY COUPON
                  </button>
                </div>
              </div>
              <div>
                <button className="text-white bg-[#3A3845] py-2 w-[100%] md:w-[219px] text-center text-[0.875rem] font-semibold">
                  UPDATE CART
                </button>
              </div>
            </div>
          </section>
          <section className="px-[2%] md:px-0">
            <div className="flex justify-end w-full text-white">
              <div className="bg-[#3A3845] py-[40px] px-[50px] w-[100%] md:w-[540px]">
                <h2 className="text-[1.25rem] font-semibold mb-4">
                  Cart Totals
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[1rem] font-semibold">Subtotal</p>
                    </div>
                    <div>
                      <p className="text-[1rem] font-semibold">$465.00</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[1rem] font-semibold">Cart totals</p>
                    </div>
                    <div>
                      <p className="text-[1rem] font-semibold">$500.00</p>
                    </div>
                  </div>
                  <div className="button mt-4">
                    <button className="w-[100%] text-[0.875rem] text-center py-2 border-[1px] border-white">
                      <Link href="/checkout">PROCEED TO CHECKOUT</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default page;
