"use client";

import { useContext } from "react";
import Image from "next/image";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";

const UserProfile = () => {
  const { userData } = useContext(Global) as GlobalContextType;
  return (
    <div className="flex flex-col justify-center min-h-screen text-white">
      <h1 className="mb-5">Edit profile</h1>
      <form className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/imgs/test.jpg"
            alt=""
            width={100}
            height={100}
            className="mb-2 rounded-full"
          />
          <p className="p-2 text-sm rounded cursor-pointer hover:bg-gray-700">
            Change photo
          </p>
        </div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" />
        <label htmlFor="last_name">Last name</label>
        <input type="text" placeholder="Last name" />
        <label htmlFor="bio">Bio</label>
        <input type="text" placeholder="Bio" className="h-32" />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          defaultValue="gender"
          placeholder="Gender"
          className="text-gray-500"
        >
          <option value="gender">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="sex_preference">Sex preference</label>
        <select
          name="sex_preference"
          id="sex_preference"
          defaultValue="sex_preference"
          placeholder="Sex preference"
          className="text-gray-500"
        >
          <option value="sex_preference">Select your sex preference</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </form>
    </div>
  );
};

export default UserProfile;
