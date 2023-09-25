import { useContext, useEffect, useRef } from "react";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType, PopUps } from "@/types";

const ChangePassword = () => {
  const { setOpenPopUp } = useContext(Global) as GlobalContextType;
  const clickOutsideToCloseRef = useRef<HTMLFormElement>(null);

  const clickedOutside = (e: MouseEvent) => {
    if (!clickOutsideToCloseRef.current?.contains(e.target as Node)) {
      setOpenPopUp((prevState: PopUps) => ({ ...prevState, password: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickedOutside);
    return () => document.removeEventListener("click", clickedOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen bg-black/70">
      <form
        className="flex flex-col p-6 text-white bg-black rounded-md"
        ref={clickOutsideToCloseRef}
      >
        <label htmlFor="new_password">New password</label>
        <input type="password" placeholder="New password" className="" />
        <label htmlFor="write_again_the_password">
          Write again the password
        </label>
        <input
          type="password"
          placeholder="Write again the password"
          className=""
        />
        <label htmlFor="actual_password">Actual password</label>
        <input type="password" placeholder="Actual password" className="" />
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
