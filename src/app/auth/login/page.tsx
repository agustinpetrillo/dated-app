"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/reutilizable/Loader";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res?.ok) return router.push("/home");
    } catch (error) {}

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-red-950 to-teal-950">
      <div className="w-full max-w-md p-6 rounded-md shadow-md bg-slate-300">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
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
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              Log In
            </button>
          </div>
        </form>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Login;
