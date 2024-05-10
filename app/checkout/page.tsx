import React from "react";
import Container from "../components/Container";
import CheckoutForm from "./components/CheckoutForm";
import Link from "next/link";
import RightBar from "./components/RightBar";

const page = () => {
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
              <CheckoutForm />
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
