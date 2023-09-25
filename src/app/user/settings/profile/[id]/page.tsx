"use client";

import { useContext, useState } from "react";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType, PopUps } from "@/types";
import ChangeEmail from "@/components/ChangeEmail";
import ChangePassword from "@/components/ChangePassword";

const UserProfile = ({ params: { id } }: { params: { id: string } }) => {
  const { userData, openPopUp, setOpenPopUp } = useContext(
    Global
  ) as GlobalContextType;

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
      </form>
      <button
        className="px-4 py-2 text-white transition-all duration-200 bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline"
        onClick={() =>
          setOpenPopUp((prevState: PopUps) => ({ ...prevState, email: true }))
        }
      >
        Change email
      </button>
      <button
        className="px-4 py-2 text-white transition-all duration-200 bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline"
        onClick={() =>
          setOpenPopUp((prevState: PopUps) => ({
            ...prevState,
            password: true,
          }))
        }
      >
        Change password
      </button>
      <button className="px-4 py-2 font-bold text-white transition-all duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
        Send
      </button>
      {openPopUp.email && <ChangeEmail />}
      {openPopUp.password && <ChangePassword />}
    </section>
  );
};

export default UserProfile;
