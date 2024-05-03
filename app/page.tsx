import Container from "@/app/components/Container";
import offimage from "../public/assets/off-image.png";
import vietnam from "../public/assets/vietnam.png";
import history from "../public/assets/history.png";
import BestSellers from "./components/bestsellers/BestSellers";
import Blog from "./components/blog/Blog";
import NewArrivals from "./components/newarrivals/NewArrivals";
import News from "./components/newscollection/News";
import Accessories from "./components/main/Accessories";
import Hero from "./components/main/Hero";
import TextWithImage from "./components/textwithimage/TextWithImage";
import axios from "axios";
import { BASE_URL } from "./config/config";
import { Product } from "./utils/product";
import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";

const textWithImageData = [
  {
    className: "md:h-[348px]",
    heading: "Made in Vietnam since 1450",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    link: "#",
    image: { src: vietnam.src, alt: "Alt Text" },
  },
  {
    className: "md:h-[348px] md:flex-row-reverse",
    heading: "Our History",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit",
    link: "#",
    image: { src: history.src, alt: "Alt Text" },
  },
];

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.getAll();
  console.log("token is:", token);
  return (
    <div>
      <Hero />
      <Accessories />
      <section className="sec-3 bg-white">
        <Container>
          <TextWithImage
            className="md:h-[438px]"
            heading="Up to 40% off our Christmas collection"
            paragraph="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
            link="#"
            image={{ src: offimage.src, alt: "Alt Text" }}
          />
        </Container>
      </section>

      <BestSellers />
      <section className="sec-4 bg-white">
        <Container>
          {/* <TextWithImage
            className="md:h-[348px]"
            heading="Made in viet Nam 
            since 1450"
            paragraph="Lorem ipsum dolor sit amet consectetur adipiscing eli 
            mattis sit phasellus mollis sit aliquam sit nullam neque 
            ultrices."
            link="#"
            image={{ src: vietnam.src, alt: "Alt Text" }}
          />
          <TextWithImage
            className="md:h-[348px] md:flex-row-reverse"
            heading="Our History"
            paragraph="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit"
            link="#"
            image={{ src: history.src, alt: "Alt Text" }}
          /> */}
          {textWithImageData.map((data, index) => (
            <TextWithImage key={index} {...data} />
          ))}
        </Container>
      </section>
      <NewArrivals />
      <Blog />
      <News />
    </div>
  );
}
