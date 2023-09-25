"use client";

import SidebarSettings from "@/components/SidebarSettings";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center min-h-screen px-7">
      <SidebarSettings />
      {children}
    </div>
  );
};

export default SettingsLayout;
