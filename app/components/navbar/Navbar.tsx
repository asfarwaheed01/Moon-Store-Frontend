"use client";
import React, { useContext, useState } from "react";
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
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const { user, accessToken } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleAvatarClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = (event: any) => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-[#FFFFFF] border-b-2 border-[#CAC9CF]">
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
              <div
                onClick={handleAvatarClick}
                className="cursor-pointer relative"
              >
                <Image src={avatar} alt="Avatar" />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleAvatarClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {user ? (
                    <MenuItem
                      onClick={(event) => {
                        handleAvatarClose(event);
                        event.stopPropagation();
                      }}
                    >
                      <Link href="/profile">Profile</Link>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      onClick={(event) => {
                        handleAvatarClose(event);
                        event.stopPropagation();
                      }}
                    >
                      <Link href="/login">Login</Link>
                    </MenuItem>
                  )}
                </Menu>
              </div>
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
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-lg text-gray-600 py-2 px-4 border-b border-gray-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Navbar;
