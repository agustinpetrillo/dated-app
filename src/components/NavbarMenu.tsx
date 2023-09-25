"use client";

import { useContext, useEffect } from "react";
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
      <nav className="fixed flex items-center justify-between w-full py-4 px-7">
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
            <div>
              <Image
                alt="User settings"
                src="/imgs/test.jpg"
                width={35}
                height={35}
                className="rounded-full"
              />
              {/* <div>
                <span className="block text-sm text-red-600">
                  {userData.name} {userData.last_name}
                </span>
                <span className="block text-sm font-medium truncate">
                  {userData.email}
                </span>
              </div>
              <ul className="ml-4">
                <li className="cursor-pointer">
                  <Link href={`/user/settings/profile/${userData._id}`}>
                    Settings
                  </Link>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => window.localStorage.setItem("token", "")}
                >
                  <Link href="/auth/login">Sign out</Link>
                </li>
              </ul> */}
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
            href={`/user/settings/profile/${userData._id}`}
            className="transition-all duration-200 hover:text-gray-400"
          >
            Settings
          </Link>
        </div>
      </nav>
    );
  } // else {
  //   return (
  //     <nav className="fixed flex items-center justify-between w-full py-4 px-7">
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
  //           href={`/user/settings/profile/${userData._id}`}
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
