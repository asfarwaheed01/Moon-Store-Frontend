import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import search from "../../../public/assets/Search.png";
import avatar from "../../../public/assets/Avatar.png";
import heart from "../../../public/assets/Heart.png";
import cart from "../../../public/assets/Shopping cart.png";
import Link from "next/link";
import { navLinks } from "./navdata";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Container>
        <div className="flex justify-between py-3 items-center">
          <div className="logo">
            <Image alt="" src={logo}></Image>
          </div>
          <div className="menu flex gap-6 items-center">
            {navLinks.map((item, index) => (
              <Link href={item.link} className="text-[14px]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="navicons flex items-center gap-5">
            <Link href="/">
              <Image src={search} alt="search"></Image>
            </Link>
            <Link href="/">
              <Image src={avatar} alt="search"></Image>
            </Link>
            <Link href="/">
              <Image src={cart} alt="search"></Image>
            </Link>
            <Link href="/">
              <Image src={heart} alt="search"></Image>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
