import React from "react";
import Link from "next/link";

interface Item {
  label: string;
  link: string;
}

interface Props {
  heading: string;
  items: Item[];
}

const FooterColumn: React.FC<Props> = ({ heading, items }) => {
  return (
    <div className="footer-column w-[45%] md:w-[30%]">
      <h2 className="text-white text-lg font-semibold mb-4">{heading}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref className="text-gray-300 text-sm">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
