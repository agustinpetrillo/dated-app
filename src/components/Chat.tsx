import { useContext } from "react";
import Image from "next/image";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";

export default function Chat() {
  const { userData } = useContext(Global) as GlobalContextType;
  return (
    <section className="flex flex-col w-full max-h-screen min-h-screen overflow-y-auto bg-gray-700">
      {/* USER DETAILS */}
      <div className="flex items-center justify-between p-4 text-white bg-gray-800">
        <div className="flex items-center gap-2">
          <Image
            src="/imgs/test.jpg"
            width={35}
            height={35}
            alt="profile_avatar"
            className="rounded-full"
          />
          <h5 className="capitalize">
            {userData.name} {userData.last_name}
          </h5>
        </div>
        <div>
          <Image
            src="/imgs/three-dots.jpg"
            alt="three_dots"
            width={15}
            height={15}
            className="cursor-pointer invert"
          />
        </div>
      </div>

      {/* CHAT */}
      <div className="w-full h-full"></div>

      {/* SEND MESSAGES */}
      <div className="p-4 text-white bg-gray-800">
        <input
          type="text"
          className="w-full p-2 bg-gray-700 rounded-lg outline-none"
          placeholder="Type a message"
        />
      </div>
    </section>
  );
}
