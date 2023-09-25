import { useContext, useEffect, useRef } from "react";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType, PopUps } from "@/types";

const ChangeEmail = () => {
  const { openPopUp, setOpenPopUp } = useContext(Global) as GlobalContextType;
  const clickOutsideToCloseRef = useRef<HTMLFormElement>(null);

  const clickedOutside = (e: MouseEvent) => {
    if (!clickOutsideToCloseRef.current?.contains(e.target as Node)) {
      setOpenPopUp((prevState: PopUps) => ({ ...prevState, email: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickedOutside);
    return () => document.removeEventListener("click", clickedOutside);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen text-white bg-black/70 ${
        openPopUp.email ? "popup-open" : "popup-close"
      }`}
    >
      <form
        className="flex flex-col p-10 rounded-md bg-primary"
        ref={clickOutsideToCloseRef}
      >
        <h1 className="text-xl text-center mb-7">Change email</h1>
        <label htmlFor="new_password">New email</label>
        <input
          type="email"
          placeholder="New email"
          className="p-2 mb-2 rounded-sm outline-none"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="p-2 mb-5 rounded-sm outline-none"
        />
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChangeEmail;
