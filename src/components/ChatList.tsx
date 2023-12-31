import { useContext } from "react";
import Image from "next/image";
import { Global } from "@/context/GlobalContext";

export default function ChatList() {
  const { userData, setOpenChat } = useContext(Global) as GlobalContextType;
  return (
    <section className="flex flex-col overflow-y-auto bg-gray-100 w-96">
      <h5 className="p-4">Messages</h5>
      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />

      <div
        className="flex gap-2 p-4 cursor-pointer hover:bg-gray-300"
        onClick={() => setOpenChat(true)}
      >
        <Image
          src="/imgs/test.jpg"
          width={55}
          height={55}
          alt="profile_avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="font-semibold capitalize">{userData.name}</h5>
          <p className="text-gray-800">Messages they sent</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
