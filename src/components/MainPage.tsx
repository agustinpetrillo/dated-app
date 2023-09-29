"use client";

import { redirect } from "next/navigation";
import BackgroundPhone from "./reutilizable/BackgroundPhone";
import LikeOrNot from "./LikeOrNot";
import { useContext } from "react";
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

  if (!userData) {
    redirect("/auth/login");
  }

  return (
    <BackgroundPhone className="flex w-full min-h-0 bg-primary">
      <Matches />
      {!openChat ? <LikeOrNot /> : <Chat />}
    </BackgroundPhone>
  );
}
