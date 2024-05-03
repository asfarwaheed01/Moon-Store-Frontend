import React from "react";
import Container from "../Container";
import TextWithImage from "../textwithimage/TextWithImage";
import offimage from "../../../public/assets/off-image.png";

const Collection = () => {
  return (
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
  );
};

export default Collection;
