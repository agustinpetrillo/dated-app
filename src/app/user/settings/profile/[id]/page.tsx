"use client";

import { useContext } from "react";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";

const UserProfile = ({ params: { id } }: { params: { id: string } }) => {
  const { userData } = useContext(Global) as GlobalContextType;

  return (
    <section className="flex flex-col justify-center min-h-screen text-white">
      <h1 className="mb-5">Edit credentials</h1>
      <form className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder={userData.name}
          className="p-1 text-black rounded-sm outline-none"
        />
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          name="last_name"
          placeholder={userData.last_name}
          className="p-1 text-black rounded-sm outline-none"
        />
        <label htmlFor="new_email">New email</label>
        <input
          name="new_email"
          id="new_email"
          placeholder="New email"
          className="p-1 text-gray-500 rounded-sm outline-none"
        />
        <label htmlFor="new_password">New password</label>
        <input
          name="new_password"
          id="new_password"
          placeholder="New password"
          className="p-1 text-gray-500 rounded-sm outline-none"
        />
        <button className="px-4 py-2 font-bold text-white transition-all duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </section>
  );
};

export default UserProfile;
