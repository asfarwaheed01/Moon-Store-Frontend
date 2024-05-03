import React from "react";
import News from "../components/newscollection/News";
import Container from "../components/Container";
import about4 from "../../public/assets/about4.png";
import Image from "next/image";
import OurTeam from "../components/team/OurTeam";
import { work, aboutData } from "./aboutdata";
import TextWithImage from "../components/textwithimage/TextWithImage";
import About from "./components/About";
import Work from "./components/Work";

const page = () => {
  return (
    <div>
      <About />
      <section>
        <Container>
          {aboutData.map((data, index) => (
            <TextWithImage key={index} {...data} />
          ))}
        </Container>
      </section>
      <Work />
      <OurTeam />
      <News />
    </div>
  );
};

export default page;
