import { useContext } from "react";
import { Global } from "@/context/GlobalContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarSettings() {
  const { userData } = useContext(Global) as GlobalContextType;
  const pathname = usePathname();

  return (
    <nav className="flex flex-col text-white whitespace-nowrap">
      <h1 className="px-2 mb-10 text-xl font-bold cursor-default">Settings</h1>
      <div className="flex flex-col text-sm">
        <Link
          href={`/user/settings`}
          className={`p-3 transition-all duration-200 rounded cursor-pointer hover:bg-gray-700 ${
            pathname === "/user/settings" && "bg-gray-700"
          }`}
        >
          Edit profile
        </Link>
        <Link
          href={`/user/settings/profile/${userData._id}`}
          className={`p-3 transition-all duration-200 rounded cursor-pointer hover:bg-gray-700 ${
            pathname === `/user/settings/profile/${userData._id}` &&
            "bg-gray-700"
          }`}
        >
          Change credentials
        </Link>
        <Link
          href="/user/settings/language"
          className={`p-3 transition-all duration-200 rounded cursor-pointer hover:bg-gray-700 ${
            pathname === "/user/settings/language" && "bg-gray-700"
          }`}
        >
          Language preferences
        </Link>
        <Link
          href="/user/settings/contact"
          className={`p-3 transition-all duration-200 rounded cursor-pointer hover:bg-gray-700 ${
            pathname === "/user/settings/contact" && "bg-gray-700"
          }`}
        >
          Help
        </Link>
      </div>
    </nav>
  );
}
