import TextWithImage from "@/app/components/textwithimage/TextWithImage";
import React from "react";
import { aboutData } from "../aboutdata";
import Container from "@/app/components/Container";

const Years = () => {
  return (
    <section>
      <Container>
        {aboutData.map((data, index) => (
          <TextWithImage key={index} {...data} />
        ))}
      </Container>
    </section>
  );
};

export default Years;
