"use client";

import Image from "next/image";
import axios, { AxiosError } from "axios";

const Settings = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen text-white">
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
          <p className="p-2 text-sm transition-all duration-200 rounded cursor-pointer hover:bg-gray-700">
            Change photo
          </p>
        </div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-1 text-black rounded-sm outline-none"
        />
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          className="p-1 text-black rounded-sm outline-none"
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          placeholder="Bio"
          name="bio"
          className="h-32 p-1 text-black rounded-sm outline-none resize-none"
        />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          defaultValue="gender"
          placeholder="Gender"
          className="p-1 text-gray-500 rounded-sm outline-none"
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
          className="p-1 text-gray-500 rounded-sm outline-none"
        >
          <option value="sex_preference">Select your sex preference</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <button className="px-4 py-2 font-bold text-white transition-all duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </section>
  );
};

export default Settings;
