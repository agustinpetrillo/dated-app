"use client";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  useEffect(() => {
    asd();
  }, []);
  const [info, setInfo] = useState([]);
  const asd = () => {
    fetch(`http://localhost:4000/api/auth/login`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-red-950 to-teal-950">
      <div className="max-w-md w-full p-6 bg-slate-300 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Account
            </button>
            <p>{info}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;