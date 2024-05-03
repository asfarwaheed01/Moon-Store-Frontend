import React from "react";
import News from "../components/newscollection/News";
import OurTeam from "../components/team/OurTeam";
import About from "./components/About";
import Work from "./components/Work";
import Years from "./components/Years";

const page = () => {
  return (
    <div>
      <About />
      <Years />
      <Work />
      <OurTeam />
      <News />
    </div>
  );
};

export default page;
