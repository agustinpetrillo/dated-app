"use client";

import React, { useState } from "react";

const Settings = () => {
  const [sex, setSex] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [height, setHeight] = useState<string>("");

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedHobby = e.target.value;
    if (hobbies.includes(selectedHobby)) {
      // Remove the hobby if it's already selected
      setHobbies(hobbies.filter((hobby) => hobby !== selectedHobby));
    } else {
      // Add the hobby if it's not selected
      setHobbies([...hobbies, selectedHobby]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or store it locally
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sex"
          >
            Sex
          </label>
          <select
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="">Select your sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="hobbies"
          >
            Hobbies
          </label>
          <div>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hobbies"
              type="text"
              placeholder="What is your hobby?"
              value={hobbies}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setHobbies([e.target.value])
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  setHobbies([...hobbies, e.currentTarget.value.trim()]);
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="height"
          >
            Height
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="text"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
