import Container from "@/app/components/Container";
import React from "react";

const About = () => {
  return (
    <section className="about md:py-[5%] py-[10%]">
      <Container>
        <div className="about flex flex-col gap-4">
          <h1 className="text-center font-bold font-garamond text-[2.25rem]">
            About Moon
          </h1>
          <p className="text-center font-sans w-[309px] md:w-[436px] text-[1rem] mx-auto">
            Moon's handmade ceramic products have been around since 1650, let's
            explore our journey
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
