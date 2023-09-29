"use client";

import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import BackgroundPhone from "./reutilizable/BackgroundPhone";
import LikeOrNot from "./LikeOrNot";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";
import Matches from "./Matches";
import Chat from "./Chat";
import axios from "axios";

export default function MainPage() {
  const { userData, setUserData, openChat } = useContext(
    Global
  ) as GlobalContextType;
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login");
  // }

  // if (!userData.email) {
  //   redirect("/auth/login");
  // }

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

  if (userData.email) {
    return (
      <BackgroundPhone className="flex w-full min-h-0 bg-primary">
        <Matches />
        {!openChat ? <LikeOrNot /> : <Chat />}
      </BackgroundPhone>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 text-white">
        <h1 className="text-4xl">
          Welcome to <span className="text-red-500">Date me</span>
        </h1>
      </div>
    );
  }
}
