import { useContext } from "react";
import Image from "next/image";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";
import ChatList from "./ChatList";

export default function Matches() {
  const { userData } = useContext(Global) as GlobalContextType;
  return (
    <section className="flex flex-col max-w-sm max-h-screen bg-red-700">
      <div className="flex items-center gap-4 m-4">
        <Image
          src="/imgs/test.jpg"
          width={35}
          height={35}
          alt="profile_avatar"
          className="rounded-full"
        />
        <h5 className="text-lg font-semibold capitalize">
          {userData.name} {userData.last_name}
        </h5>
      </div>
      <ChatList />
    </section>
  );
}
