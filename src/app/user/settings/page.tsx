"use client";

import { useState } from "react";
import Image from "next/image";
import axios, { AxiosError } from "axios";

export default function Settings() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (selectedImageSrc) {
      URL.revokeObjectURL(selectedImageSrc);
    }
    setSelectedFile(file || null);
    if (file) {
      setSelectedImageSrc(URL.createObjectURL(file));
    }
  };

  const handleChangeProfileImage = () => {
    return;
  };

  return (
    <section className="flex flex-col w-full min-h-0 px-10 text-white">
      <div className="flex flex-col max-w-xs">
        <h1 className="mb-5 text-xl font-bold">Edit profile</h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={selectedImageSrc}
            alt=""
            width={100}
            height={100}
            className="mb-2 rounded-full"
          />
          <label
            htmlFor="change_photo"
            className="p-2 text-sm transition-all duration-200 rounded cursor-pointer hover:bg-gray-700"
            onClick={() => handleChangeProfileImage()}
          >
            Change photo
          </label>
          <input
            type="file"
            className="hidden"
            id="change_photo"
            onChange={(e) => handleFileChange(e)}
          />
        </div>
      </div>
      <form className="flex flex-col max-w-xs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="p-1 mb-2 text-black border rounded-sm outline-none focus:border-main-color"
        />
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last name"
          className="p-1 mb-2 text-black border rounded-sm outline-none focus:border-main-color"
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          placeholder="Bio"
          id="bio"
          name="bio"
          className="h-32 p-1 mb-2 text-black border rounded-sm outline-none resize-none focus:border-main-color"
        />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          defaultValue="gender"
          placeholder="Gender"
          className="p-1 mb-2 text-gray-500 border rounded-sm outline-none focus:border-main-color"
        >
          <option value="gender">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="sex_preference">Sex preference</label>
        <select
          name="sex_preference"
          defaultValue="sex_preference"
          placeholder="Sex preference"
          className="p-1 mb-2 text-gray-500 border rounded-sm outline-none focus:border-main-color"
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
}
