"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import Loader from "@/components/reutilizable/Loader";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/signup`,
        {
          email: formData.get("email"),
          name: formData.get("name"),
          last_name: formData.get("last_name"),
          password: formData.get("password"),
        }
      );
      if (res?.status === 201) return router.push("/home");
    } catch (error) {
      if (error instanceof AxiosError) setError(error.response?.data.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-primary">
      <p className="text-red-500">{error}</p>
      <div className="w-full max-w-md p-6 rounded-md shadow-md bg-slate-300">
        <h2 className="mb-4 text-2xl font-semibold text-center">Sign Up</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Enter your last name"
              name="last_name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <div className="mb-4">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              Create Account
            </button>
          </div>
        </form>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SignUp;
