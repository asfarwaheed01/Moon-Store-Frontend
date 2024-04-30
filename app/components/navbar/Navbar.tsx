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

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const { user, accessToken } = state;
  console.log("Current User:", user);
  console.log("Current Access Token:", accessToken);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-[#FFFFFF]">
      <Container>
        <div className="flex justify-between py-3 items-center">
          <div className="logo">
            <Image alt="" src={logo}></Image>
          </div>
          <div className="menu flex gap-6 items-center">
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
            <Link href="/">
              <Image src={search} alt="search"></Image>
            </Link>

            <div>
              <div onClick={handleClick} className="cursor-pointer">
                <Image src={avatar} alt="Avatar" />
              </div>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
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
                  <MenuItem onClick={handleClose}>
                    <Link href="/profile">Profile</Link>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleClose}>
                    <Link href="/login">Login</Link>
                  </MenuItem>
                )}
              </Menu>
            </div>
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
