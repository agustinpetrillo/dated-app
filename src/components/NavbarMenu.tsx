"use client";

import Image from "next/image";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import axios from "axios";
import logo from "../../public/logo.png";

const NavbarMenu = () => {
  return (
    <Navbar fluid className="fixed w-full">
      <Navbar.Brand href="/">
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
            <span className="block text-sm text-red-600">Javier Bonzon</span>
            <span className="block text-sm font-medium truncate">
              javier73@gmail.com
            </span>
          </Dropdown.Header>
          <ul className="ml-4">
            <li className="cursor-pointer">Settings</li>
            <Dropdown.Divider />
            <li className="cursor-pointer">Sign out</li>
          </ul>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="transition-all duration-200">
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
