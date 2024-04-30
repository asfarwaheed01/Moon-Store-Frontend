import React from "react";

interface CustomTextProps {
  heading: string;
  text: string;
}

const CustomText: React.FC<CustomTextProps> = ({ heading, text }) => {
  return (
    <div className="custom-text flex flex-col gap-2 justify-center items-center h-[260px] md:h-full">
      <h3 className="font-bold text-[1.75rem] font-garamond">{heading}</h3>
      <p className="md:w-[435px] w-[334px] text-center">{text}</p>
    </div>
  );
};

export default CustomText;
