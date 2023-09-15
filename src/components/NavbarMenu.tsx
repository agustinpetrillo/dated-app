"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import axios, { AxiosError } from "axios";
import logo from "../../public/logo.png";
import { UserData } from "@/types";

const NavbarMenu = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    last_name: "",
    name: "",
  });

  const getUserDataFromDatabase = async (userId: string) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/user/profile/settings?userId=${userId}`
      );
      setUserData({
        name: res.data.name,
        email: res.data.email,
        last_name: res.data.last_name,
      });
    } catch (error) {
      // if (error instanceof AxiosError) console.log(error);
    }
  };

  useEffect(() => {
    getUserDataFromDatabase("65034429030f4e38cb5d928e");
  }, []);

  return (
    <Navbar fluid className="fixed w-full">
      <Navbar.Brand href="/home">
        <Image
          alt="Date me logo"
          width={35}
          height={35}
          className="h-6 mr-3 sm:h-9"
          src={logo}
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Date me
        </span>
      </Navbar.Brand>
      <div className="flex text-black dark:text-white md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm text-red-600">
              {userData.name} {userData.last_name}
            </span>
            <span className="block text-sm font-medium truncate">
              {userData.email}
            </span>
          </Dropdown.Header>
          <ul className="ml-4">
            <li className="cursor-pointer">
              <Link href="/user/settings">Settings</Link>
            </li>
            <Dropdown.Divider />
            <li className="cursor-pointer">Sign out</li>
          </ul>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/home" className="transition-all duration-200">
          Home
        </Navbar.Link>
        <Navbar.Link href="/" className="transition-all duration-200">
          About
        </Navbar.Link>
        <Navbar.Link href="/" className="transition-all duration-200">
          Services
        </Navbar.Link>
        <Navbar.Link href="/" className="transition-all duration-200">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
