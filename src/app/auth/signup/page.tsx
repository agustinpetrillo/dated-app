"use client";

import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/signup`,
        {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email"),
            name: formData.get("name"),
            last_name: formData.get("last_name"),
            password: formData.get("password"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res?.ok) return router.push("/home");

      if (formRef.current) {
        setTimeout(() => {
          formRef.current!.reset();
        }, 1500);
      }
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-red-950 to-teal-950">
      <div className="w-full max-w-md p-6 rounded-md shadow-md bg-slate-300">
        <h2 className="mb-4 text-2xl font-semibold text-center">Sign Up</h2>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
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
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
              id="last-name"
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
    </div>
  );
};

export default SignUp;
