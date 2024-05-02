import React, { useState } from "react";

interface AccordionProps {
  title: string;
  description?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className="accordion-header text-[16px] font-semibold py-3 flex justify-between border-t cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="accordion-title">{title}</p>
        <button className="accordion-toggle">{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && (
        <div className="accordion-details">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
