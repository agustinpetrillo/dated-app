import { useContext } from "react";
import { Global } from "@/context/GlobalContext";
import { GlobalContextType } from "@/types";
import Link from "next/link";

const SidebarSettings = () => {
  const { userData } = useContext(Global) as GlobalContextType;

  return (
    <div className="flex flex-col text-white">
      <h1 className="p-2 mb-10 text-xl font-bold cursor-default">Settings</h1>
      <div className="flex flex-col text-sm">
        <Link
          href={`/user/settings/profile/${userData._id}`}
          className="p-3 rounded cursor-pointer hover:bg-gray-700"
        >
          Edit profile
        </Link>
        <Link href="/" className="p-3 rounded cursor-pointer hover:bg-gray-700">
          Change credentials
        </Link>
        <Link href="/" className="p-3 rounded cursor-pointer hover:bg-gray-700">
          Language preferences
        </Link>
        <Link href="/" className="p-3 rounded cursor-pointer hover:bg-gray-700">
          Help
        </Link>
      </div>
    </div>
  );
};

export default SidebarSettings;
