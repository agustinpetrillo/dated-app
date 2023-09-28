"use client";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BackgroundPhone from "./reutilizable/BackgroundPhone";
import LikeOrNot from "./LikeOrNot";
import { useContext } from "react";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";

const MainPage = () => {
  const { userData } = useContext(Global) as GlobalContextType;
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login");
  // }

  if (!userData) {
    redirect("/auth/login");
  }

  return (
    <BackgroundPhone className="grid items-center justify-between w-full min-h-0 grid-cols-2 bg-primary p-7">
      <div className="p-4 m-auto bg-red-700 rounded-lg">
        <h1>Matches</h1>
      </div>
      <LikeOrNot />
    </BackgroundPhone>
  );
};

export default MainPage;
