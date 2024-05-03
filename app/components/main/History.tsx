import React from "react";
import Container from "../Container";
import TextWithImage from "../textwithimage/TextWithImage";
import vietnam from "../../../public/assets/vietnam.png";
import history from "../../../public/assets/history.png";

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

const History = () => {
  return (
    <section className="sec-4 bg-white">
      <Container>
        {textWithImageData.map((data, index) => (
          <TextWithImage key={index} {...data} />
        ))}
      </Container>
    </section>
  );
};

export default History;
