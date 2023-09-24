"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import logo from "../../public/logo.png";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";

const NavbarMenu = () => {
  const { userData, setUserData, loggingProvider } = useContext(
    Global
  ) as GlobalContextType;
  const { data: session, status } = useSession();

  useEffect(() => {
    const res = axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/user/profile/settings/me`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    res.then((data) => setUserData(data.data));
  }, []);

  if (!loggingProvider) {
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
          {userData ? (
            <Dropdown
              inline
              label={
                <Avatar alt="User settings" img="/imgs/test.jpg" rounded />
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
                  <Link href={`/user/settings/${userData._id}`}>Settings</Link>
                </li>
                <Dropdown.Divider />
                <li
                  className="cursor-pointer"
                  onClick={() => window.localStorage.setItem("token", "")}
                >
                  <Link href="/auth/login">Sign out</Link>
                </li>
              </ul>
            </Dropdown>
          ) : (
            <div className="space-x-2">
              <button
                onClick={() => signIn()}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                <Link href="/auth/signup">Create Account</Link>
              </button>
            </div>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" className="transition-all duration-200">
            Home
          </Navbar.Link>
          <Navbar.Link
            href={`/user/settings/${userData._id}`}
            className="transition-all duration-200"
          >
            Settings
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
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
          {session ? (
            <Dropdown
              inline
              label={
                <Avatar alt="User settings" img="/imgs/test.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm text-red-600">
                  {session?.user?.name}
                </span>
                <span className="block text-sm font-medium truncate">
                  {session?.user?.email}
                </span>
              </Dropdown.Header>
              <ul className="ml-4">
                <li className="cursor-pointer">
                  <Link href={`/user/settings/${userData._id}`}>Settings</Link>
                </li>
                <Dropdown.Divider />
                <li className="cursor-pointer" onClick={() => signOut()}>
                  <Link href="/auth/login">Sign out</Link>
                </li>
              </ul>
            </Dropdown>
          ) : (
            <div className="space-x-2">
              <button
                onClick={() => signIn()}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                <Link href="/auth/signup">Create Account</Link>
              </button>
            </div>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" className="transition-all duration-200">
            Home
          </Navbar.Link>
          <Navbar.Link
            href={`/user/settings/${userData._id}`}
            className="transition-all duration-200"
          >
            Settings
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default NavbarMenu;
