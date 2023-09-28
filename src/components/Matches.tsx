import { useContext } from "react";
import Image from "next/image";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";
import Chat from "./Chat";

export default function Matches() {
  const { userData } = useContext(Global) as GlobalContextType;
  return (
    <section className="flex flex-col max-w-xs bg-red-700 rounded-lg">
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
      <Chat />
    </section>
  );
}
