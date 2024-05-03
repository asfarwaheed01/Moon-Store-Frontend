import React from "react";
import Map from "./components/Map";
import HeroContact from "./components/HeroContact";
import ContactForm from "./components/ContactForm";

const page = () => {
  return (
    <section className="mainSec1 relative">
      <HeroContact />
      <ContactForm />
      <Map />
    </section>
  );
};

export default page;
