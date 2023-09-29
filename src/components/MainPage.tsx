"use client";

import { useContext } from "react";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import BackgroundPhone from "./reutilizable/BackgroundPhone";
import LikeOrNot from "./LikeOrNot";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";
import Matches from "./Matches";
import Chat from "./Chat";

export default function MainPage() {
  const { userData, openChat } = useContext(Global) as GlobalContextType;
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login");
  // }

  // if (!userData.email) {
  //   redirect("/auth/login");
  // }

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
