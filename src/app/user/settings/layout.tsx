"use client";

import SidebarSettings from "@/components/SidebarSettings";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center min-h-screen px-7">
      <SidebarSettings />
      <div className="w-[1px] min-h-screen ml-10 bg-gray-600" />
      {children}
    </div>
  );
};

export default SettingsLayout;
