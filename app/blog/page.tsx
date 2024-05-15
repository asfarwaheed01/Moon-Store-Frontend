import React from "react";
import Slider from "../components/slider/Slider";
import Container from "../components/Container";
import SideBar from "./components/SideBar";
import AllBlogs from "./components/AllBlogs";

const page = () => {
  return (
    <section>
      <Slider />
      <section>
        <Container>
          <section className="py-[5%]">
            <div className="blogs md:flex gap-4">
              <div className="main-blogs md:w-[70%] ">
                <AllBlogs />
              </div>
              <div className="search-section md:w-[30%] px-2 py-4 md:py-0">
                <SideBar />
              </div>
            </div>
          </section>
        </Container>
      </section>
    </section>
  );
};

export default page;
