"use client";

import SidebarSettings from "@/components/SidebarSettings";
import Container from "@/components/reutilizable/Container";
import axios, { AxiosError } from "axios";

const Settings = ({ params: { id } }: { params: { id: string } }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/user/profile/settings/modifyEmail`,
        {
          email: form.get("email"),
          _id: id,
        }
      );
    } catch (error) {
      if (error instanceof AxiosError)
        console.log(error.response?.data.message);
    }
  };

  return (
    <div className="">
      {/* <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            New Email
          </label>
          <input type="email" placeholder="New email" name="email" id="email" />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="New password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
            Save
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Settings;
