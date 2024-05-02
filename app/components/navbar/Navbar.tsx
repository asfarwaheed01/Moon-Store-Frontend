"use client";
import React, { useContext, useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import search from "../../../public/assets/Search.png";
import avatar from "../../../public/assets/Avatar.png";
import heart from "../../../public/assets/Heart.png";
import cart from "../../../public/assets/Shopping cart.png";
import Link from "next/link";
import { navLinks } from "./navdata";
import { AuthContext } from "@/app/context/authContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const { user, accessToken } = state;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose2 = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#FFFFFF] border-b-[1px] border-[#CAC9CF]">
      <Container>
        <div className="flex justify-between py-3 items-center px-[5%] md:px-0">
          <div className="md:hidden">
            {isMenuOpen ? (
              <CloseIcon onClick={handleMenuClose} />
            ) : (
              <MenuIcon onClick={handleMenuOpen} />
            )}
          </div>
          <div className="logo">
            <Image alt="" src={logo}></Image>
          </div>
          <div className="menu gap-6 items-center hidden md:flex">
            {navLinks.map((item, index) =>
              item.label === "Dashboard" &&
              (!user || !accessToken || !user.isAdmin) ? null : (
                <Link key={index} href={item.link} className="text-[14px]">
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="navicons flex items-center gap-5">
            <div className="hidden md:block">
              <Link href="/">
                <Image src={search} alt="search"></Image>
              </Link>
            </div>

            <div className="hidden md:block">
              <div onClick={handleMenuToggle} className="cursor-pointer">
                <Image src={avatar} alt="Avatar" />
              </div>
              {isMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    {user ? (
                      <Link
                        href="/profile"
                        onClick={handleMenuClose2}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    ) : (
                      <Link
                        href="/login"
                        onClick={handleMenuClose2}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href="/">
              <Image src={cart} alt="cart"></Image>
            </Link>
            <Link href="/" className="hidden md:block">
              <Image src={heart} alt="search"></Image>
            </Link>
          </div>
        </div>
      </Container>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="md:hidden inset-0 bg-white">
          <Container>
            <div className="flex flex-col pb-2">
              {/* {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-lg text-gray-600 py-2 px-4 border-b border-gray-200"
                >
                  {item.label}
                </Link>
              ))} */}
              {navLinks.map((item, index) =>
                item.label === "Dashboard" &&
                (!user || !accessToken || !user.isAdmin) ? null : (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-lg text-gray-600 py-2 px-4 border-b border-gray-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Navbar;
