import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TextWithImageProps {
  className?: string;
  subheading?: string;
  heading: string;
  paragraph: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
}

const TextWithImage: React.FC<TextWithImageProps> = ({
  className,
  subheading,
  heading,
  paragraph,
  link,
  image,
}) => {
  return (
    <div className={` md:flex  ${className}`}>
      <div className="sec-3-text md:w-[50%] flex h-[300px] md:h-auto flex-col py-[15%] gap-3 justify-center items-center bg-[#F7F6F5] text-center">
        {subheading && (
          <h3 className="text-[24px] font-garamond font-bold leading-32">
            {subheading}
          </h3>
        )}
        <h2 className="text-[32px] font-garamond font-bold leading-32 md:w-[389px] px-[4%] md:px-0">
          {heading}
        </h2>
        <p className="text-[16px] md:w-[370px] px-[4%] md:px-0">
          {paragraph.split("<br />").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <Link
          href={link}
          className="text-[14px] font-bold border-black border-b-2"
        >
          SHOP NOW
        </Link>
      </div>
      <div className="md:w-[50%]">
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover w-full md:h-[438px] h-[300px]"
        />
      </div>
    </div>
  );
};

export default TextWithImage;
