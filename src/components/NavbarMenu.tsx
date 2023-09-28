"use client";

import { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { signOut, signIn, useSession } from "next-auth/react";
import logo from "../../public/logo.png";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";

const NavbarMenu = () => {
  const { userData, setUserData, loggingProvider } = useContext(
    Global
  ) as GlobalContextType;
  const { data: session, status } = useSession();
  const [clicked, setClicked] = useState<boolean>(false);
  const clickOutsideToCloseRef = useRef<HTMLDivElement | HTMLImageElement>(
    null
  );

  const clickedOutside = (e: MouseEvent) => {
    if (!clickOutsideToCloseRef.current?.contains(e.target as Node)) {
      setClicked(false);
    }
  };

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

  useEffect(() => {
    document.addEventListener("click", clickedOutside);
    return () => document.removeEventListener("click", clickedOutside);
  }, []);

  if (!loggingProvider) {
    return (
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-3 shadow-lg px-7 bg-primary">
        <Link href="/home" className="flex">
          <Image
            alt="Date me logo"
            width={35}
            height={35}
            className="h-6 mr-2 sm:h-9"
            src={logo}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Date me
          </span>
        </Link>
        <div className="flex text-black dark:text-white md:order-2">
          {userData ? (
            <div className="relative" ref={clickOutsideToCloseRef}>
              <Image
                alt="User settings"
                src="/imgs/test.jpg"
                width={35}
                height={35}
                className="rounded-full cursor-pointer"
                onClick={() => setClicked(!clicked)}
              />
              {clicked && (
                <div
                  className={`absolute right-0 flex flex-col p-4 mt-1 bg-gray-700 rounded-md ${
                    clicked ? "popup-open" : "popup-close"
                  }`}
                >
                  <span className="block text-sm text-red-600">
                    {userData.name} {userData.last_name}
                  </span>
                  <span className="block mb-2 text-sm font-medium truncate">
                    {userData.email}
                  </span>
                  <ul>
                    <li
                      className="p-2 transition-all duration-200 rounded-sm cursor-pointer hover:bg-gray-600"
                      onClick={() => setClicked(!clicked)}
                    >
                      <Link href="/user/settings">Settings</Link>
                    </li>
                    <li
                      className="p-2 transition-all duration-200 rounded-sm cursor-pointer hover:bg-gray-600"
                      onClick={() => {
                        // window.localStorage.setItem("token", "");
                        setClicked(!clicked);
                      }}
                    >
                      <Link href="/auth/login">Sign out</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
        </div>
        <div className="space-x-4 text-white">
          <Link
            href="/home"
            className="transition-all duration-200 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/user/settings"
            className="transition-all duration-200 hover:text-gray-400"
          >
            Settings
          </Link>
        </div>
      </nav>
    );
  } // else {
  //   return (
  //     <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-7 bg-primary">
  //       <Link href="/home" className="flex">
  //         <Image
  //           alt="Date me logo"
  //           width={35}
  //           height={35}
  //           className="h-6 mr-3 sm:h-9"
  //           src={logo}
  //         />
  //         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
  //           Date me
  //         </span>
  //       </Link>
  //       <div className="flex text-black dark:text-white md:order-2">
  //         {session ? (
  //           <div>
  //             <Image
  //               alt="User settings"
  //               src="/imgs/test.jpg"
  //               width={35}
  //               height={35}
  //               className="rounded-full"
  //             />
  //             <div>
  //               <span className="block text-sm text-red-600">
  //                 {session?.user?.name}
  //               </span>
  //               <span className="block text-sm font-medium truncate">
  //                 {session?.user?.email}
  //               </span>
  //             </div>
  //             <ul className="ml-4">
  //               <li className="cursor-pointer">
  //                 <Link href={`/user/settings/profile/${userData._id}`}>
  //                   Settings
  //                 </Link>
  //               </li>
  //               <li className="cursor-pointer" onClick={() => signOut()}>
  //                 <Link href="/auth/login">Sign out</Link>
  //               </li>
  //             </ul>
  //           </div>
  //         ) : (
  //           <div className="space-x-2">
  //             <button
  //               onClick={() => signIn()}
  //               className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
  //             >
  //               Login
  //             </button>
  //             <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
  //               <Link href="/auth/signup">Create Account</Link>
  //             </button>
  //           </div>
  //         )}
  //       </div>
  //       <div>
  //         <Link href="/home" className="transition-all duration-200">
  //           Home
  //         </Link>
  //         <Link
  //           href='/user/settings'
  //           className="transition-all duration-200"
  //         >
  //           Settings
  //         </Link>
  //       </div>
  //     </nav>
  //   );
  // }
};

export default NavbarMenu;
